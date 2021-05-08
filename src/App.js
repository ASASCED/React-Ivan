import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [initialValue, changeValueFunction] = useState(initialState);
  const [name, setName] = useState();
  const [counter, setCounter] = useState(0);
  const [names, setNames] = useState(["Jesus", "Andres", "Pancho"]);
  const [persona, setPersona] = useState({
    name: "Jesus",
    age: 23,
    address: "Tecamac, Mex",
  });
  // let name = "Ivan";

  const addName = () => names.length < 5 && setNames([...names, "Ivan"]);
  const changeAge = () => setPersona({ ...persona, age: 33 });

  const changeName = () => {
    setName("Jesus");
    console.log(name);
  };

  const masUno = () => setCounter(counter + 1);
  const menosUno = () => setCounter(counter - 1);

  useEffect(() => {
    console.log("Hola Mundo!");
  }, [names, persona, name, counter]);

  return (
    <div className="App">
      <h1>Variable: {name}</h1>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <div>
        <div>Name: {persona.name}</div>
        <div>Age: {persona.age}</div>
        <div>Address: {persona.address}</div>
      </div>
      <h3>Counter: {counter}</h3>
      <button onClick={masUno}>Mas</button>
      <button onClick={menosUno}>Menos</button>
      <button onClick={changeName}>Click</button>
      <button onClick={addName}>Add Name</button>
      <button onClick={changeAge}>Change age</button>
    </div>
  );
}

export default App;
