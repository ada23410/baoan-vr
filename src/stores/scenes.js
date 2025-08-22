import { defineStore } from 'pinia'

const base = import.meta.env.BASE_URL || '/';
function withBase(path) {
  return `${base}${path.replace(/^\//, '')}`;
}
function isHttp(path) {
  return /^https?:\/\//.test(path)
}

const SCENES = {
  // 入口與三川殿
  'sanchuan': {
    id: 'sanchuan',
    name: '三川殿',
    pano: 'front/01.jpg',
    hotspots: [
      { target: 'east-door',  position: '2 1.5 -3',  label: { 'zh-TW': '東山門' } },
      { target: 'west-door',  position: '-3 1.5 -3', label: { 'zh-TW': '西山門' } },
      { target: 'sanchuan-near', position: '-0.3 1.5 -3', label: { 'zh-TW': '三川殿（近部）' } }
    ]
  },

  'sanchuan-near': {
    id: 'sanchuan-near',
    name: '三川殿（近部）',
    pano: 'front/01-03.jpg',
    hotspots: [
      { target: 'sanchuan',  position: '0 1.5 -3', label: { 'zh-TW': '回到三川殿' } },
      { target: 'qian-dian', position: '0 2 -3',   label: { 'zh-TW': '前殿' } }
    ],
    knowledge:[
      {
        id: 'k-sanchuan-01',
        type: 'info',
        position: '1.5 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '三川殿' },
        desc:  { 'zh-TW': '三川殿正面立面採「十一開間」配置，面闊分十一柱間，中央三開間強調中軸與出入主線。屋頂為「歇山重簷」，兩層出檐分級，脊線起翹，兼具禮制層次與遮陽排雨功能；整體比例扁闊，形成端正的門面尺度與迎賓儀式感。' },
        // http 連結保留
        media: { type: 'image', src: 'https://www.baoan.org.tw/photo/paragraph/38/20190718-050533-1.png' }
      },
      {
        id: 'k-sanchuan-02',
        type: 'info',
        position: '1.5 .7 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '龍柱' },
        desc:  { 'zh-TW': '龍柱多以整塊石材圓料施作，先定中線、放樣分區，再行粗胚與細修；龍身迴繞柱身，鱗、爪、鬚須分層起降，以陰陽刻強調立體感與光影。' },
        media: { type: 'image', src: 'scene/dragon_column.jpg' }
      }
    ]
  },

  // 前殿
  'qian-dian': {
    id: 'qian-dian',
    name: '前殿',
    pano: 'front/02-02.jpg',
    hotspots: [
      { target: 'zhong-lou', position: '-2 1.5 -3', label: { 'zh-TW': '鐘樓' } },
      { target: 'sanchuan',  position: '-1 1.5 -3', label: { 'zh-TW': '回到三川殿' } },
      { target: 'gu-lou',    position: '0 1.5 -3',  label: { 'zh-TW': '鼓樓' } }
    ]
  },

  // 鼓樓
  'gu-lou': {
    id: 'gu-lou',
    name: '鼓樓',
    pano: 'front/02-03.jpg',
    hotspots: [
      { target: 'sanchuan',  position: '-1 1.5 -3', label: { 'zh-TW': '回到三川殿' } },
      { target: 'zhengdian', position: '0 1.5 -3',  label: { 'zh-TW': '正殿' } }
    ]
  },

  // 正殿
  'zhengdian':{
    id: 'zhengdian',
    name: '正殿',
    pano: 'front/02-04.jpg',
    hotspots: [
      { target: 'gu-lou',         position: '-1 1.5 -3', label: { 'zh-TW': '鼓樓' } },
      { target: 'sanchuan',       position: '0 1 -3',    label: { 'zh-TW': '回到三川殿' } },
      { target: 'zhengdian-near', position: '0 1.5 -3',  label: { 'zh-TW': '正殿（近部）' } },
      { target: 'zhong-lou',      position: '1 1.5 -3',  label: { 'zh-TW': '鐘樓' } }
    ]
  },

  // 鐘樓
  'zhong-lou':{
    id: 'zhong-lou',
    name: '鐘樓',
    pano: 'front/02-09.jpg',
    hotspots: [
      { target: 'right-corridor', position: '-1 1.5 -3', label: { 'zh-TW': '右廊' } },
      { target: 'zhengdian',      position: '0 1.5 -3',  label: { 'zh-TW': '正殿' } },
      { target: 'sanchuan',       position: '1 1.5 -3',  label: { 'zh-TW': '回到三川殿' } }
    ]
  },

  'zhengdian-near': {
    id: 'zhengdian-near',
    name: '正殿（近部）',
    pano: 'front/02-05.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { target: 'zhengdian',      position: '0 1.5 -3', label: { 'zh-TW': '回到正殿' } },
      { target: 'right-corridor', position: '1 1.5 -3', label: { 'zh-TW': '右廊' } },
      { target: 'left-corridor',  position: '-1 1.5 -3',label: { 'zh-TW': '左廊' } }
    ]
  },

  // 右廊道
  'right-corridor':{
    id: 'right-corridor',
    name: '右廊',
    pano: 'front/02-06.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { target: 'hou-dian',           position: '0 1.5 -3',  label: { 'zh-TW': '後殿' } },
      { target: 'right-corridor-near', position: '-1 1.5 -3', label: { 'zh-TW': '右廊（近部）' } }
    ]
  },

  'right-corridor-near':{
    id: 'right-corridor-near',
    name: '右廊（近部）',
    pano: 'front/02-07.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { target: 'right-corridor', position: '2 1.5 -3', label: { 'zh-TW': '回到右廊' } }
    ]
  },

  // 左廊道
  'left-corridor':{
    id: 'left-corridor',
    name: '左廊',
    pano: 'front/02-10.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { target: 'zhengdian',      position: '0 1.5 -3', label: { 'zh-TW': '回到正殿' } },
      { target: 'right-corridor', position: '1 1.5 -3', label: { 'zh-TW': '右廊' } }
    ]
  },

  'hou-dian':{
    id: 'hou-dian',
    name: '後殿',
    pano: 'front/02-08.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { target: 'left-corridor', position: '-1 1.5 -3', label: { 'zh-TW': '左廊' } },
      { target: 'zhengdian',     position: '0 1.5 -3',  label: { 'zh-TW': '回到正殿' } },
      { target: 'hou-dong',      position: '1 1.5 -3',  label: { 'zh-TW': '後棟' } }
    ]
  },

  'east-door': {
    id: 'east-door',
    name: '東山門',
    pano: 'front/01-1.jpg',
    hotspots: [
      { target: 'sanchuan', position: '0 1.5 -2', label: { 'zh-TW': '回到三川殿' } }
    ]
  },

  'west-door': {
    id: 'west-door',
    name: '西山門',
    pano: 'front/01-2.jpg',
    hotspots: [
      { target: 'sanchuan', position: '0 1.5 -2', label: { 'zh-TW': '回到三川殿' } }
    ]
  }
}

