import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [ApiService]
})
export class MyComponentComponent implements OnInit {

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
  }
}
