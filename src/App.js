import "./App.css";
import FirstComp from "./Component/FirstComp";
import SecComp from "./Component/SecComp";

// props, state
function App() {
  // setname("QWE");
  // const [state, setstate] = useState(initialState);
  return (
    <div className="App">
      <FirstComp />
      <SecComp />
      <p>Root -> App -> (First,(Second->Third))</p>
    </div>
  );
}

export default App;
