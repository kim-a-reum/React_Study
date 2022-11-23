import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isHistory }) => (isHistory ? "85%" : "35%")};
  margin: 10px 0px;
  overflow-y: scroll;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 16px;
  border-bottom: 1px solid lightgray;
`;

const RowTitle = styled.div`
  width: 25%;
  text-align: center;
  font-size: 12px;
`;

const RowContents = styled.div`
  width: 25%;
  color: black;
  font-size: 12px;
`;

export default function Basket(props) {
  const [basketState, setbasketState] = useState([]);
  useEffect(() => {
    getBasketData();
  }, [basketState]);
  const getBasketData = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setbasketState(baskets);
  };
  console.log(basketState);
  return (
    <BasketWrapper isHistory={props.isHistory}>
      <Row>
        <RowTitle>부서</RowTitle>
        <RowTitle>이름</RowTitle>
        <RowTitle>품목</RowTitle>
        <RowTitle>수량</RowTitle>
      </Row>
      {basketState?.map((e, i) => (
        <Row key={i}>
          <RowContents>{e.Dept}</RowContents>
          <RowContents>{e.Name}</RowContents>
          <RowContents>{e.Menu}</RowContents>
          <RowContents>{e.Quantity}</RowContents>
        </Row>
      ))}
    </BasketWrapper>
  );
}
