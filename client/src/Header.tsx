import React from "react";

import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: 27px;
  margin: 0;
  padding: 0;
`;

const BackGround = styled.div`
  margin: 0.8em 10% 0.8em 10%;
  background: -webkit-repeating-linear-gradient(
    -45deg,
    #f0f8ff,
    #f0f8ff 3px,
    #cde4ff 3px,
    #cde4ff 7px
  );
  background: repeating-linear-gradient(
    -45deg,
    #f0f8ff,
    #f0f8ff 3px,
    #cde4ff 3px,
    #cde4ff 7px
  );
`;

const CaptionBackground = styled.div`
  padding: 0.5em 1em;
  margin: 0 10% 1em 10%;
  color: #2c2c2f;
  background: #cde4ff; /*背景色*/
  border-radius: 5px;
`;

const Caption = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const Header: React.FC = (props) => {
  return (
    <div>
      <BackGround>
        <Title>個性.ttf</Title>
      </BackGround>
      <CaptionBackground>
        <Caption>
          整った書体、きれいなフォント、読みやすい字。
          <br />
          気がついたら世の中はそればかりだ。 スマホ、テレビ、新聞。
          <br />
          どこを見ても無駄のない凡庸な字。
          <br />
          人の書いた字が見たい。あなたの書いた字で読みたい。
          <br />
          あなたの一文字を頂けませんか。
        </Caption>
      </CaptionBackground>
    </div>
  );
};

export default Header;
