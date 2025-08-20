<template>
  <a-entity :position="item.position" @click="open">
    <!-- 互動底座（命中區） -->
    <a-entity class="hotspot" look-at="#cam"
      :geometry="`primitive: circle; radius: ${radius}`"
      :material="`color: ${color}; opacity: 0.9; side: double`"
      animation__enter="property: scale; to: .7 .7 .7; startEvents: mouseenter; dur: 120"
      animation__leave="property: scale; to: .5 .5 .5; startEvents: mouseleave; dur: 120">
    </a-entity>

    <!-- 中央符號（根據類型） -->
    <a-entity
      :troika-text="`value: ${glyph}; color: white; align: center; fontSize: ${radius*0.5}; letterSpacing: 0.02`"
      position="0 0 0.01" look-at="#cam">
    </a-entity>

    <!-- 小標題（可選） -->
    <!-- <a-entity v-if="label"
      :troika-text="`value: ${label}; color: white; align: center; maxWidth: 2; fontSize: 0.22`"
      position="0 0.45 0.02" look-at="#cam">
    </a-entity> -->
  </a-entity>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },  // { id,type,position,title,desc,media }
  lang: { type: String,  default: 'zh-TW' },
  radius: { type: Number, default: 0.18 }
})
const emit = defineEmits(['open'])

const TYPE_COLOR = {
  info: '#FF8000', artifact: '#f59e0b', photo: '#8b5cf6', video: '#ef4444', audio: '#10b981', history: '#a16207'
}
const TYPE_GLYPH = {
  info: 'i', artifact: '★', photo: '▢', video: '▶', audio: '♪', history: '冊'
}
const color = computed(() => TYPE_COLOR[props.item.type] || '#0ea5e9')
const glyph = computed(() => TYPE_GLYPH[props.item.type] || 'i')
const label = computed(() => props.item.title?.[props.lang] || '')

function open(){ emit('open', props.item) }
</script>