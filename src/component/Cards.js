import React, { useState } from 'react';

const Cards=({id,name,info,price,image,removetour})=>{
   
const [readMore,setReadMore]=useState();
  const description= readMore?info: '${info.substring(0,200)}......'
     function readMorehandler(){
        setReadMore(!readMore);
     }


   

    return(
           <div className='cards'>
           <img src={image} className='image'></img>
              <div className='tour-info'>
                <h2 className='h2'>{price}</h2>
                <h2 className='name'>{name}</h2>
            <div className='pankaj'>            {description}
            <span className='readmore' onClick={readMorehandler}>
                {readMore?'showLess':'readMore'}
                </span>
              </div>
              </div>

            
        <button className="button" onClick={()=>removetour(id)}>
            NOT INTERESTED
            </button>   
        </div>
    )
}

export default Cards;