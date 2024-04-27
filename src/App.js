import "./App.css";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import Verify from "./components/Verify";
// import { startTransition } from "react";

function App() {
  
  return (
    <>
      <Routes>
        <Route className="text-center" path="/" element={<Verify/>} />
       <Route path="/Form" element={<Form />} />
      </Routes>
      
    </>
  );
}

export default App;

