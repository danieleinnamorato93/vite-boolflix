
<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    onSearch() {
      if (this.searchTerm) {
        this.$emit('search', this.searchTerm); 
      }
    },
  },
};
</script>

<template>
  <div class="searchbar">
    <input type="text" v-model="searchTerm" @keyup.enter="onSearch" placeholder="Cerca un film o serie TV..." />
    <button @click="onSearch">Cerca</button>
  </div>
</template>


<style lang="scss" scoped>
.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
