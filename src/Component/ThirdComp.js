import { useRef } from "react";

const ThirdComp = (props) => {
  console.log("Thri Component Loaded..."); //{compName: 'Ojassoft'}
  const inputElement = useRef();
  const onUpdate = () => {
    debugger;
    console.log(inputElement);
  };
  return (
    <>
      <p>{props.compName}</p>
      <input type="text" ref={inputElement} onChange={onUpdate} />
    </>
  );
};

export default ThirdComp;
