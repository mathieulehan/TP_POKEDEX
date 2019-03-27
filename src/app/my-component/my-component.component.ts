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
    this.pokemonsInSelect
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

  /**
   * Récupère le détail d'un pokémon particulier
   * @param pokemon
   */
  getPokemonInfo(pokemon: Pokemon) {
    this.pokemonApi.getPokemonInfo(pokemon).subscribe(
      (data: Pokemon) => {
        this.pokemonChoisi = data;
      }
    );
    console.log(pokemon);
  }

  initializeFilter() {
    let results = new SubArray("P", "");
    this.filter = new Pokemon(1, "P", results, "coin");
  }
}
