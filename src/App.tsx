import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <div>
          <Routes>
            {/* switch case statement */}
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
