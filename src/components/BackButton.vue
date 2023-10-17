<script setup lang="ts">
import WebApp from '@twa-dev/sdk'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

const isWebApp = !!WebApp.initData
const router = useRouter()

const emit = defineEmits(['click'])

function onClick() {
  emit('click')
  router.back()
}

onMounted(() => {
  if (isWebApp) {
    WebApp.BackButton.show()
    WebApp.BackButton.onClick(onClick)
  }
})

onUnmounted(() => {
  if (isWebApp) {
    WebApp.BackButton.hide()
    WebApp.BackButton.offClick(onClick)
  }
})
</script>

<template>
  <button @click="onClick">back</button>
  <!-- <NavBar left-arrow @click-left="onClick" /> -->
</template>
