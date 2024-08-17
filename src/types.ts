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

export type PokemonFetchResponse = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    stat: {
      name: string;
    };
    base_stat: number;
  }>;
};
