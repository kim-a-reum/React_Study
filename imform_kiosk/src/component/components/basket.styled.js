import styled from "@emotion/styled";

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isHistory }) => (isHistory ? "70%" : "35%")};
  margin: 10px 0px;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  height: 18px;
  border-bottom: 1px solid lightgray;
`;

export const RowTitle = styled.div`
  width: ${({ isHistory }) => (isHistory ? "25%" : "23%")};
  text-align: center;
  font-size: 12px;
`;
export const DeleteTitle = styled.div`
  width: ${({ isHistory }) => (isHistory ? "0%" : "8%")};
  text-align: center;
  font-size: 10px;
`;
export const RowContents = styled.div`
  width: ${({ isHistory }) => (isHistory ? "25%" : "23%")};
  color: black;
  font-size: 12px;
`;

export const DeleteContents = styled.div`
  width: ${({ isHistory }) => (isHistory ? "0%" : "8%")};
  color: black;
  font-size: 12px;
`;

export const RowDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3px;
  border-bottom: 2px solid black;
`;