// —— 載入時統一補上 BASE_URL（只處理相對路徑）
for (const s of Object.values(SCENES)) {
  if (s.pano && !isHttp(s.pano)) {
    s.pano = withBase(s.pano.replace(/^\.?\//, "")) // 去掉前導 "./"
  }

  if (s.hotspots?.length) {
    s.hotspots.forEach(h => {
      if (h.icon && !isHttp(h.icon)) {
        h.icon = withBase(h.icon.replace(/^\.?\//, ""))
      }
    })
  }

  if (s.knowledge?.length) {
    s.knowledge.forEach(k => {
      if (k.icon && !isHttp(k.icon)) {
        k.icon = withBase(k.icon.replace(/^\.?\//, ""))
      }
      if (k.media?.src && !isHttp(k.media.src)) {
        k.media.src = withBase(k.media.src.replace(/^\.?\//, ""))
      }
    })
  }
}

export const useScenesStore = defineStore('scenes', {
  state: () => ({ lang: 'zh-TW', currentId: 'sanchuan', isNarrationPlaying: false }),
  getters: {
    current: (s) => SCENES[s.currentId],
    allScenes: () => Object.values(SCENES)
  },
  actions: {
    setLang(l){ this.lang = l },
    go(id){ if (SCENES[id]) { this.currentId = id; this.isNarrationPlaying = false } },
    toggleNarration(){ this.isNarrationPlaying = !this.isNarrationPlaying }
  }
})