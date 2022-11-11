import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorPicker from "./components/ColorPicker";

// pages & components

import Title from "./components/Title";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title />
        <ColorPicker />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Saved />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
