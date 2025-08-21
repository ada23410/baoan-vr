<template>
  <div style="height:100vh; width:100vw;">
    <div class="ui-layer">
      <div class="controls" :class="{ open: isOpen }">
        <!-- 切換 icon -->
        <button class="icon" @click="toggle">
          <img src="/public/icon/down-arrow.png" alt="" />
        </button>
        <h3 class="shortcut">快捷鍵</h3>
        <div class="buttons">
          <button class="button" v-for="s in allScenes" :key="s.id" @click="go(s.id)">
            {{ s.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- A-Frame 場景 -->
    <a-scene renderer="antialias: true; colorManagement: true"
      vr-mode-ui="enabled: true"
      device-orientation-permission-ui="enabled: true">

      <!-- 相機 + 中央光圈 -->
      <a-entity id="rig">
        <a-entity id="cam" camera look-controls position="0 1.6 0">
          <a-cursor fuse="true" fuseTimeout="1200" raycaster="objects: .hotspot"></a-cursor>
        </a-entity>
      </a-entity>

      <!-- 360 背景 -->
      <a-sky :src="current.pano" rotation="1.5 -90 0"></a-sky>

      <!-- 熱點 -->
      <Hotspot
        v-for="(h,i) in current.hotspots"
        :key="i"
        :hotspot="h"
        :lang="lang"
        @select="go" />

      <!-- 資訊點 -->
      <KnowledgePoint
        v-for="(k,i) in current.knowledge || []"
        :key="k.id || i"
        :item="k"
        :lang="lang"
        @open="openKP" />

      <!-- 卡片覆蓋層 -->
      <InfoCard v-if="activeKP" :item="activeKP" :lang="lang" @close="activeKP=null" />

      <!-- 預載資訊 -->
      <a-assets>
        <img v-for="s in allScenes" :key="s.id" :id="`pano-${s.id}`" :src="s.pano" crossorigin="anonymous" />
      </a-assets>
    </a-scene>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useScenesStore } from '@/stores/scenes'
import Hotspot from './Hotspot.vue'
import KnowledgePoint from './KnowledgePoint.vue'
import InfoCard from './InfoCard.vue'

const store = useScenesStore()
const lang = ref(store.lang)
const activeKP = ref(null)

const current = computed(() => store.current)
const allScenes = computed(() => store.allScenes)

const isOpen = ref(true)  // 預設展開
function toggle(){ isOpen.value = !isOpen.value }

// 直接切換
function go(id){ 
  store.go(id) 
}
function openKP(item){ 
  activeKP.value = item 
}
</script>