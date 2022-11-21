import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  html,
  body {
    margin: 0;
    overflow-wrap: break-word;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    background-color: #dcdcdc;
  }

  @font-face {
    font-family: "Caveat";
    src: url("/fonts/Caveat.ttf");
  }
  @font-face {
    font-family: "Mabinogi";
    src: url("/fonts/Mabinogi.ttf");
  }
`;

export const Wrapper = styled.div`
  width: 280px;
  background-color: white;
  border: 3px solid #ffd400;
  border-radius: 15px;
  text-align: center;
  font-family: "Mabinogi";
  color: darkgray;
`;
