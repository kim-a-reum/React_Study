import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50%;
`;

export const MainSelectPage = () => {
  return (
    <MainWrapper>
      <Link to="/order" style={{ textDecoration: "none" }}>
        <Button>주문하기</Button>
      </Link>
      <div style={{ marginLeft: "20px" }} />
      <Link to="/history" style={{ textDecoration: "none" }}>
        <Button>주문내역</Button>
      </Link>
    </MainWrapper>
  );
};
