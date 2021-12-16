import React from "react";

import styled from "styled-components";

const TextArea = styled.textarea`
  font-family: "tsuno";
  width: 100%;
  height: 100%;
  font-size: 40px;
`;

const View: React.FC = (props) => {
  return (
    <section style={{ height: "100%", marginRight: "10%", marginLeft: "10%" }}>
      <h1 className="tsuno"></h1>
      <p style={{ textAlign: "center", fontSize: "15px" }}>自由入力欄</p>
      <TextArea />
    </section>
  );
};

export default View;
