import styled from "@emotion/styled";

export const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: white;
  border: 3px solid #ffd400;
  border-radius: 15px;
  text-align: center;
  line-height: 50px;
  :hover {
    background-color: #ffd400;
    color: white;
  }
  font-family: "Mabinogi";
  color: darkgray;
  margin-left: ${({ isOrder }) => (isOrder ? "150px" : "0px")};
`;
