import { createStore } from "vuex";
import service from "../services/service";

export default createStore({
  state: {
    movies: [],
    movieDetails: {},
    cinemas: [],
    userInfo: null
  },

  getters: {
    movies: (state) => (filter) => {
      if(filter) {
        return state.movies
          .filter(x => x.title.toLowerCase()
            .includes(filter.toLowerCase()));
      }
      return state.movies;
    },
    movie: (state) => (movieId) => {
      return state.movies.find(x => x.movieId === movieId);
    },
    cinemas: (state) => {
      return state.cinemas;
    },
    user: state => {
      return state.userInfo
    },
  },

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },

    SET_MOVIE(state, payload) {
      const { movieId, data } = payload;
      state.movieDetails[movieId] = data;
    },

    SET_CINEMAS(state, payload) {
      state.cinemas = payload;
    },

    SET_USER(state, userInfo) {
      state.userInfo = userInfo;
    },

    LOGOUT(state) {
      state.userInfo = null;
    },
  },
  actions: {
    async fetchMovies(context) {
      try {
        const movies = await service.fetchMovies();                
        context.commit("SET_MOVIES", movies.data);
      } catch (error) {
        console.log(error);
        context.commit("SET_MOVIES", null);
      }
    },

    async fetchMovieDetails(context, id) {
      try {
        const movie = await service.fetchMovieDetails(id);
        context.commit("SET_MOVIE", movie.data);
      } catch (error) {
        context.commit("SET_MOVIE", null);
      }
    },

    async fetchCinemas(context) {
      try {
        const cinemas = await service.fetchCinemas();                
        context.commit("SET_CINEMAS", cinemas.data);
      } catch (error) {
        console.log(error);
        context.commit("SET_CINEMAS", null);
      }
    },
  },
  modules: {},
});
