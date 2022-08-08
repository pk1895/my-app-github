import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const navigate = useNavigate();
  const onNavigation = () => {
    navigate("/expenses", { state: { id: 1, name: "Test1" } });
  };

  return (
    <main>
      <h2>Invoices here</h2>
      <p>Content</p>
      <button onClick={onNavigation}>Navigate</button>
    </main>
  );
};

export default Invoices;
