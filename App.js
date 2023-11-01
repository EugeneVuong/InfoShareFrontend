import * as React from 'react'
import MainContainer from './navigation/MainContainer'
import { ClerkProvider } from "@clerk/clerk-react";
 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 

function App(){
  return(
    <ClerkProvider publishableKey={clerkPubKey}>
    <MainContainer/>
    </ClerkProvider>
  );
}

export default App;