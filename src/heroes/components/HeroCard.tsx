import { Link } from 'react-router-dom';
import { Hero } from '../types';

export const HeroCard = ({ superhero, id, alter_ego, characters, first_appearance }: Hero) => {
  const heroImage = `/assets/${id}.jpg`;
  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImage} className='card-img' alt={`Image of ${superhero}`} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
