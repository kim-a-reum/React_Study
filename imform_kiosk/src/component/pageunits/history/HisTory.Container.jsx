import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Basket from "../../components/basket";
import { Button } from "../../components/buttons";
import { Wrapper } from "../../globalStyles/Global";

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;

export const HisToryPage = () => {
  return (
    <Wrapper>
      <Basket isHistory={true} />
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonBox>
          <Button> 주문 내역 조회</Button>
          <Button isOrder={true} style={{ margin: 0 }}>
            초기화면으로
          </Button>
        </ButtonBox>
      </Link>
    </Wrapper>
  );
};
