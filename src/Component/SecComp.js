import { useState, useEffect } from "react";
import ThirdComp from "./ThirdComp";

const SecComp = () => {
  console.log("SecComp loaded");
  const [name, setName] = useState("Ojassoft"); //hooks
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState("");

  const upadateNameState = () => {
    setName("Latest Ojassoft");
  };

  useEffect(() => {
    // console.log(name);
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((response) => {
          alert("Fetch function called.");
          console.log(response);
          setRes(response.title);
        });
    };
    fetchData();
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
          setFlag((prevState) => prevState);
        }}
      >
        Test
      </button>
    </div>
  );
};

export default SecComp;
