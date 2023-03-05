import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers/getHeoresByPublisher'
import { useMemo } from 'react';

export const HeroeList = ({ publisher }) => {

  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center align-items-center gap-5'>
       { 
            heroes?.map(( hero ) => ( <HeroCard key={hero.id} {...hero}/> ))
        }
    </div>
  )
}
