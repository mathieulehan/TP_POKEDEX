import {Pipe, PipeTransform} from '@angular/core';

import {Pokemon} from './pokemon';

@Pipe({
  name: 'FilterPipe',
  pure: false
})
/**
 * Filtre sur le nom des pokémons
 */
export class FilterPokemonPipePipe implements PipeTransform {

  /**
   * Réalise le filtrage
   * @param item le pokémon à tester
   * @param filter le filtre à appliquer
   * renvoie true si le pokémon a passé le filtre, false sinon
   */
  static applyFilter(item: Pokemon, filter: Pokemon): boolean {
    return !(filter.name && item.name.toLowerCase().indexOf(filter.name.toLowerCase()) === -1);
  }

  transform(items: Pokemon[], filter: Pokemon): Pokemon[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Pokemon) => FilterPokemonPipePipe.applyFilter(item, filter));
  }
}
