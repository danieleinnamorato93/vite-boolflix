<script>
import AppSearch from './AppSearch.vue';
import axios from 'axios';
export default {
  data() {
    return {
      movies: []
    
      
    };
  },
  components:{
    AppSearch,
  },
  methods: {searchMovies(searchTerm) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7cb5407b02803f0ca6e93707e68f3043&query=${searchTerm}`)
    .then(response=>{
      this.movies = response.data.results;
      
    })
    .catch(error => {
          console.error("Errore nella ricerca:", error);
        });
    
  }
}
};

</script>

<template>
<AppSearch @search="searchMovies"/>
<ul v-if="movies.length > 0">
  <li v-for="movie in movies" :key="movie.id">
   <h3>Titolo:{{ movie.title }}</h3>
   <h5>Titolo Originale:{{ movie.original_title }}</h5>
   <h5>Lingua:{{ movie.original_language }}</h5>
   <h5>Voto:{{ movie.vote_average }}</h5>
    </li>
  </ul>
  <p v-else>Nessun film trovato</p>
</template>

<style lang="scss" scoped>
</style>