export type ItemDetail = {
  name: string;
  company: string;
  description: string;
  image: string;
};

export type Item = {
  size: number;
  itemDetail: ItemDetail[];
};
