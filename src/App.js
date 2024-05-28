import React from "react";
import Calender from "./calender.js";
import "./calender.css";
import Side_scroll from "./side_scroll.js";
import "./side_scroll.css";
import Nav from "./nav.js";
function App() {
  return (
    <div>
      <Nav></Nav>
      <div style={{display:"flex"}}>
      <Side_scroll style={{display:"inline"}} />
      <Calender style={{display:"inline"}} />
      </div>
    </div>
  );
}

export default App;
