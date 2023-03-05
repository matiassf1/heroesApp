import { Link } from "react-router-dom"

const CharactersByActor = ({alter_ego, characters}) => {
    return alter_ego !== characters ? (<p className="card-item text-white">{characters}</p>) : (<></>)
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
    <div className='col animate__animated animate__fadeIn text-bg-secondary rounded-2'>
        <div className='card text-bg-secondary' style={{borderStyle:'none'}}>

            <div className="row" >

                <div className='col-4 my-auto ml-2'>

                    <img src={heroImageUrl} alt={superhero} className='card-img img-fluid' />

                </div>

                <div className='col-8'>

                    <div className="card-body">

                        <h5 className="card-title">{superhero}</h5>

                        <p className="card-item">{ alter_ego }</p>

                        <CharactersByActor alter_ego={alter_ego} characters={characters}/>

                        <p className="card-text">
                            <small className=' text-dark'>{ first_appearance }</small>
                        </p>
                        
                        <Link to={`/hero/${id}`} className={"link-warning link-opacity-50"}>
                            More info...
                        </Link>

                    </div>



                </div>
            </div>



        </div>
    </div>
  )
}
