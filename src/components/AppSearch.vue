<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
<h2>AppSearch</h2>
<div class="searchbar">
  <input type="text" placeholder="Cerca...">
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