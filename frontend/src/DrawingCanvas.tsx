import { useSvgDrawing } from '@svg-drawing/react'

import { css } from '@emotion/react'
import { useState } from 'react'
import axios from 'axios'
import Loading from './Loading'

const fontUploadAPIURL = 'https://x8fknamjf6.execute-api.ap-northeast-1.amazonaws.com/prod'

const DrawingCanvas = () => {
  const [renderRef, draw] = useSvgDrawing({ fill: 'black', penWidth: 1 })
  const [targetCharacter, setTargetCharacter] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const svgXML = draw.getSvgXML()

    await axios
      .post(fontUploadAPIURL, {
        svgXML: svgXML,
        targetCharacter: targetCharacter,
      })
      .then(() => {
        window.location.reload()
      })
      .catch(() => {
        console.log('APIがタイムアウトするなどのエラーが発生しました')
        window.location.reload()
      })
  }
  const handleClear = () => {
    draw.clear()

    // ウィンドウリサイズ時の挙動修正のため
    // 対症療法
    window.location.reload()
  }

  return (
    <div css={top}>
      <Loading isLoading={isLoading} />
      <div css={wrapper}>
        <div css={canvas} ref={renderRef} />
      </div>

      <button css={resetStyle} onClick={handleClear}>
        リセット
      </button>

      <form onSubmit={handleSubmit} css={formStyle}>
        <label>
          更新する文字:
          <input
            css={inputStyle}
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
        <input css={uploadStyle} type="submit" value="アップロード" />
      </form>
    </div>
  )
}

export default DrawingCanvas

const inputStyle = css`
  margin-left: 12px;
  font-size: 20px;
  width: 20px;
  padding-left: 22.5px;
  padding-right: 22.5px;
  vertical-align: middle;
`

const uploadStyle = css`
  background-color: #f5fffa;
  margin: 7px auto;
  margin-left: 17px;
  vertical-align: middle;
`
const resetStyle = css`
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
  z-index: 1;
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
  text-align: center;
`

const formStyle = css``
