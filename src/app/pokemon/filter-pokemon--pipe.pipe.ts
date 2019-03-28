import {Pipe, PipeTransform} from '@angular/core';

import {Pokemon} from './pokemon';

@Pipe({
  name: 'FilterPipe',
  pure: false
})
export class FilterPokemonPipePipe implements PipeTransform {
  transform(items: Pokemon[], filter: Pokemon): Pokemon[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Pokemon) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering
   *
   * @param {Item} item The book to compare to the filter.
   * @param {Item} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(item: Pokemon, filter: Pokemon): boolean {
    return !(filter.results.name && item.name.toLowerCase().indexOf(filter.results.name.toLowerCase()) === -1);
  }
}
