import { Global, css } from '@emotion/react'
const GlobalCss = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'kosei';
          src: url('https://font-a.s3.ap-northeast-1.amazonaws.com/個性.ttf?${new Date().getTime()}') format('opentype');
        }

        body,
        button,
        textarea {
          font-family: 'kosei';
          background-color: #f5fffa;
        }

        body {
          max-width: 900px;
          margin: auto;
        }

        input {
          font-family: 'kosei';
        }
      `}
    />
  )
}

export default GlobalCss
