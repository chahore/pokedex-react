export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  types: Type[];
  stats: Stat[];
  url: string;
};

export type Stat = {
  stat: {
    name: string;
  };
  base_stat: number;
};

export type Type = {
  type: {
    name: string;
  };
};
