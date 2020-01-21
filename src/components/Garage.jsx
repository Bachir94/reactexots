import React, {useState} from 'react';
import Vehicule from './Vehicule';

const Garage =(props) =>{
    const [validation, setValidation] = useState(props.validation);

    let legarage = () =>{
        validation === oui ? setValidation(oui) : setValidation(non);
    }

    return(
        <div>
                <h5 className='card-title'>{props.validite}</h5>
               
                {
                    validation === oui ?
                    <p>
                    <span>lenom:     {props.modele}</span>
                    <span>year:      {props.year}</span>
                    <span>lacouleur: {props.thecouleur}</span>
                    <span>lecarbu:   {props.carburant}</span>
                    </p>
            :
    
                <span>{`La validité de votre véhicule ${props.modele} ne nous interresse pas`}</span>
                }
        </div>
    )
}


export default Garage;