import { heroes } from '../data/heroes';
import { Heroes, HeroPublisher } from '../types';

export const getHeroesByPublisher = (publisher: HeroPublisher): Heroes => {
  return heroes.filter(hero => hero.publisher === publisher);
};
