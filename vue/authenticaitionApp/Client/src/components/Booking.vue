<template>
  <div>
    <Loader v-if="isLoading" />
    <Triangle :imageUrl="movie.graphicUrl" 
      :height="'300px'" :showCard="true" :cardText="'Watch trailer'" :blurCard="true" />      
    <nav>
      <div class="nav nav-tabs m-5" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          >Sessions</a
        >
        <a
          class="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          >About</a
        >
        <a
          class="nav-item nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-contact"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          >Offers</a
        >
      </div>
    </nav>
    <div class="tab-content m-5" id="nav-tabContent">
      <div class="tab-pane fade show active text-left" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="col-md-4 pl-0">
          <select class="custom-select custom-select-lg mb-3" v-model="selectedCinema">
            <option selected value="default">Where do you want to watch this?</option>
            <option v-for="cinema in cinemas" :key="cinema.id">
              {{ cinema.displayName }}
            </option>
          </select>
        </div>

        <nav v-if="selectedCinema !== 'default'">
          <div class="nav nav-tabs ml-0" id="nav-tab-when" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-today-tab"
              data-toggle="tab"
              href="#nav-today"
              role="tab"
              aria-controls="nav-today"
              aria-selected="true"
              v-on:click="timeOfDay = null"
              >TODAY</a
            >
            <a
              class="nav-item nav-link"
              id="nav-tomorrow-tab"
              data-toggle="tab"
              href="#nav-tomorrow"
              role="tab"
              aria-controls="nav-tomorrow"
              aria-selected="false"
              v-on:click="timeOfDay = null"
              >TOMORROW</a
            >
            <a
              class="nav-item nav-link"
              id="nav-future-tab"
              data-toggle="tab"
              href="#nav-future"
              role="tab"
              aria-controls="nav-future"
              aria-selected="false"
              v-on:click="timeOfDay = null"
              >FUTURE</a
            >
          </div>
        </nav>

        <div class="tab-content mt-4 mb-4" id="nav-CinemaContent" v-if="selectedCinema !== 'default'">
          <div class="tab-pane fade show active text-left" id="nav-today" role="tabpanel" aria-labelledby="nav-today-tab">
            <button class="btn btn-light border border-secondary mr-2 mt-2" 
              v-bind:class="{ active: timeOfDay === t.completeTime }"
              v-for="t in times" :key="t.time"
              v-on:click="setTime(t.completeTime)">
              {{ t.time }} <span class="badge badge-dark ml-5">{{ t.ampm }}</span>
            </button>
          </div>
          <div class="tab-pane fade show text-left" id="nav-tomorrow" role="tabpanel" aria-labelledby="nav-tomorrow-tab">
            <button
              class="btn btn-light border border-secondary mr-2 mt-2"
              v-bind:class="{ active: timeOfDay === t.completeTime }"
              v-for="t in times"
              :key="t.time"
              v-on:click="setTime(t.completeTime)"
            >
              {{ t.time }} <span class="badge badge-dark ml-5">{{ t.ampm }}</span>
            </button>
          </div>
          <div class="tab-pane fade show text-left" id="nav-future" role="tabpanel" aria-labelledby="nav-future-tab">
            <div class="input-group col-md-3 p-0">
              <input type="date" class="form-control" aria-label="Select a date" v-model="futureDate" />
            </div>
            <div class="mt-2" v-if="futureDate">
              <button
                class="btn btn-light border border-secondary mr-2 mt-2"
                v-bind:class="{ active: timeOfDay === t.completeTime }"
                v-for="t in times"
                :key="t.time"
                v-on:click="setTime(t.completeTime)"
              >
                {{ t.time }} <span class="badge badge-dark ml-5">{{ t.ampm }}</span>
              </button>
            </div>
          </div>
        </div>
        <button v-if="bookingVisible" class="btn btn-lg btn-primary col-md-2">Book</button>
      </div>
      <div class="tab-pane fade text-left" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        {{ movie.synopsis }}
      </div>
      <div class="tab-pane fade text-left" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div class="jumbotron">
          <h1 class="display-4">Oh no!</h1>
          <p class="lead">You missed on all of our offers, but don't worry, we have offers all year round.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader';
import Triangle from '@/components/Triangle';
import store from '../store';
import { generateTimes } from '../utils/timeGenerator';
export default {
  data() {
    return {
      isLoading: true,
      selectedCinema: 'default',
      futureDate: null,
      timeOfDay: null,
    };
  },
  computed: {
    bookingVisible() {
      return this.selectedCinema && this.timeOfDay;
    },
    times() {
      return generateTimes();
    },
    movie() {
      return this.$store.getters.movie(this.$route.params.movieId);
    },
    ...mapGetters(['cinemas']),
  },
  methods: {
    setTime: function (time) {
      this.timeOfDay = time;
      this.$forceUpdate();
    }
  },
  created() {
    store.dispatch('fetchCinemas').then(() => {
      this.isLoading = false;
    });
  },
  components: {
    Loader,
    Triangle
  },
};
</script>