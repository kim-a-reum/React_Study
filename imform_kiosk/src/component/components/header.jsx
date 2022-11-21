import styled from "@emotion/styled";

import { MdEmojiFoodBeverage } from "react-icons/md";

const Title = styled.div`
  font-family: "Caveat";
  font-weight: 700;
  font-size: 45px;
  display: flex;
  flex-direction: row;
`;
const Beverage = styled(MdEmojiFoodBeverage)`
  margin-top: 13px;
`;

export const Header = () => {
  return (
    <Title>
      Order beverage ! &nbsp;
      <Beverage />
    </Title>
  );
};
