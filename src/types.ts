export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  types: Type[];
  stats: Stat[];
  url: string;
};

export type Stat = {
  name: string;
  value: number;
};

export type Type = string;
