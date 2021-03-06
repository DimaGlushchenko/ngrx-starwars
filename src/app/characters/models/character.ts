export interface Character {
  url: string;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  homeworld: string;
  hair_color: string;
  height: number;
  films: string[];
  species: string[];
  mass: number;
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}

export interface CharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}
