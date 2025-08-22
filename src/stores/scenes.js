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
      { 
        target: 'east-door',  
        position: '1 .5 -3',
        icon: 'icon/right-arrow.png',   
        label: { 'zh-TW': '東山門' } 
      },
      { 
        target: 'west-door',  
        position: '-1.5 .5 -3',
        icon: 'icon/left-arrow.png',    
        label: { 'zh-TW': '西山門' } 
      },
      { 
        target: 'sanchuan-near', 
        position: '-0.3 .5 -3',
        icon: 'icon/foward-arrow.png', 
        label: { 'zh-TW': '三川殿（近部）' } 
      }
    ]
  },

  'sanchuan-near': {
    id: 'sanchuan-near',
    name: '三川殿（近部）',
    pano: 'front/01-03.jpg',
    hotspots: [
      { 
        target: 'sanchuan',  
        position: '0 0 -3', 
        icon: 'icon/back-arrow.png', 
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'qian-dian', 
        position: '0 1 -3',
        icon: 'icon/foward-arrow.png',    
        label: { 'zh-TW': '前殿' } 
      },
      { 
        target: 'east-door', 
        position: '1 1 -3',
        icon: 'icon/right-arrow.png',    
        label: { 'zh-TW': '東山門' } 
      },
      { 
        target: 'east-door', 
        position: '-1 1 -3',
        icon: 'icon/left-arrow.png',    
        label: { 'zh-TW': '西山門' } 
      }
    ],
    knowledge:[
      {
        id: 'k-sanchuan-01',
        type: 'info',
        position: '2.5 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '三川殿' },
        desc:  { 'zh-TW': '三川殿正面立面採「十一開間」配置，面闊分十一柱間，中央三開間強調中軸與出入主線。屋頂為「歇山重簷」，兩層出檐分級，脊線起翹，兼具禮制層次與遮陽排雨功能；整體比例扁闊，形成端正的門面尺度與迎賓儀式感。' },
        // http 連結保留
        media: { type: 'image', src: 'https://www.baoan.org.tw/photo/paragraph/38/20190718-050533-1.png' }
      },
      {
        id: 'k-sanchuan-02',
        type: 'info',
        position: '2.5 .7 -3',
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
      { 
        target: 'zhong-lou', 
        position: '-2 .5 -3', 
        icon: 'icon/left-arrow.png',    
        label: { 'zh-TW': '鐘樓' } 
      },
      { 
        target: 'zhengdian',  
        position: '1 0 -3',
        icon: 'icon/back-arrow.png',  
        label: { 'zh-TW': '正殿' } 
      },
      { 
        target: 'sanchuan',  
        position: '1 .5 -3',
        icon: 'icon/foward-arrow.png',  
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'gu-lou',    
        position: '2 .5 -3',
        icon: 'icon/right-arrow.png',     
        label: { 'zh-TW': '鼓樓' } 
      }
    ]
  },

  // 鼓樓
  'gu-lou': {
    id: 'gu-lou',
    name: '鼓樓',
    pano: 'front/02-03.jpg',
    hotspots: [
      { 
        arget: 'sanchuan',  
        position: '-1 .5 -3',
        icon: 'icon/left-arrow.png',     
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'zhengdian', 
        position: '1 .5 -3',  
        icon: 'icon/right-arrow.png', 
        label: { 'zh-TW': '正殿' } 
      }
    ],
    knowledge: [
      {
        id: 'k-gulou-01',
        type: 'info',
        position: '0 0.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '鼓樓' },
        desc: { 
          'zh-TW': '鼓樓常設於寺廟或宮殿的東側，內置巨鼓，用於晨昏擊鼓以報時，或在祭祀、重大典禮時敲擊，以莊嚴氣氛並傳遞訊號。其建築多為重檐歇山頂，樓身高聳，象徵威儀與正聲。' 
        },
        media: { type: 'image', src: 'scene/gulou.jpg' }
      }
    ]
  },

  // 正殿
  'zhengdian':{
    id: 'zhengdian',
    name: '正殿',
    pano: 'front/02-04.jpg',
    hotspots: [
      { 
        target: 'gu-lou',         
        position: '-1 .5 -3', 
        icon: 'icon/left-arrow.png',     
        label: { 'zh-TW': '鼓樓' } 
      },
      { 
        target: 'sanchuan',       
        position: '0 .5 -3',
        icon: 'icon/back-arrow.png',      
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'zhengdian-near', 
        position: '0 1 -3',
        icon: 'icon/foward-arrow.png',    
        label: { 'zh-TW': '正殿（近部）' } 
      },
      { 
        target: 'zhong-lou',      
        position: '1 .5 -3', 
        icon: 'icon/right-arrow.png',     
        label: { 'zh-TW': '鐘樓' } 
      }
    ],
    knowledge: [
      {
        id: 'k-zhengdian-01',
        type: 'info',
        position: '0 0 -2', 
        icon: 'icon/info.png',
        title: { 'zh-TW': '壓廂石' },
        desc: { 
          'zh-TW': '壓廂石為傳統建築地面常見建材，通常以花崗岩或堅硬石材製作，具耐磨與承重功能。其表面常經過磨平處理，以方便行走並保持排水順暢。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/stone.jpg' 
        }
      }
    ]
  },

  // 鐘樓
  'zhong-lou':{
    id: 'zhong-lou',
    name: '鐘樓',
    pano: 'front/02-09.jpg',
    hotspots: [
      { 
        target: 'right-corridor', 
        position: '-1 .5 -3', 
        icon: 'icon/left-arrow.png', 
        label: { 'zh-TW': '右廊' } 
      },
      { 
        target: 'zhengdian',      
        position: '0 .5 -3',
        icon: 'icon/foward-arrow.png',   
        label: { 'zh-TW': '正殿' } 
      },
      { 
        target: 'sanchuan',       
        position: '1 .5 -3', 
        icon: 'icon/right-arrow.png', 
        label: { 'zh-TW': '回到三川殿' } 
      }
    ],
    knowledge: [
      {
        id: 'k-zhonglou-01',
        type: 'info',
        position: '0 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '鐘樓' },
        desc: { 
          'zh-TW': '鐘樓多設於鼓樓相對位置，通常在西側。樓內懸掛大鐘，清晨擊鐘報時，或於法會、祭典中鳴鐘，以示肅穆與莊嚴。鐘聲悠遠，寓意驅邪醒世，亦成為傳統建築的重要聲音象徵。' 
        },
        media: { type: 'image', src: 'scene/zhonglou.jpg' }
      }
    ]
  },

  'zhengdian-near': {
    id: 'zhengdian-near',
    name: '正殿（近部）',
    pano: 'front/02-05.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { 
        target: 'zhengdian',      
        position: '0  0 -3',
        icon: 'icon/back-arrow.png',    
        label: { 'zh-TW': '回到正殿' } 
      },
      { 
        target: 'right-corridor', 
        position: '1  0 -3', 
        icon: 'icon/right-arrow.png', 
        label: { 'zh-TW': '右廊' } 
      },
      { 
        target: 'left-corridor',  
        position: '-1  0 -3',
        icon: 'icon/left-arrow.png', 
        label: { 'zh-TW': '左廊' } 
      }
    ],
    knowledge: [
      {
        id: 'k-zhengdian-near-01',
        type: 'info',
        position: '0 1.5 -3',   
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '真人所居牌匾' 
        },
        desc: { 
          'zh-TW': '保生大帝又稱吳真人或大道公，棄官從醫，被視為紫微星降世的化身，流傳有人成神的故事。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/true_man.jpg' 
        }
      },
      {
        id: 'k-zhengdian-near-02',
        type: 'info',
        position: '1 1.5 -3', 
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '黑虎將軍' 
        },
        desc: { 
          'zh-TW': '相傳保生大帝曾醫治一隻傷病吃人虎，虎獸感念救治之恩而歸順，後被收編為坐騎，成為護衛神將「黑虎將軍」。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/tiger.jpg' 
        }
      },
        {
        id: 'k-zhengdian-near-03',
        type: 'info',
        position: '3 1.5 -3',  
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '教科文組織' 
        },
        desc: { 
          'zh-TW': '廟宇於1995至2003年間進行修復工程，秉持「整舊如舊」原則，使建築細節恢復歷史原貌，並於2003年獲得聯合國教科文組織（UNESCO）的肯定。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/UNESCO.png' 
        }
      }
    ]
  },

  // 右廊道
  'right-corridor':{
    id: 'right-corridor',
    name: '右廊',
    pano: 'front/02-06.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { 
        target: 'hou-dian',           
        position: '0 .5 -3',
        icon: 'icon/foward-arrow.png',   
        label: { 'zh-TW': '後殿' } 
      },
      { 
        target: 'right-corridor-near', 
        position: '-1 .5 -3', 
        icon: 'icon/left-arrow.png',   
        label: { 'zh-TW': '右廊（近部）' } 
      }
    ],
    knowledge: [
      {
        id: 'k-unesco',
        type: 'info',
        position: '0 1.5 -3',  
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '教科文組織' 
        },
        desc: { 
          'zh-TW': '廟宇於1995至2003年間進行修復工程，秉持「整舊如舊」原則，使建築細節恢復歷史原貌，並於2003年獲得聯合國教科文組織（UNESCO）的肯定。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/UNESCO.png' 
        }
      }
    ]
  },

  'right-corridor-near':{
    id: 'right-corridor-near',
    name: '右廊（近部）',
    pano: 'front/02-07.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { 
        target: 'right-corridor', 
        position: '2 .5 -3',
        icon: 'icon/back-arrow.png',   
        label: { 'zh-TW': '回到右廊' } 
      }
    ]
  },

  // 左廊道
  'left-corridor':{
    id: 'left-corridor',
    name: '左廊',
    pano: 'front/02-10.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { 
        target: 'zhengdian',      
        position: '0 .5 -3', 
        icon: 'icon/foward-arrow.png',  
        label: { 'zh-TW': '回到正殿' } },
      { 
        target: 'right-corridor', 
        position: '-1 .5 -3', 
        icon: 'icon/left-arrow.png',  
        label: { 'zh-TW': '右廊' } 
      }
    ]
  },

  'hou-dian':{
    id: 'hou-dian',
    name: '後殿',
    pano: 'front/02-08.jpg',
    rotation: '0 -90 0',
    hotspots: [
      { 
        target: 'left-corridor', 
        position: '-1 .5 -3',
        icon: 'icon/left-arrow.png',   
        label: { 'zh-TW': '左廊' } 
      },
      { 
        target: 'zhengdian',     
        position: '0 .5 -3',
        icon: 'icon/back-arrow.png',     
        label: { 'zh-TW': '回到正殿' } 
      },
      { 
        target: 'hou-dong',      
        position: '1 .5 -3',
        icon: 'icon/right-arrow.png',     
        label: { 'zh-TW': '後棟' } 
      }
    ],
    knowledge: [
      {
        id: 'k-hou-dian-01',
        type: 'info',
        position: '0 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '主神神農殿' },
        desc: { 
          'zh-TW': '神農氏是中華民族的重要祖先之一，被尊為「百草之神」。他嚐百草、辨五穀，教導人類農耕與醫藥知識，因此被後世尊奉為農業與醫藥之神。神農氏的故事象徵著勤勞與智慧，對後世農業文明有深遠影響。' 
        },
        media: { type: 'image', src: 'scene/shennong.jpg' }
      },
      {
        id: 'k-hou-dian-01',
        type: 'info',
        position: '4 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '井' },
        desc: { 
          'zh-TW': '過去廟中信眾求得藥籤後，會以井水配合使用，象徵藥效與神力的結合。井水被視為靈水，與廟宇周邊的中藥行與藥草產業也有著密切關聯（相關細節待進一步查證）。' 
        },
        media: { type: 'image', src: 'scene/well.jpg' }
      },
      {
        id: 'temple-xiziting',
        type: 'info',
        position: '2.5 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '惜字亭' },
        desc: { 
          'zh-TW': '昔日人們珍惜讀書機會，對筆墨紙均抱持敬重與珍惜之心。惜字亭象徵尊重文字、崇尚知識的精神。'
        },
        media: { type: 'image', src: 'scene/word_temple.jpg' }
      }
    ]
  },

  'east-door': {
    id: 'east-door',
    name: '東山門',
    pano: 'front/01-1.jpg',
    hotspots: [
      { 
        target: 'sanchuan', 
        position: '0 .5 -2', 
        icon: 'icon/back-arrow.png',  
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'sanchuan-near', 
        position: '-1 .5 -2',
        icon: 'icon/left-arrow-01.png', 
        label: { 'zh-TW': '三川殿（近部）' } 
      }
    ]
  },

  'west-door': {
    id: 'west-door',
    name: '西山門',
    pano: 'front/01-2.jpg',
    hotspots: [
      { 
        target: 'sanchuan', 
        position: '0 .5 -2',
        icon: 'icon/back-arrow.png',   
        label: { 'zh-TW': '回到三川殿' } 
      },
      { 
        target: 'sanchuan-near', 
        position: '1 .5 -2',
        icon: 'icon/right-arrow-01.png', 
        label: { 'zh-TW': '三川殿（近部）' } 
      }
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