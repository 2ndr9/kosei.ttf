import React from 'react'
import { css } from '@emotion/react'

const TextArea = css`
  width: 80%;
  height: 100%;
  font-size: 30px;
  margin: 20px auto 20px auto;
  display: block;
`

const View: React.FC = (props) => {
  return (
    <textarea
      rows={30}
      css={TextArea}
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
  )
}

export default View
