<template>
  <a-entity :position="hotspot.position" :rotation="hotspot.rotation || '0 0 0'" @click="onSelect">
    <!-- 箭頭圖示 -->
    <a-image
      class="hotspot"
      :src="arrowIcon"
      width="0.8"
      height="0.4"
      look-at="#cam"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      animation__mouseenter="property: scale; to: 1 1 1; dur: 200; startEvents: mouseenter"
      animation__mouseleave="property: scale; to: 0.8 0.8 1; dur: 200; startEvents: mouseleave"
    >
    </a-image>

    <!-- Tooltip -->
    <a-entity v-if="hovered" position="0 0.4 0" look-at="#cam">
      <a-plane
        :width="tooltipW"
        :height="tooltipH"
        material="color: #222; opacity: 0.7; transparent: true; side: double;"
      ></a-plane>
      <a-entity
        :troika-text="`value: ${labelText}; color: #fff; align: center; fontSize: 0.1; maxWidth: ${tooltipW - 0.1}`"
        position="0 0 0.02"
      ></a-entity>
    </a-entity>
  </a-entity>
</template>

<script setup>
import { ref, computed } from 'vue'
// 如有使用setup，可以使用defineProps()
const props = defineProps({
  hotspot: { 
    type: Object, 
    required: true 
  },
  lang: { 
    type: String,
    default: 'zh-TW' }
})
const emit = defineEmits(['select'])
const hovered = ref(false)
const labelText = computed(() => props.hotspot.label?.[props.lang] || '')
const arrowIcon = computed(() => props.hotspot.icon || '/icon/foward-arrow.png')

const tooltipW = 1
const tooltipH = 0.35

function onSelect() {
  emit('select', props.hotspot.target)
}
</script>