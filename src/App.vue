<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
const goAbout = () => {
  router.push('/about')
}
</script>

<template>
  <div>
    <BackButton />
    <div @click="goHome">Home</div>
    <div @click="goAbout">about</div>
  </div>

  <RouterView />
</template>

<style scoped></style>
