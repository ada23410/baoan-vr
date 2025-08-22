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
        title: { 'zh-TW': '外觀' },
        desc:  { 'zh-TW': '大龍峒保安宮的三川殿，又稱前殿，位於整體建築的第一進，面寬五開間（兩柱之間的空間為一開間），加上左右山門各三開間，整體正面寬達十一開間，視覺氣勢恢弘。以左門為龍門、右門為虎門，門口擺放仁獸一對，屋頂採用重簷歇山式結構，構成了屋宇高低錯落、屋簷翼角飛揚的視覺效果。大楣上雕有雙龍雙鳳，四角雀替雕有飛龍與鰲魚，中樑則設計辟邪的太極及後天八卦圖案，另外在「看架斗栱」上刻有神情各異的八仙、賜福天官與騎鶴仙翁。' },
        // http 連結保留
        media: { type: 'image', src: 'https://www.baoan.org.tw/photo/paragraph/38/20190718-050533-1.png' }
      },
      {
        id: 'k-sanchuan-02',
        type: 'info',
        position: '2.5 .7 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '單龍柱' },
        desc:  { 'zh-TW': '大龍峒保安宮三川殿的單龍盤柱之一，立於嘉慶九年（1804年），為保安宮現存最早的石雕作品，龍身雕刻於八角石柱之上，四爪盤龍，前足踏浪、後爪攀雲，呈現流暢自然的動感與細膩造型，與正殿的雙龍盤柱相比，三川殿的單龍柱僅雕一條龍，造型端莊、是清中葉石雕龍柱的重要代表。匠師雕工筆法洗練，線條圓潤流暢，以寫實手法刻畫龍頭細節與肌肉骨架，使龍體真實逼真。' },
        media: { type: 'image', src: 'scene/dragon_column.jpg' }
      },
      {
        id: 'k-sanchuan-03',
        type: 'info',
        position: '2.5 0 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '石獅' },
        desc:  { 'zh-TW': '傳統廟宇前多設一對石獅，分別為雄與雌。依習俗，自正殿向外望去，左為陽、右為陰，因此左側為雄獅，右側為雌獅。大龍峒保安宮三川殿前的石獅亦循此配置，但特別之處在於，本應閉口的母獅卻誤雕成張口，與傳統規制不同。相傳匠師為此未向廟方收取母獅的工資，成為一段有趣的傳說。' },
        media: { type: 'image', src: 'scene/stone_tiger.jpg' }
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
    name: '西護室及鼓樓',
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
        position: '0 1.5 -3',
        icon: 'icon/info.png',
        title: { 'zh-TW': '西護室及鼓樓' },
        desc: { 
          'zh-TW': '西護室位於正殿西側，主要供奉 註生娘娘，並陪祀 池頭夫人 與 十二婆姐，祈求婦女生育平安與後代子嗣繁衍。鼓樓 位於西護室之上，建築與鐘樓相對應，匾額題有「鼉(ㄊㄨㄛˊ)逢(ㄆㄥˊ)」二字。「鼉」為中國傳說中似龜般的神獸，鼉皮可製鼓皮，發聲悅耳；「逢」依詩經所載有鼓聲「逢逢」之意，因此「鼉逢」可理解為鼓聲磅礡響徹，具有形聲暗喻的工藝美。' 
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
        title: { 'zh-TW': '地面壓艙石建材' },
        desc: { 
          'zh-TW': '早期漢人渡海來台時，「貨船」的回航因少有貨物可裝，便會以大塊石頭作為壓艙石以穩定船體，這些壓艙石登岸後常被利用作為建築材料，廟埕中石材便是出自此用法。' 
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
    name: '東護室及鐘樓',
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
        title: { 'zh-TW': '東護室及鐘樓' },
        desc: { 
          'zh-TW': '東護室位於正殿東側，其主神為 天上聖母，並供奉 福德正神 及 虎爺，守護廟宇東側的祀場與信眾安康。而位於東護室上方的鐘樓匾額書有「鯨發」二字。傳說龍生九子之一「蒲牢」極懼鯨魚，一見鯨魚，便會發出宏亮驚叫，故廟宇鐘上常刻有「蒲牢」，而槌上刻上鯨魚，以期鐘聲響徹雲霄。' 
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
          'zh-TW': '依據史料記載，保生大帝姓吳諱夲（音：Tao），又名吳真人或大道公，北宋年間生於同安縣白礁鄉。自幼聰穎，博覽群籍，尤善岐黃醫術。。廿四歲中舉，任御史之職，後來辭官退隱，海島談經，廣宣聖道洪慈，煉丹救世。祂一生茹素、不婚娶，行醫濟世，救人無數。宋仁宗景祐三年五月初二日，在青礁，因修煉得道，鶴駕前來迎接，在鄉親跪地辭送下，白日昇天，享年五十八歲。大帝生前流傳點龍眼、醫虎喉等醫蹟。昇天之後，神蹟屢現，護衛宋高宗歸國、助明太祖轉敗為勝，並治癒明成祖永樂皇后乳疾，屢救蒼生，受封「保生大帝」，尊為醫神。' 
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
          'zh-TW': '相傳在宋朝時，有隻老虎吞噬了一位婦人，但喉嚨卻被婦人頭上所戴的髮釵所刺，痛苦難當，向吳真人求救，吳真人卻斥道：「你殘害的人畜太多了，這是上天給你的懲罰，我不能救你。」老虎不肯離去，仍在原地低頭懺悔，吳真人為牠的誠心所感動，終於為牠醫治。老虎為感念吳真人的恩德，從此以後，寸步不離真人，生前供真人坐騎差遣，死後忠誠守護，真人便度猛虎成神。民間將其尊奉為「黑虎將軍」，又稱「將軍爺」，與民間「虎爺」迥然不同。' 
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
          'zh-TW': '保安宮自1995年至2002年間進行戰後最大規模的修復工程，由廖武治以民間自籌方式主導，堅持「整舊如舊」原則，從材料、匠師到設計嚴格把關，恢復1917年整修後風貌，且拆除戰後增建，避免「古蹟變新蹟」。工程亦兼顧傳統工藝與現代技術平衡，譬如使用糯米黏劑剪粘、聘請澳洲壁畫修復專家協助潘麗水壁畫修復等，材料方面則專程赴福建採購木材及傳統建材，確保與原貌一致。最終此工程獲頒2003年UNESCO亞太文化資產保存獎榮譽獎，成為臺灣民間主導文化資產保存的典範，提升國際能見度。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/UNESCO.png' 
        }
      },
      {
        id: 'k-zhengdian-near-04',
        type: 'info',
        position: '4 1.5 -3',  
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '正殿雙龍柱' 
        },
        desc: { 
          'zh-TW': '大龍峒保安宮正殿的雙龍柱是日治時期於1918年重修設置的石雕藝術代表，以“象徵天地交泰”賦予深厚文化涵義，象徵祥瑞與宇宙和諧一體。其柱身是方形、六角形與八角形等多種幾何變化，同時柱礎底座則採用圓形、方形與菱花形三種不同造型。出自潮州派匠師精湛雕工，並呈現成幼龍的造型差異，與三川殿的嘉慶龍柱構成對比，是保安宮龍柱藝術中的重要典範。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/double_dragon.jpg' 
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
      },
      { 
        target: 'zhengdian-near', 
        position: '0 0 -3', 
        icon: 'icon/back-arrow.png',   
        label: { 'zh-TW': '正殿（近部）' } 
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
        position: '0 .5 -3',
        icon: 'icon/back-arrow.png',   
        label: { 'zh-TW': '回到右廊' } 
      }
    ],
    knowledge: [
      {
        id: 'k-unesco',
        type: 'info',
        position: '0 1.5 -3',  
        icon: 'icon/info.png',
        title: { 
          'zh-TW': '潘麗水7幅畫作' 
        },
        desc: { 
          'zh-TW': '1973年，府城畫師潘麗水受邀於大龍峒保安宮正殿迴廊繪製七幅大型壁畫，主題涵蓋忠孝與俠義的中國古典故事，如〈韓信跨下受辱〉、〈朱仙鎮八槌大戰陸文龍〉、〈鍾馗迎妹回娘家〉、〈八仙大鬧東海〉、〈花木蘭代父從軍〉、〈虎牢關三英戰呂布〉及〈賢哉徐母〉。畫面氣勢雄渾、情節生動，人物表情細膩，並融入光影與透視技巧。潘麗水出身台南畫師世家，承襲府城彩繪技藝，融合西方寫實風格，被譽為「最後的廟畫大師」。這七幅壁畫不僅是其生涯經典之作，也為保安宮增添獨特藝術價值。' 
        },
        media: { 
          type: 'image', 
          src: 'scene/land.jpg' 
        }
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
        title: { 'zh-TW': '神農殿' },
        desc: { 
          'zh-TW': '後殿又稱 神農殿，主祀中國古代農業與醫藥之神——神農大帝，崇敬其教人耕種、嘗百草的精神。相傳百年前台北久旱無雨，居民向神農大帝祈雨獲應，遂恭迎其神像安座於此。祂的神像親切自然，身披樹葉、手執稻穗。甲午戰爭後，日軍攻陷臺北，保安宮被佔用，日軍進駐後殿，看見神農大帝半裸神像全身赤紅，日人見其貌特異，誤認為是日本傳說中「桃太郎征伐鬼島」的鬼，以刀斧砍斷其手臂，日治初期後殿成為課堂及工廠，直到1917年重修後，才恢復為今日的神農殿，延續信仰香火。' 
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
          'zh-TW': '保安宮主祀醫藥之神保生大帝，設置了藥籤系統，信眾可先對保生大帝稟報病情後擲筊求籤，若得聖筊，再從籤筒中抽出籤詩。每支藥籤內含詳盡中藥處方，分內科、小兒科、外科等類別，出自《傷寒論》《金匱要略》等古籍 。早年信眾獲得藥籤後，常以廟中汲取的井水調合藥方一同服用' 
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
          'zh-TW': '惜字亭（亦稱「敬字亭」或「聖蹟亭」）源自傳統對文字的尊崇。昔日紙墨多為讀書人辛勤所得，人們珍惜學習機會，不敢隨意棄置字紙，便集中於惜字亭焚化。清代保安宮曾兼具書院功能，文風鼎盛，因此設有惜字亭，亭內設有盛水的石槽，以供收集舊字紙焚燒致敬，使紙灰如「聖跡」安置水中。'
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