import React, { useState, useContext } from "react";
import CarItem from "./CarItem";
import { CarContext } from "./App";


const inputStyle = {
  display: "block",
  padding: "10px",
  fontSize: "20px",
};

export default () => {
  const [model, setModel] = useState("");
  const [manuf, setManufc] = useState("");
  const {cars,add} = useContext(CarContext);
  return (
      <div style={{ width: "800px", margin: "50px auto", textAlign: "center" }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Type model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Type manufacture"
          value={manuf}
          onChange={(e) => setManufc(e.target.value)}
        />
        <button
          onClick={() => {
            add(model,manuf);
            // setCars([...cars, { id: new Date().getTime(), model, manuf }]);
            setModel("");
            setManufc("");
          }}
        >
          Add
        </button>
        <hr />
        <ul>
          {cars.map((c) => (
            <CarItem key={c.id} id={c.id} model={c.model} manufc={c.manuf} />
          ))}
        </ul>
      </div>
  );
};
