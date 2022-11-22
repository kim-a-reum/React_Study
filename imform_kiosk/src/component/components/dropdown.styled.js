import styled from "@emotion/styled";

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 30px;
  border: 1px solid #ffd400;
  border-radius: 8px;
  line-height: 120%;
  position: relative;
  padding-left: 15px;
  cursor: pointer;
`;

export const Selected = styled.div`
  color: #2c3131;
  font-size: 14px;
  font-weight: 300;
`;

export const Option = styled.div`
  z-index: 10000;
  position: absolute;
  background-color: yellow;
  width: 100px;
  right: 10px;
  left: 0px;
  top: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  ul {
    padding: 0;
    li {
      padding: 5px 0px;
      list-style: none;
      text-align: center;
      width: 100%;
      border-radius: 8px;
      :hover {
        color: #ffd400;
      }
      span {
        width: 100%;
        display: block;
        font-size: 16px;
        font-weight: 200;

        cursor: pointer;
        text-align: center;
        border-bottom: 1px solid #e9e9e9;
      }
    }
    li:last-of-type {
      span {
        border-bottom: none;
      }
    }
  }
`;
