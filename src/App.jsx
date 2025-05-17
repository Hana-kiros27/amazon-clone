// import React from "react";
// import Routing from "../Router";
// import {DataContext} from './components/DataProvider/DataProvider'
// import {Type} from './Utility/actiontype'
// import {auth} from './Utility/firebase'
// function App() {
// // const [{user},dispatch]= useContext(DataContext);


// //set at global

// useEffect(() => {
//   auth.onauthStateChanged((authUser)=>(
// if(authUser){
//   dispatch({ type: 'SET_USER', user: authUser });
// }else{
//   dispatch({ type: 'SET_USER', user: null });
// }
//   ))

 
// }, []);



//   return (
//     <>
//       <Routing />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useContext } from "react";
import Routing from "../Router";
import { DataContext } from './components/DataProvider/DataProvider';
import { auth } from './Utility/firebase';

function App() {
  const [{ user }, dispatch] = useContext(DataContext); // Get user and dispatch from context

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;