import { Component } from '@angular/core';
 
import { FilterTextService } from '../shared/filter-text/filter-text.service';
 
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
 
  heroes = [
    { id: 1, name: 'Windstorm' , power: 'Tormentas de viento'},
    { id: 2, name: 'Bombasto', power: 'Lanza bombas' },
    { id: 3, name: 'Magneta', power: 'Controla los metales' },
    { id: 4, name: 'Tornado', power: 'Genera tornados' }
  ];
 
  filteredHeroes = this.heroes;
 
  constructor(private filterService: FilterTextService) { }
 
  filterChanged(searchText: string) {
    this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name', 'power'], this.heroes);
  }
}
