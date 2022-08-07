export type Item = {
  meigen: string;
  name: string;
  category: Category;
};

export type Category = {
  parent: string;
  child: string[];
};

export type CategoryType = {
  [key: string]: {
    default: string;
    [key: string]: string;
  };
};

export type CategoryParent = { [key: string]: string };

export type LegendItem = {
  meigen: string;
  name: string;
  category: LegendCategory[];
};

export type LegendCategory = {
  parent: {
    id: number;
    name: string;
  };
  child: {
    id: number;
    name: string;
  };
};

export type CategoryResponse = {
  id: number;
  name: string;
  child: {
    id: number;
    name: string;
  }[];
};
