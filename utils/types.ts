export type CharacterResponse = {
  info: Info;
  results: Array<Character>;
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  current?: number;
};
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type SafeCharacter = {
  image?: string;
  name?: string;
} & DeepPartial<Omit<Character, "image" | "name">>;
