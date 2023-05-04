import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import  Navbar  from "./components/Navbar";
import Home from "./pages/home"
import Auth from "./pages/auth"
import Create from "./pages/createrecipe"
import Saved from "./pages/savedrecipe"

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/create-recipe" element={<Create/>} />
      <Route path="/saved" element={<Saved/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
