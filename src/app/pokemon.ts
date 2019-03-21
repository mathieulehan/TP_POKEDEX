export class Pokemon {

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

  constructor(count: number, next: string, results: SubArray) {
    this.count = count;
    this.next = next;
    this.results = results;
  }

  setPokemonInfo(json: Object) {
    let jsonString = json.toString();
    this.forms, this.abilities, this.stats, this.weight, this.moves, this.sprites,
      this.held_items, this.location_area_encounters, this.height, this.is_default, this.species,
      this.id, this.order, this.game_indices, this.base_experience, this.types = JSON.parse(jsonString);
  }

}

export class SubArray {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}
