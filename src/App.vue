<template>
  <div>
    <div id="scene-title">{{ current.name }}</div>
    <VRScene />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useScenesStore } from '@/stores/scenes'
import VRScene from './components/VRScene.vue'

const store = useScenesStore()
const current = computed(() => store.current)
</script>
