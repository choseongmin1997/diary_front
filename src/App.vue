<template>
  <ShelfList/>
</template>

<script>
import ShelfList from './components/ShelfList.vue';


export default {
  name: 'App',
  components: {
    ShelfList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: inline-flex;
  height: 1024px;
  padding: 0px 120px;
  justify-content: center;
  align-items: flex-start;  
  gap: 33px;
}
</style>
