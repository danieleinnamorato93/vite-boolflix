
<script>
import store from '../../data/store';

export default {
  computed: {
    selectedMovie() {
      return store.getters.selectedMovie; 
    },
  },
  methods: {
    getImageUrl(path) {
      return path ? `https://image.tmdb.org/t/p/w342${path}` : 'fallback-image.png';
    },
  },
};
</script>
<template>
  <div v-if="selectedMovie">
    <h2>{{ selectedMovie.title || selectedMovie.name }}</h2>
    <p>{{ selectedMovie.overview }}</p>
    <img :src="getImageUrl(selectedMovie.poster_path)" alt="poster" />
  </div>
</template>

<style lang="scss"></style>
