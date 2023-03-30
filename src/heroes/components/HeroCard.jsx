import { Link } from "react-router-dom"

const CharactersByActor = ({alter_ego, characters}) => {

    let arrayCharacters = characters.split(",");

    if (arrayCharacters.includes(alter_ego)) {
        arrayCharacters = arrayCharacters.filter((value) => value !== alter_ego)
    }
    
    return ( (<p className="card-item text-dark">{arrayCharacters[0]}</p>) )
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {


    const heroImageUrl = `./assets/heroes/${id}.jpg`
    
   

  return (
    <div className='col animate__animated animate__fadeIn rounded-2 mb-3' style={{backgroundColor:'#F28241'}}>
        <div className='card' style={{borderStyle:'none', backgroundColor:'#F28241'}}>

            <div className="row" >

                <div className='col-4 my-auto ml-2'>

                    <img src={heroImageUrl} alt={superhero} className='card-img img-fluid' />

                </div>

                <div className='col-8'>

                    <div className="card-body">

                        <h5 className="card-title text-dark">{superhero}</h5>

                        <p className="card-item text-dark">{ alter_ego }</p>

                        <CharactersByActor alter_ego={alter_ego} characters={characters}/>

                        <p className="card-text">
                            <small className='text-dark'>{ first_appearance }</small>
                        </p>
                        
                        <Link to={`/hero/${id}`} style={{color:'#F2EFBD'}}>
                            More info...
                        </Link>

                    </div>



                </div>
            </div>



        </div>
    </div>
  )
}
