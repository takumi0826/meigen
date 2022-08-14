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

export type Category = {
  id: number;
  name: string;
  child: {
    id: number;
    name: string;
  }[];
};
