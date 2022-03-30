import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Settings from "./components/Settings";
import Playground from "./components/Playground";
import Congrats from "./components/Congrats";
import Gameover from "./components/Gameover";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/gameover" element={<Gameover />} />
      </Routes>
    </BrowserRouter>
  </div>,
  rootElement
);
