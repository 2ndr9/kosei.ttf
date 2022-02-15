import { ThreeDots } from 'react-loader-spinner'
import { css } from '@emotion/react'

interface Props {
  isLoading: boolean
}

const Loading = ({ isLoading }: Props) => {
  if (isLoading) {
    return (
      <div css={loadingWrapper}>
        <div css={center}>
          <ThreeDots color="#00BFFF" height={100} width={100} />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Loading

const loadingWrapper = css`
  position: fixed;
  background: rgba(100, 100, 100, 0.5);
  inset: 0;
`

const center = css`
  position: fixed;
  top: calc(40%);
  left: calc(50% - 100px / 2);
`
