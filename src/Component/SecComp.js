import { useState, useEffect } from "react";
import ThirdComp from "./ThirdComp";

const SecComp = () => {
  const [name, setName] = useState("Ojassoft"); //hooks
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState("");

  const upadateNameState = () => {
    setName("Latest Ojassoft");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRes(response.title);
      });

    console.log(name);
    console.log();
  }, [flag]); //hook
  // Mount => first load / on load => []
  // Update => first load / on load => [drink]

  return (
    <div>
      <p>Sec Component</p>
      <p>{res}</p>
      <ThirdComp compName={name} />
      <button onClick={upadateNameState}>Update Name</button>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Test
      </button>
    </div>
  );
};

export default SecComp;
