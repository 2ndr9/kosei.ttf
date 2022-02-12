import React from "react";

import styled from "styled-components";

const TextArea = styled.textarea`
  font-family: "tsuno";
  width: 100%;
  height: 100%;
  font-size: 30px;
`;

const View: React.FC = (props) => {
  return (
    <section style={{ height: "100%", marginRight: "10%", marginLeft: "10%" }}>
      <h1 className="tsuno"></h1>
      <TextArea
        placeholder="
                整った書体、&#13;&#10;
                きれいなフォント、&#13;&#10;
                読みやすい字。&#13;&#10;
                気がついたら世の中そればかりだ。&#13;&#10;
                スマホ、テレビ、新聞。&#13;&#10;
                どこを見ても無駄のない凡庸な字。&#13;&#10;
                人の書いた字が見たい。&#13;&#10; 
                あなたの書いた字で読みたい。&#13;&#10;
                あなたの一文字を頂けませんか。&#13;&#10;
                ㅤ&#13;&#10;
                対応文字&#13;&#10;
                全角ひらがな: あ、ぁ&#13;&#10;
                全角カタカナ: ア、ァ&#13;&#10;
                半角カタカナ: ｱ&#13;&#10;
                漢字: 安以宇衣於&#13;&#10;
                半角アルファベット: A、a&#13;&#10;
                全角アルファベット: Ａ、ａ&#13;&#10;
                半角記号: !@#$%^&amp;*()-_=+[]\{}|;':&quot;,./&lt;&gt;?`~&#13;&#10;
                
      "
      />
    </section>
  );
};

export default View;
