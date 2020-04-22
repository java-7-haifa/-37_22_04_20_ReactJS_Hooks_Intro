import React,{useState} from 'react';
import Counter from './Counter';
import FuncCounter from './FuncCounter';
import Cars from './Cars';

export const CarContext = React.createContext();

function App() {
  const[cars,setCars] = useState([]);
  return (
    <CarContext.Provider value={{
      cars,
      rm: (id) => setCars(cars.filter(c=>c.id !== id)),
      add: (model,manuf) => setCars([...cars,{id:new Date().getTime(),model,manuf}])
    }}>
    <Cars/>
    </CarContext.Provider>
  );
}

export default App;
