import { Link } from "react-router-dom";
import Basket from "../../components/basket";
import { Button } from "../../components/buttons";
import { Wrapper } from "../../units/Global";

export const HisToryPage = () => {
  return (
    <Wrapper>
      <Basket isHistory={true} />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button isOrder={true}>초기화면으로</Button>
      </Link>
    </Wrapper>
  );
};
