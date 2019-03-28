import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon/pokemon";
import {ApiService} from "../pokemon/api.service";
import {ListPokemon} from "../pokemon/list-pokemon";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ApiService]
})
export class MyComponentComponent implements OnInit {

  id: number;
  pokemons: ListPokemon;
  filter: Pokemon;
  pokemonChoisi: Pokemon;

  constructor(public pokemonApi: ApiService) {
  }

  ngOnInit() {
    this.getPokemons();
    console.log(this.pokemons);
  }

  /**
   * On initialise la liste non triée ainsi que la liste triée de pokemons,
   *  qui sera réellement triée après l'entrée de l'utilisateur
   */
  getPokemons() {
    this.pokemonApi.getPokemon().subscribe(res => {
      this.pokemons = res;
    });
    this.initializeFilter();
  }

  /**
   * Récupère le détail d'un pokémon particulier
   * @param name
   */
  getPokemonInfo(name: string) {
    this.pokemonApi.getPokemonInfo(name).subscribe(
      res => {
        this.pokemonChoisi = res;
      }
    );
    console.log(name);
  }

  initializeFilter() {
    this.pokemonChoisi = new Pokemon();
    this.filter = this.pokemonChoisi;
  }
}
