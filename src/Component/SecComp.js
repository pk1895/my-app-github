import { useState, useEffect } from "react";
import axios from "axios";
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
    // axios.request("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => {
    //   console.log(res);
    //   });
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
    });
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     console.log(response);
    //     setRes(response.title);
    //   });

    // console.log(name);
    // console.log();
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
