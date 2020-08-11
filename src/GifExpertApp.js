import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp=()=>{

    //const categories = [ 'Dragon Ball', 'Yugi-oh', 'Football'];
    const [ categories, setCategories] = useState(['Football']);
   
    return(
        <>       
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map( categorie =>(                    
                   <GiftGrid
                   key={categorie}
                   category={categorie}
                   />
                ))
            }
        </ol>
        


        </>
    )
}


export default GifExpertApp;