<template>
  <div v-for="(diary, index) in diaryList" :key="index">
    <span> {{  index  }}</span>
    <span> {{  diary }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const diaryList = ref([]);
console.log("hello");
axios.get('/shelves').then((result) => {
  diaryList.value = result.data
})

  
</script>

