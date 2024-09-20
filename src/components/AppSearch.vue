<script>
export default {
  data() {
    return {
      searchTerm:''
    }
  },
  methods:{
    onSearch(){
      this.$emit('search', this.searchTerm);
    }
  }
};
</script>

<template>

<div class="searchbar">
  <input type="text" v-model="searchTerm" @input="onSearch" placeholder="Cerca un film...">
  <button type="submit">INVIA</button>
</div>
</template>

<style lang="scss" scoped>
  .search-bar {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      overflow: hidden;
    }
    button {
      padding: 1px;
      background-color: black;
      color: red;
      font-weight: bold;
    }
</style>