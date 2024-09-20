import React from 'react';
import Cards from './Cards';

const Tours=({tours,removetour})=>{

return (
     <div  className='container'>
        <div className='title'> <h7>plan with pankaj</h7></div> 

      <div className='card'>
         {
            tours.map((tour)=>{
               return<Cards {...tour} removetour={removetour} ></Cards>
            })
         }
         
      </div>

     </div>
)

};


export default Tours;