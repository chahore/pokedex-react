export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  stats: Stat[];
};

type Stat = {
  name: string;
  value: number;
};
