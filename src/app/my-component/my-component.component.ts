import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  pokemonChoisi: string = '';
  pokemons = ['Pikachu', 'Salamèche', 'Carapuce', 'Bulbizarre'];

  constructor() { }

  ngOnInit() {
  }

}
