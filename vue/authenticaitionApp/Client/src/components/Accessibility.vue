<template>
  <div>
    <Triangle :imageUrl="getImageUrl('Generic-Hero-Slider-d.jpg')" 
      :height="'400px'" :headerText="'Accessibility'" />

    <div class="card-columns">
      <div class="card">
        <img class="card-img-top" src="../assets/vision.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Audio Description Films</h5>
          <span class="badge badge-pill badge-info">AD</span>
          <p class="card-text">Providing audio assistance for vision-impaired</p>
          <a href="#" class="btn btn-light"><u>More info</u></a>
        </div>
      </div>            
      <div class="card">
        <img class="card-img-top" src="../assets/OCA.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Open Caption Films</h5>
          <span class="badge badge-pill badge-primary">OC</span>
          <p class="card-text">Bringing Open Caption films to the Deaf & Hard of Hearing</p>
          <a href="#" class="btn btn-light"><u>More info</u></a>
        </div>
      </div> 
      <div class="card">
        <img class="card-img-top" src="../assets/cc.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Closed Captions Films</h5>
          <span class="badge badge-pill badge-success">CC</span>
          <p class="card-text">Providing support for hearing-impaired cinema patrons.</p>
          <a href="#" class="btn btn-light"><u>More info</u></a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="../assets/Sensory-Friendly-Sessions-t.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Sensory Friendly Films</h5>
          <span class="badge badge-pill badge-warning">SFF</span>
          <p class="card-text">Sensory friendly movie sessions for autistic people</p>
          <a href="#" class="btn btn-light"><u>More info</u></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Triangle from '@/components/Triangle';
export default {
  components: {
    Triangle,
  },
  methods: {
    getImageUrl: function (imgPath) {
      return require(`../assets/${imgPath}`);
    },
  },
};
</script>

<style scoped>
.card-columns {
  column-count: 4;
  margin: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
}

.card-img-top {
  height: 250px;
}
</style>