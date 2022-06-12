import { CategoryType, CategoryParent } from '../types/type';

export const CategoryParentConst: CategoryParent = {
  ENTERTAINER: '芸能人',
  ATHLETE: 'アスリート',
  COMEDIAN: '芸人・タレント',
  CREATER: 'クリエイター',
  // ANIME: 'アニメ･漫画',
  ANONYMOUS: '匿名のレジェンド',
} as const;

export const CategoryTypeConst: CategoryType = {
  ENTERTAINER: { default: CategoryParentConst.ENTERTAINER, singer: '歌手' },
  ATHLETE: {
    default: CategoryParentConst.ATHLETE,
    baseball: 'プロ野球選手',
    soccer: 'サッカー選手',
    tennis: 'テニス選手',
  },
  COMEDIAN: { default: CategoryParentConst.COMEDIAN },
  CREATER: {
    default: CategoryParentConst.CREATER,
    lyricist: '作詞家',
    writer: '作家',
    manga: '漫画家',
  },
  // ANIME: { default: CategoryParentConst.ANIME },
  ANONYMOUS: { default: CategoryParentConst.ANONYMOUS },
} as const;
