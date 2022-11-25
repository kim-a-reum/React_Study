import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { renderRecoilState } from "../store";
import * as Baskets from "./basket.styled";

export default function Basket(props) {
  const [basketState, setbasketState] = useState([]);
  const [historyState, setHistoryState] = useState([]);
  const [recoilState, setRecoilState] = useRecoilState(renderRecoilState);

  const getBasketData = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setbasketState(baskets);
    const histories = JSON.parse(localStorage.getItem("history") || "[]");
    setHistoryState(histories);
  };

  const onClickDelete = (e) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBaskets = baskets.filter((el) => el !== baskets[e.target.id]);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setbasketState(basketState);
    setRecoilState((e) => !e);
  };
  useEffect(() => {
    getBasketData();
  }, [props.basket, recoilState]);

  return (
    <Baskets.BasketWrapper isHistory={props.isHistory}>
      <Baskets.Row>
        <Baskets.RowTitle isHistory={props.isHistory}>부서</Baskets.RowTitle>
        <Baskets.RowTitle isHistory={props.isHistory}>이름</Baskets.RowTitle>
        <Baskets.RowTitle isHistory={props.isHistory}>품목</Baskets.RowTitle>
        <Baskets.RowTitle isHistory={props.isHistory}>수량</Baskets.RowTitle>
        {props.isHistory ? null : (
          <Baskets.DeleteTitle isHistory={props.isHistory}>
            삭제
          </Baskets.DeleteTitle>
        )}
      </Baskets.Row>
      {props.isHistory ? (
        <>
          {historyState?.map((e, i) => (
            <>
              <Baskets.Row key={i}>
                <Baskets.RowContents isHistory={props.isHistory}>
                  {e.Dept}
                </Baskets.RowContents>
                <Baskets.RowContents isHistory={props.isHistory}>
                  {e.Name}
                </Baskets.RowContents>
                <Baskets.RowContents isHistory={props.isHistory}>
                  {e.Menu}
                </Baskets.RowContents>
                <Baskets.RowContents isHistory={props.isHistory}>
                  {e.Quantity}
                </Baskets.RowContents>
              </Baskets.Row>
              <Baskets.RowDate key={i}>{e.Date}</Baskets.RowDate>
            </>
          ))}
        </>
      ) : (
        <>
          {basketState?.map((e, i) => (
            <Baskets.Row id={i} key={i}>
              <Baskets.RowContents>{e.Dept}</Baskets.RowContents>
              <Baskets.RowContents>{e.Name}</Baskets.RowContents>
              <Baskets.RowContents>{e.Menu}</Baskets.RowContents>
              <Baskets.RowContents>{e.Quantity}</Baskets.RowContents>
              <Baskets.DeleteContents onClick={onClickDelete} id={i}>
                x
              </Baskets.DeleteContents>
            </Baskets.Row>
          ))}
        </>
      )}
    </Baskets.BasketWrapper>
  );
}
