import "./App.css";
import FirstComp from "./Component/FirstComp";
import SecComp from "./Component/SecComp";
import { Link } from "react-router-dom";

// props, state
function App() {
  // setname("QWE");
  // const [state, setstate] = useState(initialState);
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
      </nav>
      <FirstComp />
      <SecComp />
      <p>Root -> App -> (First,(Second->Third))</p>
    </div>
  );
}

export default App;
