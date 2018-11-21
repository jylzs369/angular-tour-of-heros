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
      { id: 11, name: 'Mr. Nice', avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4025035225,1470749673&fm=26&gp=0.jpg' },
      { id: 12, name: 'Narco', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346422644,3672283897&fm=26&gp=0.jpg' },
      { id: 13, name: 'Bombasto', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543391699&di=89aa9b8778d2fd26129d543ecd113002&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180710%2F26709ec76bbf48e3b3764fe45f31e137.jpeg' },
      { id: 14, name: 'Celeritas', avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3518320318,2887596142&fm=26&gp=0.jpg' },
      { id: 15, name: 'Magneta', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542797005659&di=2dd397fb683523cfcd1cb01409f950ae&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-02-18%2F013558321.jpg' },
      { id: 16, name: 'RubberMan', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=510964615,398955372&fm=26&gp=0.jpg' },
      { id: 17, name: 'Dynama', avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915077226,632457163&fm=26&gp=0.jpg' },
      { id: 18, name: 'Dr IQ', avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2637229528,4220791833&fm=26&gp=0.jpg' },
      { id: 19, name: 'Magma', avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1322857364,4072687081&fm=26&gp=0.jpg' },
      { id: 20, name: 'Tornado', avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2380848819,2090804284&fm=26&gp=0.jpg' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}