import React from 'react';
import Garage from './Garage';


const Vehicule =(props) =>{
   
    return(
        <div>
                <h5 className='card-title'>{props.modele}</h5>
                <h5 className='card-title'>{props.year}</h5>
                <h5 className='card-title'>{props.thecouleur}</h5>
                <h5 className='card-title'>{props.carburant}</h5>
                <h5 className='card-title'>{props.validite}</h5>
        
                </div>
    )
}
export default Vehicule;
