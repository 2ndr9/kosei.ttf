import { Global, css } from '@emotion/react'
const GlobalCss = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'kosei';
          src: url('https://s3.ap-northeast-1.amazonaws.com/kosei.ttf/%E5%80%8B%E6%80%A7.ttf?${new Date().getTime()}')
            format('opentype');
        }

        body,
        button,
        input,
        textarea {
          font-family: 'kosei';
          background-color: #f5fffa;
        }

        body {
          max-width: 800px;
          margin: auto;
        }
      `}
    />
  )
}

export default GlobalCss
