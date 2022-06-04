import { CategoryTypeConst } from '../constants/category-type-const';
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
    category: [CategoryTypeConst.ANONYMOUS],
  },
  {
    meigen:
      '結果が出ないとき、どういう自分でいられるか。決してあきらめない姿勢が何かを生み出すきっかけをつくる。',
    name: 'イチロー',
    category: [CategoryTypeConst.BASEBALL],
  },
  {
    meigen:
      '壁というのは、できる人にしかやってこない。超えられる可能性がある人にしかやってこない。だから、壁がある時はチャンスだと思っている。',
    name: 'イチロー',
    category: [CategoryTypeConst.BASEBALL],
  },
  {
    meigen:
      '特別なことをするために特別なことをするのではない、特別なことをするために普段どおりの当たり前のことをする。',
    name: 'イチロー',
    category: [CategoryTypeConst.BASEBALL],
  },
  {
    meigen: '人はそれぞれ事情をかかえ、平然と生きている',
    name: '伊集院静',
    category: [CategoryTypeConst.WRITER, CategoryTypeConst.LYRICIST],
  },
  {
    meigen:
      '努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない',
    name: '王貞治',
    category: [CategoryTypeConst.BASEBALL],
  },
  {
    meigen: '世の中ってオレより頭のいい人のほうが多いんだ',
    name: '高田純次',
    category: [CategoryTypeConst.COMEDIAN],
  },
  {
    meigen: 'いつか、必ず、チャンスの順番が来ると信じなさい',
    name: '秋元康',
    category: [CategoryTypeConst.LYRICIST],
  },
  {
    meigen: '自分を少し抑えて、肩の力を抜けば、仕事は長続きする',
    name: '関根勤',
    category: [CategoryTypeConst.COMEDIAN],
  },
];
