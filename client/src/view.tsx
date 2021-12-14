import React, { useRef, useState } from "react";
import "./view.css";

const View: React.FC = (props) => {
  return (
    <section>
      <h1 className="tsuno">あいうえお</h1>
      <input type="text" className="input" placeholder="" />
    </section>
  );
};

export default View;
