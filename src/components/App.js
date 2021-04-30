import React, { Component, useState } from "react";
import "../styles/App.css";

export const App = () => {
  const parah =
    "Now I can render any React component on any DOM node I want using ReactDOM.render";
  return (
    <div id="main">
      <p>{parah}</p>
    </div>
  );
};
//export default App;
