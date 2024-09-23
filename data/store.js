import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({
  filteredResults: [],
  selectedMovieId: null,
  currentView: 'Results',
});

const actions = {
  searchMovies(searchTerm) {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=7cb5407b02803f0ca6e93707e68f3043&query=${searchTerm}`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=7cb5407b02803f0ca6e93707e68f3043&query=${searchTerm}`;

    axios
      .all([axios.get(movieUrl), axios.get(tvUrl)])
      .then(
        axios.spread((moviesResponse, tvResponse) => {
          state.filteredResults = [
            ...moviesResponse.data.results,
            ...tvResponse.data.results,
          ];
        })
      )
      .catch((error) => {
        console.error('Errore nella chiamata API:', error);
      });
  },
  setSelectedMovieId(id) {
    state.selectedMovieId = id;
    state.currentView = 'MovieDetails';
  },
};

const getters = {
  selectedMovie() {
    return state.filteredResults.find(item => item.id === state.selectedMovieId);
  },
};

export default { state, actions, getters };
