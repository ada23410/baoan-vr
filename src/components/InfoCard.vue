<template>
    <div class="card-mask" @click.self="close">
        <div class="card">
            <div class="header">
                <h3>{{ title }}</h3>
                <button class="close" @click="close" style="padding: 0;">×</button>
            </div>
            <section class="media" v-if="media">
                    <!-- Loading Spinner -->
                <div v-if="loading" class="media-loading">
                <div class="spinner"></div>
                <p>載入中...</p>
                </div>
                <img 
                    v-if="media.type==='image'" 
                    :src="media.src" :alt="title"
                    @load="onLoaded" 
                    @error="onError" 
                />
                <iframe
                    v-if="media.type==='youtube'"
                    :src="`${media.src}?autoplay=1&mute=1&rel=0`"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    width="100%"
                    height="auto"
                    @load="onLoaded"
                    @error="onError" 
                ></iframe>

                <audio 
                    v-else-if="media.type==='audio'" 
                    :src="media.src" controls
                    @load="onLoaded" 
                    @error="onError" 
                ></audio>
            </section>
            <p class="desc" v-if="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({ 
  item: Object, 
  lang: { type: String, default: 'zh-TW' } 
})
const emit = defineEmits(['close'])

const title = computed(()=> props.item?.title?.[props.lang] || '')
const desc  = computed(()=> props.item?.desc?.[props.lang]  || '')
const media = computed(()=> props.item?.media || null)

const loading = ref(true)

function close(){ emit('close') }

function onLoaded(){
    loading.value = false
}
function onError(e){
    console.error("媒體載入失敗:", e)
    loading.value = false
}

// 每次開新卡片時，重新開啟 loading 狀態
watch(media, () => { 
    if (media.value) loading.value = true 
})
</script>