import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroPublisher } from '../types';
import { HeroCard } from './HeroCard';

type Props = {
  publisher: HeroPublisher;
};

export const HeroList = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
