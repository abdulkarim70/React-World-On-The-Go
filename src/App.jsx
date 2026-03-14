
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=> res.json())

function App() {
  

  return (
    <>
     
          <h2>React World On The Go</h2>
        <Suspense fallback={<p>Waiting for message...</p>}>
<Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
          
    </>
  )
}

export default App
