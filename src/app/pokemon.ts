export class Pokemon {

  name: string;
  url: string;
  count: number;
  next: string;
  results: SubArray;
  forms: any;
  abilities: any;
  stats: any;
  weight: number;
  moves: any;
  sprites: any;
  held_items: any;
  location_area_encounters: any;
  height: number;
  is_default: boolean;
  species: any;
  id: number;
  order: number;
  game_indices: any;
  base_experience: 64;
  types: any;
}

export class SubArray {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}
