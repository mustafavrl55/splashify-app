import "./App.scss";
//import ClearIcon from "@mui/icons-material/Clear";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Selection from "./components/Selection";
import Nature from "./pages/Nature";
import Architecture from "./pages/Architecture";
import Travel from "./pages/Travel";
import Food from "./pages/Food";
import Animals from "./pages/Animals";
import Technology from "./pages/Technology";
import Trending from "./pages/Trending";
import New from "./pages/New";
import { FotoContext } from "./context/FotoContext";
import { useState } from "react";


function App() {

  const [photos, setPhotos] = useState([]);


  return (
    <FotoContext.Provider value={{photos, setPhotos}} >
    <div className="App">
      <div className="container">
        <Header/>
          <Routes>
          <Route path="/" element={<Selection/>} />
          <Route path="/nature" element={<Nature/>} />
          <Route path="/architecture" element={<Architecture/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/animals" element={<Animals/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/trending" element={<Trending/>} />
          <Route path="/new" element={<New/>} />

        </Routes>
      </div>
    </div>
    </FotoContext.Provider>
  );
}

export default App;
