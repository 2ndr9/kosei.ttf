import React, { useRef, useState } from "react";
import "./view.css";

const View: React.FC = (props) => {
  return (
    <section>
      <h1 className="tsuno">あいうえおかきくけこ</h1>
      <p></p>
      <input type="text" className="input" placeholder="" />
    </section>
  );
};

export default View;
