import React, { useState } from 'react';
import './Country.css'
import './country-visited.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
//   console.log(country.population.population);
// console.log(handleVisitedCountries);
const [visited, setVisited]=useState(false)
const handleVisited=()=>{
    // console.log('BTN Clicked')
   
    if(visited==true){
        setVisited(false)
    }
    else{
        setVisited(true)
    }
     handleVisitedCountries(country)

}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>Area:{country.area.area} {country.area.area>300000?"Big Country":"Small Country"}</p>
            <button onClick={handleVisited}>{visited?'Visited':'not visited'}</button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;