<template>
    <div class="card-mask" @click.self="close">
        <div class="card">
            <div class="header">
                <h3>{{ title }}</h3>
                <button class="close" @click="close" style="padding: 0;">×</button>
            </div>
            <section class="media" v-if="media">
                <img v-if="media.type==='image'" :src="media.src" :alt="title"/>
                <video v-else-if="media.type==='video'" :poster="media.poster" controls :src="media.src"></video>
                <audio v-else-if="media.type==='audio'" :src="media.src" controls></audio>
            </section>
            <p class="desc" v-if="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ item: Object, lang: { type: String, default: 'zh-TW' } })
const emit = defineEmits(['close'])
const title = computed(()=> props.item?.title?.[props.lang] || '')
const desc  = computed(()=> props.item?.desc?.[props.lang]  || '')
const media = computed(()=> props.item?.media || null)
function close(){ 
    emit('close') 
}
</script>