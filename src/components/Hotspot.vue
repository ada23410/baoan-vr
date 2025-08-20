<template>
    <a-entity  :position="hotspot.position" :rotation="hotspot.rotation || '0 0 0'" @click="onSelect">
        <a-plane
            class="hotspot"  
            width=".8" 
            height="0.4" 
            color="#222" 
            material="opacity: 0.8; side: double"
            position="0 0 0"
            >
        </a-plane>

        <a-entity
            :troika-text="`align: center; color: white; fontSize: 0.1; maxWidth: 2; value: ${labelText}`"
            position="0 0 0.02"
            look-at="#cam">
        </a-entity>
    </a-entity>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    hotspot: { 
        type: Object, 
        required: true },
    lang: { 
        type: String, 
        default: 'zh-TW' }
})
const emit = defineEmits(['select'])
const labelText = computed(() => props.hotspot.label?.[props.lang] || '')

function onSelect(){ 
    emit('select', props.hotspot.target) 
}
</script>
