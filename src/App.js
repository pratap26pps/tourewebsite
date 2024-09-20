import React, { useState } from 'react';
import Tours from  './component/Tours';
import data from './data';
const App=()=> {

const [tours,setTours]=useState(data);

function removetour(id){
   const newTours=  tours.filter(tours=>tours.id!==id);
   setTours(newTours);    
}


if (tours.length===0){
   return(
      <div className='button2' >
         <h2 >No tours are left</h2>
         <button className='myclick' onClick={()=>setTours(data)}>refresh</button>
      </div>
   )
}



  return (
   <div> 
   
   <Tours tours={tours} removetour={removetour}  ></Tours>

   </div>
  )}
  
  export default App; 