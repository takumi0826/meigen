import { CategoryType, CategoryParent } from '../types/type';

export const CategoryParentConst: CategoryParent = {
  ENTERTAINER: '芸能人',
  ATHLETE: 'アスリート',
  COMEDIAN: '芸人',
  CREATER: 'クリエイター',
  ANIME: 'アニメ･漫画',
  ANONYMOUS: '匿名のレジェンド',
} as const;

export const CategoryTypeConst: CategoryType = {
  ENTERTAINER: { default: '芸能人', singer: '歌手' },
  ATHLETE: {
    default: 'アスリート',
    baseball: 'プロ野球選手',
    soccer: 'サッカー選手',
    tennis: 'テニス選手',
  },
  COMEDIAN: { default: '芸人' },
  CREATER: {
    default: 'クリエイター',
    lyricist: '作詞家',
    writer: '作家',
    manga: '漫画家',
  },
  ANIME: { default: 'アニメ･漫画' },
  ANONYMOUS: { default: '匿名のレジェンド' },
} as const;
