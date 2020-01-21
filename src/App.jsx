import React from 'react';
import Garage from './components/Garage';
import Vehicule from './components/Vehicule';

const App =() => {
  
    return (
      <div>
      <Garage modele='Mercedes Benz S 260' year='1991' thecouleur='Bleu'    carburant='Essence'   validation={non} />
      <Garage modele='Fiat 500'            year='2010' thecouleur='Noire'   carburant='Essence'   validation={oui} />
      <Garage modele='Volkswagen Crafter'  year='2016' thecouleur='Blanche' carburant='Diesel'    validation={oui} />
      <Garage modele='BMW 114'             year='2012' thecouleur='Bleu'    carburant='Essence'   validation={non} />
      <Garage modele='Audi A3'             year='2015' thecouleur='Rouge'   carburant='Diesel'    validation={oui} />
      </div>
      ) 
  }
    

export default App;
