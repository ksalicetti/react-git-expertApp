import React from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFecthGifts } from '../hooks/useFetchGifts';

export const GiftGrid = ({category}) => {

    const {data:images,loading}=useFecthGifts(category);  
   
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>   
       
       {loading && <p className="animate__animated animate__flash">loading</p>}

        <div className="card-grid"> 
               {
                    images.map( img =>(
                        <GiftGridItem 
                        key={img.id}
                       {...img}
                        />                    
                    ))
               }
        </div> 
        </>
    )
}
