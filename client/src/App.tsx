//import { useState } from "react";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.tsx";
import { AnotherRoute } from "./pages/AnotherRoute.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dummy" element={<AnotherRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
