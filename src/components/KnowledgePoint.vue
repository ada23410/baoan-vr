<template>
    <a-entity :position="item.position" @click="open">
    <!-- 圖示（被 raycaster 命中 → 負責觸發 hover） -->
        <a-image
            class="hotspot"
            :src="iconSrc"
            :width="iconSize"
            :height="iconSize"
            position="0 0 0.01"
            look-at="#cam"
            scale="1.5 1.5 1"
            @mouseenter="hovered = true"
            @mouseleave="hovered = false"
            animation__mouseenter="property: scale; to: 1.7 1.7 1; dur: 200; startEvents: mouseenter"
            animation__mouseleave="property: scale; to: 1.5 1.5 1; dur: 200; startEvents: mouseleave">
        </a-image>

        <!-- Tooltip（顯示在圖示上方一點點） -->
        <a-entity :visible="hovered" position="0 0.42 0" look-at="#cam">
            <a-plane
                :width="tooltipW" :height="tooltipH"
                material="color: #272727; opacity: 0.7; transparent: true; side: double;"
                position="0 0 0.01">
            </a-plane>
            <a-entity
                :troika-text="`value: ${label}; color: #fff; align: center; maxWidth: ${tooltipW - 0.1}; fontSize: 0.1`"
                position="0 0 0.02">
            </a-entity>
        </a-entity>
    </a-entity>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item:   { type: Object, required: true }, // { id,type,position,title,desc,media,icon? }
  lang:   { type: String, default: 'zh-TW' },
  radius: { type: Number, default: 0.18 }
})
const emit = defineEmits(['open'])
const hovered = ref(false)

// 圖示：使用 public/icon/ 下的 PNG
const TYPE_ICON = { info: '/icon/info.png' }
const iconSrc  = computed(() => props.item.icon || TYPE_ICON[props.item.type] || '/icon/info.png')
const iconSize = computed(() => props.radius * 1.5)

// 小標題內容與對話框尺寸（可依需要調整）
const label    = computed(() => props.item.title?.[props.lang] || '')
const tooltipW = .8   
const tooltipH = 0.32 

function open(){ emit('open', props.item) }
</script>