import { useSvgDrawing } from '@svg-drawing/react'

import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

const DrawingCanvas = () => {
  const [renderRef, draw] = useSvgDrawing()
  const [targetCharacter, setTargetCharacter] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: React.SyntheticEvent) => {
    setIsLoading(true)

    console.log(targetCharacter, draw.getSvgXML())

    // axios
    //   .post('https://2ndr9.com/', {
    //     base64: String(base64Data).replace(/^.*,/, ''),
    //     font_name: fontName,
    //   })
    //   .then((res) => {
    //     setIsLoading(false)
    //     console.log(res)
    //     window.location.href = window.location.href
    //   })
    event.preventDefault()
  }
  const handleClear = () => {
    draw.clear()

    window.location.reload()
  }

  return (
    <div css={top}>
      <div css={wrapper}>
        <div css={canvas} ref={renderRef} />
      </div>

      <button css={buttonColor} onClick={handleClear}>
        リセット
      </button>

      <form onSubmit={handleSubmit} css={formStyle}>
        <label>
          更新する文字:
          <input
            type="text"
            required
            maxLength={1}
            value={targetCharacter}
            onChange={(event) => setTargetCharacter(event.target.value)}
            // 要検証
            pattern="[a-zA-z || \u30A1-\u30F6 || \u3041-\u3096 || \uFF66-\uFF9F || \uFF21-\uFF3A || \uFF41-\uFF5A || \u3400-\u9FFF || \uF900-\uFAFF || \uD840-\uD87F || \uDC00-\uDFFF || 0-9 || !-/:-@[-`{-~ || ！-／：-＠［-｀｛-～、-〜”’・]"
            title="特殊な記号は対応していません。"
          />
        </label>
        <input css={buttonColor} type="submit" value="アップロード" />
      </form>
    </div>
  )
}

export default DrawingCanvas

const buttonColor = css`
  background-color: #f5fffa;
  margin: 7px auto;
`

const canvas = css`
  border: solid;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const wrapper = css`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`
const top = css`
  // background: skyblue;
  text-align: center;
`

const formStyle = css``
