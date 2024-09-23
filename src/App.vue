
<script>
import AppSearch from './components/AppSearch.vue';
import Results from './components/Results.vue';
import MovieDetails from './components/MovieDetails.vue';
import store from '../data/store'

export default {
  components: {
    AppSearch,
    Results,
    MovieDetails,
  },
  computed: {
    currentView() {
      return store.state.currentView;
    },
  },
  methods: {
    search(searchTerm) {
      store.actions.searchMovies(searchTerm);
    },
  },
};
</script>
<template>
  <div id="app"> 
    <AppSearch @search="search" />
    <component :is="currentView" />
  </div>
</template>




<style lang="scss">
@use "../src/style/general.scss"
</style>