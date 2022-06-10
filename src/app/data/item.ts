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
    meigen:
      '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何かを生み出すきっかけをつくる。',
    name: 'イチロー',
    category: {
      parent: CategoryParentConst.ATHLETE,
      child: [CategoryTypeConst.ATHLETE.baseball],
    },
  },
  {
    meigen:
      '特別なことをするために特別なことをするのではない、特別なことをするために普段どおりの当たり前のことをする。',
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
    meigen: '下積みはつらくなかった。だって好きなことだから。',
    name: '石橋貴明',
    category: {
      parent: CategoryParentConst.COMEDIAN,
      child: [CategoryTypeConst.COMEDIAN.default],
    },
  },
  {
    meigen: '痛いのはもう撮れてるからw',
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
  {
    meigen:
      '道草を楽しめ 大いにな\nほしいものより大切なものがきっとそっちにころがってる',
    name: 'ジン・フリークス',
    category: {
      parent: CategoryParentConst.ANIME,
      child: [CategoryTypeConst.ANIME.default],
    },
  },
  {
    meigen: 'そんな目でみつめるなよ。興奮しちゃうじゃないか。',
    name: 'ヒソカ',
    category: {
      parent: CategoryParentConst.ANIME,
      child: [CategoryTypeConst.ANIME.default],
    },
  },
  {
    meigen: 'まっすぐ自分の言葉は曲げねぇ。それがオレの忍道だ',
    name: 'ナルト',
    category: {
      parent: CategoryParentConst.ANIME,
      child: [CategoryTypeConst.ANIME.default],
    },
  },
  {
    meigen: '大切なのはあきらめねェど根性だ',
    name: '自来也',
    category: {
      parent: CategoryParentConst.ANIME,
      child: [CategoryTypeConst.ANIME.default],
    },
  },
  {
    meigen:
      'せめて自分ぐらい自分を褒めて認めてあげないと自分が救われない。自分の味方になれるのは自分だけ。',
    name: '美輪明宏',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
  {
    meigen:
      '誰にでもチャンスは訪れているはず。これがチャンスだって思うか思わないか。',
    name: 'デヴィ夫人',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
  {
    meigen:
      'あんまり若いうちからしっかりしすぎちゃダメよ。嫌なときは仕事バックれちゃったりとかしていいのよ。',
    name: 'マツコ・デラックス',
    category: {
      parent: CategoryParentConst.ENTERTAINER,
      child: [CategoryTypeConst.ENTERTAINER.default],
    },
  },
];
