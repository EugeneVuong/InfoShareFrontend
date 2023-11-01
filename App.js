import * as React from 'react'
import MainContainer from './navigation/MainContainer'
import OInfoScreen from './navigation/screens/OInfoScreen';


function App(){
  return(
    // {<MainContainer/>}
    <OInfoScreen firstName='Erick' lastName='Chan' phoneNumber='555-555-555' major='CS'/>
  );
}

export default App;