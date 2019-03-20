import { Component, OnInit } from '@angular/core';
import { Pokemon} from "../pokemon";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  filter: Pokemon = new Pokemon("Pikachu");
  pikachu = new Pokemon("Pikachu");
  pokemonChoisi: Pokemon = this.pikachu;
  salameche = new Pokemon("Salamèche");
  carapuce = new Pokemon("Carapuce");
  bulbizarre = new Pokemon("Bulbizarre");
  pokemons: Array<Pokemon> = [this.pikachu, this.salameche, this.carapuce, this.bulbizarre];

  pokemonsInSelect = [];

  constructor() { }

  ngOnInit() {
    this.pokemonsInSelect = this.pokemons;
  }

  displayChosenPokemon(){
    alert(this.pokemonChoisi.name);
  }
}
