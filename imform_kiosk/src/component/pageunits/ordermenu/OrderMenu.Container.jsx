import { useRef } from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Basket from "../../components/basket";
import { Button } from "../../components/buttons";
import Dropdown from "../../components/dropdown";
import Dropdown2 from "../../components/dropdown2";
import { deptRecoilState } from "../../store";
import { Wrapper } from "../../globalStyles/Global";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as Order from "./OrderMenu.styled";
import { getToday } from "../../components/getDate";

export const OrderMenuPage = () => {
  const [data, setData] = useState({});
  const [basket, setBasket] = useState({});
  const [defState] = useRecoilState(deptRecoilState);
  const deptRefInput = useRef();
  const nameRefInput = useRef();
  const menuRefInput = useRef();
  const quantityRefInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    await fetch("/data/Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const onClickBasket = () => {
    if (
      deptRefInput?.current?.innerText !== "선택하기" &&
      nameRefInput?.current?.innerText !== "선택하기" &&
      menuRefInput?.current?.innerText !== "선택하기" &&
      quantityRefInput?.current?.innerText !== "선택하기"
    ) {
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
      baskets.push({
        Dept: deptRefInput?.current?.innerText,
        Name: nameRefInput?.current?.innerText,
        Menu: menuRefInput?.current?.innerText,
        Quantity: quantityRefInput?.current?.innerText,
      });
      localStorage.setItem("baskets", JSON.stringify(baskets));
      setBasket((prev) => !prev);
      deptRefInput.current.innerText = "선택하기";
      nameRefInput.current.innerText = "선택하기";
      menuRefInput.current.innerText = "선택하기";
      quantityRefInput.current.innerText = "선택하기";
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "#f86700",
        confirmButtonColor: "#ffd400",
        width: "200px",
        title: "선택 오류",
      });
    }
  };

  const onClickFinsh = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const basketDate = getToday();
    if (baskets[0] === undefined) {
      Swal.fire({
        icon: "error",
        iconColor: "#f86700",
        confirmButtonColor: "#ffd400",
        width: "200px",
        title: "장바구니 텅텅",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      iconColor: "#ffd400",
      confirmButtonColor: "#ffd400",
      width: "200px",
      title: "주문 완료",
    });
    localStorage.removeItem("baskets");
    baskets.map((el) => (el.Date = basketDate));
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    localStorage.setItem("history", JSON.stringify(history.concat(baskets)));
    navigate("/");
  };

  return (
    <Wrapper>
      <Order.OptionWrapper>
        <Order.OptionBox>
          <Order.OptionTitle>부서</Order.OptionTitle>
          <Dropdown data={data?.Department} refInput={deptRefInput} />
        </Order.OptionBox>
        <Order.OptionBox>
          <Order.OptionTitle>이름</Order.OptionTitle>
          <Dropdown2 data={data[defState]} refInput={nameRefInput} />
        </Order.OptionBox>
        <Order.OptionBox>
          <Order.OptionTitle>품목</Order.OptionTitle>
          <Dropdown data={data?.Coffee} refInput={menuRefInput} />
        </Order.OptionBox>
        <Order.OptionBox>
          <Order.OptionTitle>수량</Order.OptionTitle>
          <Dropdown data={data?.Quantity} refInput={quantityRefInput} />
        </Order.OptionBox>
      </Order.OptionWrapper>
      <Button isOrder={true} onClick={onClickBasket}>
        장바구니 담기
      </Button>
      <Basket basket={basket} />
      <Button isOrder={true} onClick={onClickFinsh}>
        주문하기
      </Button>
    </Wrapper>
  );
};
