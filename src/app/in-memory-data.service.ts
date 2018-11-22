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
      { id: 11, name: 'Mr. Nice', avatar: '../assets/imgs/avatars/1.jpg' },
      { id: 12, name: 'Narco', avatar: '../assets/imgs/avatars/2.jpg' },
      { id: 13, name: 'Bombasto', avatar: '../assets/imgs/avatars/3.jpg' },
      { id: 14, name: 'Celeritas', avatar: '../assets/imgs/avatars/4.jpg' },
      { id: 15, name: 'Magneta', avatar: '../assets/imgs/avatars/5.jpg' },
      { id: 16, name: 'RubberMan', avatar: '../assets/imgs/avatars/6.jpg' },
      { id: 17, name: 'Dynama', avatar: '../assets/imgs/avatars/7.jpg' },
      { id: 18, name: 'Dr IQ', avatar: '../assets/imgs/avatars/8.jpg' },
      { id: 19, name: 'Magma', avatar: '../assets/imgs/avatars/9.jpg' },
      { id: 20, name: 'Tornado', avatar: '../assets/imgs/avatars/10.jpg' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}