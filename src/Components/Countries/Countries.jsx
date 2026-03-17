import React, { useState } from 'react';
import { use } from 'react';
import Country from './Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise)
  const [visitedCountries, setVisitedCountries]=useState([])
  const [visitedFlags, setVisitedFlags]=useState([])

  const handleVisitedCountries=(country)=>{
  const newVisitedCountries=[...visitedCountries, country]
  setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlag=(flag)=>{
   const newVisitedFlags=[...visitedFlags, flag]
   setVisitedFlags(newVisitedFlags)
  }
    const countries=countriesData.countries
 
    return (
        <div >
          <h2>In the countries:{countries.length}</h2>  
          <h3>Total Countries Visited:{visitedCountries.length}</h3>
          <h3>Total Flags Visited:{visitedFlags.length}</h3>
         <ol> {visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)}</ol>
         <div className='visited-flags-container'>
          {
            visitedFlags.map((flag, index)=> <img key={index} src={flag}></img>)
          }
         </div>
          <div style={{display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'}} >
        {
            countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}handleVisitedFlag={handleVisitedFlag}></Country>)
          }
    </div>
          
        </div>
    );
};

export default Countries;