import {Component, OnInit} from '@angular/core';
import {Pokemon, SubArray} from "../pokemon";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ApiService]
})
export class MyComponentComponent implements OnInit {

  id: number;
  pokemons: Pokemon[] = [];
  filter: Pokemon;
  pokemonChoisi: Pokemon;
  pokemonsInSelect: Pokemon[] = [];

  constructor(public pokemonApi: ApiService) {
  }

  ngOnInit() {
    this.getPokemons();
  }

  displayChosenPokemon(){
    alert(this.pokemonChoisi.results.name);
  }

  /**
   * On initialise la liste non triée ainsi que la liste triée de pokemons,
   *  qui sera réellement triée après l'entrée de l'utilisateur
   */
  getPokemons() {
    this.pokemonApi.getPokemon().subscribe(
      (data: Pokemon[]) => {
        this.pokemons = data;
        this.pokemonsInSelect = data;
      }
    );
    this.initializeFilter();
  }

  initializeFilter() {
    let results = new SubArray("P", "url");
    let defaultPokemonFilter = new Pokemon(1, "P", results);
    this.filter = defaultPokemonFilter;
    this.pokemonChoisi = defaultPokemonFilter;
  }
}
