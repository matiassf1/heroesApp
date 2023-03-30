import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroPage = () => {

  const { id } = useParams();
  const hero = useMemo( () => getHeroeById( id ), [ id ] )
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1)
  }

  const heroImageUrl = `../assets/heroes/${id}.jpg`;
  
  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft" style={{backgroundColor:'#F2EFBD'}}>
        <img 
          src={heroImageUrl}
          alt={hero.superhero}
          style={{border:'none'}}
          className="img-thumbnail rounded-4" />
      </div>

      <div className="col-8">

        <h2>{hero.superhero}</h2>

        <ul className="list-group list-group-flush rounded-4">
          <li className="list-group-item mb-1"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item mb-1"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p className="fst-italic fw-semibold">{ hero.characters }</p>

        <button 
          className="btn btn-outline-danger"
          onClick={ onNavigateBack } 
          >Return</button>

      </div>

    </div>
  )
}
