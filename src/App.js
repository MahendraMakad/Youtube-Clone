import React, { useState } from "react";
import VideoList from "./components/VideoList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>
        <i class="fa-brands fa-youtube"></i> YouTube Clone
      </h1>
      <VideoList />
    </div>
  );
};

export default App;
