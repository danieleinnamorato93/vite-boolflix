
<script>
import store from '../../data/store';

export default {
  computed: {
    filteredResults() {
      return store.state.filteredResults;
    },
  },
  methods: {
    showDetails(id) {
      store.actions.setSelectedMovieId(id);
    },
    getImageUrl(path) {
      return path ? `https://image.tmdb.org/t/p/w342${path}` : 'fallback-image.png';
    },
    getFlag(language) {
   return language ? `https://flagcdn.com/16x12/${language.toLowerCase()}.png` : 'fallback-flag.png';
    },
    getStars(vote) {
    return '★'.repeat(Math.ceil(vote / 2)) + '☆'.repeat(5 - Math.ceil(vote / 2));
  },
},
};
</script>
<template>
  <ul>
    <li v-for="item in filteredResults" :key="item.id" @click="showDetails(item.id)">
  <img :src="getImageUrl(item.poster_path)" alt="poster" />
  <p>{{ item.title || item.name }}</p>
  <p>Titolo Originale: {{ item.original_title || item.original_name }}</p>
  <p>Lingua Originale: <img :src="getFlag(item.original_language)" alt="flag" /></p>
  <p class="star-rating">Voto: {{ getStars(item.vote_average) }}</p>
</li>
  </ul>
</template>

<style lang="scss">
.star-rating{
  color: red;
  font-size: 20px;
}
</style>
