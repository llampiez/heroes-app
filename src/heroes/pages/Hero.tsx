import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const Hero = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const hero = getHeroById(id as string);
  if (!hero) return <Navigate to={'/marvel'} />;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img className='img-thumbnail' src={`/assets/${id}.jpg`} alt={`Image of ${hero.superhero}`} />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={handleGoBack} className='btn btn-outline-primary'>
          Back
        </button>
      </div>
    </div>
  );
};
