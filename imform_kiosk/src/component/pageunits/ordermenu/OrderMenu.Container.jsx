import styled from "@emotion/styled";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Basket from "../../components/basket";

import { Button } from "../../components/buttons";
import Dropdown from "../../components/dropdown";
import Dropdown2 from "../../components/dropdown2";
import { deptRecoilState } from "../../store";
import { Wrapper } from "../../units/Global";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 42%;
  border-bottom: 1px dotted lightgray;
  margin-bottom: 10px;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
`;
const OptionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: darkgray;
  font-size: 18px;
  font-family: "Mabinogi";
`;

export const OrderMenuPage = () => {
  const [data, setData] = useState({});
  const [defState] = useRecoilState(deptRecoilState);
  const deptRefInput = useRef();
  const nameRefInput = useRef();
  const menuRefInput = useRef();
  const quantityRefInput = useRef();

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    await fetch("/data/Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    baskets.push({
      Dept: deptRefInput?.current?.innerText,
      Name: nameRefInput?.current?.innerText,
      Menu: menuRefInput?.current?.innerText,
      Quantity: quantityRefInput?.current?.innerText,
    });
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickFinsh = () => {
    Swal.fire({
      icon: "success",
      iconColor: "#ffd400",
      confirmButtonColor: "#ffd400",
      width: "200px",
      title: "주문 완료",
    });
    localStorage.removeItem("baskets");
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    history.push({
      Dept: deptRefInput?.current?.innerText,
      Name: nameRefInput?.current?.innerText,
      Menu: menuRefInput?.current?.innerText,
      Quantity: quantityRefInput?.current?.innerText,
    });
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <Wrapper>
      <OptionWrapper>
        <OptionBox>
          <OptionTitle>부서</OptionTitle>
          <Dropdown data={data?.Department} refInput={deptRefInput} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>이름</OptionTitle>
          <Dropdown2 data={data[defState]} refInput={nameRefInput} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>품목</OptionTitle>
          <Dropdown data={data?.Coffee} refInput={menuRefInput} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>수량</OptionTitle>
          <Dropdown data={data?.Quantity} refInput={quantityRefInput} />
        </OptionBox>
      </OptionWrapper>
      <Button isOrder={true} onClick={onClickBasket}>
        장바구니 담기
      </Button>
      <Basket />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button isOrder={true} onClick={onClickFinsh}>
          주문하기
        </Button>
      </Link>
    </Wrapper>
  );
};
