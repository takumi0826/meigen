import {
  CategoryParentConst,
  CategoryTypeConst,
} from '../constants/category-type-const';
import { Item } from '../types/type';

export const itemImage = [
  'cat-3508695_640.jpg',
  'dog-3508706_640.jpg',
  'eagle-3508696_640.jpg',
  'lion-5199769_640.jpg',
  'tiger-3515349_640.jpg',
  'bear-3508700_640.jpg',
];

export const itemData: Item[] = [
  // {
  //   meigen: 'とりあえず笑え',
  //   name: '匿名',
  //   category: [CategoryTypeConst.ANONYMOUS],
  // },
  {
    meigen: '濱家体毛薄そうなのに足の毛バリ濃くて草',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen: '最高の贅沢は最悪の貧困',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen:
      'ユーザー6500万人って凄すぎるな アメリカの人口をざっと3億2000万人だと仮定して6500万人がプレイしている計算になる',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen: '平日の昼間に酒飲みながら見る冷えたビールは最高ンゴねぇ',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen: 'なんか毎年雨降る時期あるよな',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen: '猫の前歯の本数を確認することもなく日々は続く。',
    name: '匿名',
    category: {
      parent: CategoryParentConst.ANONYMOUS,
      child: [CategoryTypeConst.ANONYMOUS.default],
    },
  },
  {
    meigen: 'いつか、必ず、チャンスの順番が来ると信じなさい',
    name: '秋元康',
    category: {
      parent: CategoryParentConst.CREATER,
      child: [CategoryTypeConst.CREATER.lyricist],
    },
  },
  {
    meigen: '人はそれぞれ事情をかかえ、平然と生きている',
    name: '伊集院静',
    category: {
      parent: CategoryParentConst.CREATER,
      child: [
        CategoryTypeConst.CREATER.writer,
        CategoryTypeConst.CREATER.lyricist,
      ],
    },
  },
  {
    meigen: '人を信じよ、しかし、その百倍も自らを信じよ',
    name: '手塚治虫',
    category: {
      parent: CategoryParentConst.CREATER,
      child: [CategoryTypeConst.CREATER.manga],
    },
  },
  {
    meigen: 'しないではいられないことを、 し続けなさい',
    name: '水木しげる',
    category: {
      parent: CategoryParentConst.CREATER,
      child: [CategoryTypeConst.CREATER.manga],
    },
  },
  {
    meigen:
      '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何かを生み出すきっかけをつくる',
    name: 'イチロー',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.baseball],
    },
  },
  {
    meigen:
      '特別なことをするために特別なことをするのではない、特別なことをするために普段どおりの当たり前のことをする',
    name: 'イチロー',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.baseball],
    },
  },
  {
    meigen:
      '努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない',
    name: '王貞治',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.baseball],
    },
  },
  {
    meigen: '結果にこだわるな、成功にこだわるな、成長にこだわれ',
    name: '本田圭佑',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.soccer],
    },
  },
  {
    meigen: '勝ち負けなんかちっぽけなこと。大事なことは本気だったかどうかだ',
    name: '松岡修造',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.tennis],
    },
  },
  {
    meigen: '自己犠牲を厭わない人には、信頼が集まる',
    name: '野村克也',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.baseball],
    },
  },
  {
    meigen: '俺は寝ている時は、真面目だよ',
    name: '高田純次',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '自分を少し抑えて、肩の力を抜けば、仕事は長続きする',
    name: '関根勤',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '生きてるだけで丸儲け',
    name: '明石家さんま',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen:
      '努力ってのは宝くじみたいなものだよ。買っても当たるかどうかはわからないけど、買わなきゃ当たらない',
    name: 'ビートたけし',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '下積みはつらくなかった。だって好きなことだから',
    name: '石橋貴明',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '嫌がるのはもう撮れてるからw',
    name: '木梨憲武',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '明日死ぬとしても笑うわ',
    name: '松本人志',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '俺はこの先お笑い一本で考えていない。相方が偉大すぎて',
    name: '浜田雅功',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  // {
  //   meigen:
  //     '道草を楽しめ 大いにな\nほしいものより大切なものがきっとそっちにころがってる',
  //   name: 'ジン・フリークス',
  //   category: {
  //     parent: CategoryParentConst.ANIME,
  //     child: [CategoryTypeConst.ANIME.default],
  //   },
  // },
  // {
  //   meigen: 'そんな目でみつめるなよ。興奮しちゃうじゃないか',
  //   name: 'ヒソカ',
  //   category: {
  //     parent: CategoryParentConst.ANIME,
  //     child: [CategoryTypeConst.ANIME.default],
  //   },
  // },
  // {
  //   meigen: 'まっすぐ自分の言葉は曲げねぇ。それがオレの忍道だ',
  //   name: 'ナルト',
  //   category: {
  //     parent: CategoryParentConst.ANIME,
  //     child: [CategoryTypeConst.ANIME.default],
  //   },
  // },
  // {
  //   meigen: '大切なのはあきらめねェど根性だ',
  //   name: '自来也',
  //   category: {
  //     parent: CategoryParentConst.ANIME,
  //     child: [CategoryTypeConst.ANIME.default],
  //   },
  // },
  {
    meigen:
      'せめて自分ぐらい自分を褒めて認めてあげないと自分が救われない。自分の味方になれるのは自分だけ',
    name: '美輪明宏',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
  {
    meigen:
      '誰にでもチャンスは訪れているはず。これがチャンスだって思うか思わないか',
    name: 'デヴィ夫人',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
  {
    meigen:
      'あんまり若いうちからしっかりしすぎちゃダメよ。嫌なときは仕事バックれちゃったりとかしていいのよ',
    name: 'マツコ・デラックス',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
  {
    meigen:
      '昔の映画や昔の役者さんの映画を見返すように、自分がなくなったあともそんな映画に一本でも関われたらと思っている',
    name: '役所広司',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.singer],
    },
  },
  {
    meigen: 'おごらず、人と比べず、面白がって平気に生きればいい',
    name: '樹木希林',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.singer],
    },
  },
  {
    meigen: '人生というのは、失うものを増やしていくゲームなんだ',
    name: '矢沢永吉',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.singer],
    },
  },
];
