import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { Alert } from "../../ui/components/Alert";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = React.memo(() => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search)

  const query = searchParams.get('q') || '';
  const heroes = getHeroesByName(query);

  const nameRef = useRef()

  const showSearch = (query.length === 0);
  const showError = (query.length > 0) && heroes.length === 0 ;
  const {searchText, onInputChange} = useForm({
    searchText: query
  });
  const onSearchSubmit = async( event ) => {
      event.preventDefault();
      
      if ( searchText === query) return 

      if ( searchText.trim().length <= 1 ) return navigate()

      navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              name='searchText'
              className='form-control'
              placeholder='Search a hero'
              autoComplete='off'
              value={searchText}
              ref={nameRef}
              onChange={onInputChange}
            />

            <button className='btn btn-outline-primary mt-3'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <Alert alert="Primary" show={showSearch}>Search a hero</Alert> 
          
          <Alert alert="Error" show={showError}>
            No hero with<b> {query} </b>
          </Alert>
          {
            heroes.map( (hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }  
          
        </div>
      </div>
    </>
  );
})