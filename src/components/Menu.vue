<template>
  <div class="ui-menu">
    <!-- 功能按鈕（展開選單） -->
    <button class="menu-btn" @click="toggleMenu">☰</button>

    <!-- 選單 -->
    <div v-if="open" class="menu-panel">
      <button @click="goFullscreen">全螢幕</button>
      <button @click="showHelp = true">操作教學</button>
    </div>

    <!-- 教學彈窗 -->
    <div v-if="showHelp" class="overlay">
      <div class="dialog">
        <div class="info">
          <img src="/scene/intro.png" alt="">
        </div>
        <button class="go" @click="showHelp = false">關閉</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const open = ref(false)
const showHelp = ref(false)

function toggleMenu() {
  open.value = !open.value
}

function goFullscreen() {
  const elem = document.documentElement
  if (!document.fullscreenElement) {
    elem.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

onMounted(() => {
  const hasSeenHelp = localStorage.getItem('hasSeenHelp')
  if (!hasSeenHelp) {
    showHelp.value = true
    localStorage.setItem('hasSeenHelp', 'true') // 標記為已看過
  }
})
</script>