import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
// import Loki from 'lokijs'

// const db = new Loki('loki.json')
// let collectionHeroes = db.getCollection('heroes') || db.addCollection('heroes')

/* const heroesList = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
] 

if (!collectionHeroes.count()) {
  heroesList.forEach(item => {
    collectionHeroes.insert(item)
  })
}
console.log(db)
*/
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    /* const heroes = db.getCollection('heroes').find()
    console.log(heroes) */
    
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}