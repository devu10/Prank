import "./App.css";
import { Calculator } from "./components/Calculator";

function App() {
  return <div className="wrapper d-flex justify-content-center align-items-center" style={{
    minHeight: "100vh"
  }}>
    <Calculator/>
    </div>;
}

export default App;
