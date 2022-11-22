import styled from "@emotion/styled";
import { useRef } from "react";
import { useEffect, useState } from "react";

import { Button } from "../../components/buttons";
import Dropdown from "../../components/dropdown";
import Dropdown2 from "../../components/dropdown2";

import { Wrapper } from "../../units/Global";

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  border-bottom: 2px dotted lightgray;
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
const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  border: 2px dotted lightgray;
  margin-bottom: 10px;
`;

export const OrderMenuPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    await fetch("/data/Data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const defRefInput = useRef();
  const menuRefInput = useRef();

  return (
    <Wrapper>
      <OptionWrapper>
        <OptionBox>
          <OptionTitle>부서</OptionTitle>
          <Dropdown data={data?.Department} refInput={defRefInput} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>이름</OptionTitle>
          <Dropdown2 data={data?.["임원"]} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>품목</OptionTitle>
          <Dropdown data={data?.Coffee} refInput={menuRefInput} />
        </OptionBox>
        <OptionBox>
          <OptionTitle>수량</OptionTitle>
          <Dropdown />
        </OptionBox>
      </OptionWrapper>
      <Button
        isOrder={true}
        onClick={() =>
          console.log(
            defRefInput?.current?.innerText,
            menuRefInput?.current?.innerText
          )
        }
      >
        장바구니 담기
      </Button>
      <BasketWrapper></BasketWrapper>
    </Wrapper>
  );
};
