import { css } from '@emotion/react'

import image from './img/download.svg'

const Title = css`
  font-size: 30px;
  // border: solid;
  display: block;
  width: fit-content;
  margin: 20px auto 20px auto;
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  &:hover {
    background: url(${image}) no-repeat center right;
    background-size: 20px;
  }
`

const Header = () => (
  <a css={Title} href="https://s3.ap-northeast-1.amazonaws.com/kosei.ttf/%E5%80%8B%E6%80%A7.ttf">
    個性.ttf
  </a>
)

export default Header
