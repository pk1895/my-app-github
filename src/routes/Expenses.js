import { useLocation } from "react-router-dom";

const Expenses = () => {
  const location = useLocation();
  return (
    <>
      <p>Expenses</p>
      <p>{location.state.name}</p>
    </>
  );
};
export default Expenses;
