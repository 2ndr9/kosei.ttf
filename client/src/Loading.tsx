import styled from "styled-components";
import ReactLoading from "react-loading";

const StyledDiv = styled.div`
  position: fixed;
  background: rgba(100, 100, 100, 0.8);
  inset: 0;
  display: flex;
  flex-direction: column;
`;

// margin-left: 40%;
const StyledDiv2 = styled.div`
  margin-top: 20%;
  margin-left: 40%;
  width: 100%;
`;

const StyledText = styled.text`
  color: rgba(250, 250, 250, 1);
  font-size: 27px;
  text-align: center;
  font-family: tsuno;
`;

const StyledP = styled.text`
  line-height: 2.5em;
`;

const Loading = (props: any) => {
  const isLoading = props.isLoading;

  if (isLoading) {
    return (
      <StyledDiv>
        <StyledDiv2>
          <ReactLoading
            type={"bars"}
            color={"white"}
            height={"20%"}
            width={"20%"}
          />
        </StyledDiv2>
        <StyledText>
          <StyledP>Now Uploading...</StyledP>
          <br />
          <StyledP>アップロード中です</StyledP>
          <br />
          <StyledP>すこしお待ち下さい</StyledP>
        </StyledText>
      </StyledDiv>
    );
  } else {
    return <div></div>;
  }
};

export default Loading;
