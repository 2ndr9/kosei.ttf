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
  // 対応文字用検討
  return (
    <textarea
      rows={25}
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
			あなたの一文字を頂けませんか。&#13;&#10;"
    />
  )
}

export default View
