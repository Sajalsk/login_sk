import "./App.css";
import Verify from "./components/Verify";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
// import Alert from "./components/Alert";

function App() {
  return (
    <>
      {/* <Alert/> */}
      <Routes>
      {/* <Route path="/Alert" element={<Alert />} /> */}
        <Route className="text-center" path="/" element={<Verify />} />

        <Route path="/Form" element={<Form />} />
      </Routes>
      {/* <Form/> */}
    </>
  );
}

export default App;
