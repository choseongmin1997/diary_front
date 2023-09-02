<template>
  <div class="shelf">
    <div v-for="(diary, index) in diaryList" :key="index" class="floor">
    <span> {{  diary.tagYear }}</span>
  </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
// import * as dummy from '@/assets/dummys/dummys';
import axios from 'axios'

const diaryList = ref([]);


const getShelfList = () => {
  axios.get('/shelves').then((result) => {
  diaryList.value = result.data
})
}



getShelfList();
</script>
<style>
.shelf {
  display: flex;
  width: 378px;
  padding: 32px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #DB7D25;
  }

.floor {
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  background: #240D03;
  }
</style>
