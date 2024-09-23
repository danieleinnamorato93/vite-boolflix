<script>
import AppSearch from './AppSearch.vue';
import Results from './Results.vue';
import movieDetails from './movieDetails.vue';
import axios from 'axios';
export default {
  data() {
    return {
      movies: [],
      currentView:'Results',
      selectedMovieId: null,
      filteredResults:[],
    
      
    };
  },
  components:{
    AppSearch,
    Results,
    movieDetails
  },

  methods: {
    search(searchTerm) {
      const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${searchTerm}`;
      const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${searchTerm}`;
      
      axios.all([axios.get(movieUrl), axios.get(tvUrl)])
        .then(axios.spread((moviesResponse, tvResponse) => {
          
          this.filteredResults = [
            ...moviesResponse.data.results.map(movie => ({
              id: movie.id,
              title: movie.title,
              original_title: movie.original_title,
              original_language: movie.original_language,
              vote_average: movie.vote_average,
              production_countries: movie.production_countries,
              type: 'movie'
            })),
            ...tvResponse.data.results.map(tv => ({
              id: tv.id,
              title: tv.name,
              original_title: tv.original_name,
              original_language: tv.original_language,
              vote_average: tv.vote_average,
              production_countries: tv.origin_country.map(countryCode => ({ iso_3166_1: countryCode })),
              type: 'tv'
            }))
          ];
        }))
        .catch(error => {
          console.error('Errore nella chiamata API:', error);
        });

      this.currentView = 'Results';
    },
    showMovieDetails(movieId) {
      this.currentView = 'MovieDetails';
      this.selectedMovieId = movieId;
    },
  },
};
</script>
      






<template>
<AppSearch @search="search"/>
<component :is="currentView" :results="filteredResults" @show-movie="showMovieDetails" />
  <Results/>
  <movieDetails/>
</template>

<style lang="scss" scoped>
</style>