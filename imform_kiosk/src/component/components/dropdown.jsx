import { useState } from "react";
import { useRecoilState } from "recoil";
import { deptRecoilState } from "../store";

import * as Drop from "./dropdown.styled";

export default function Dropdown(props) {
  const [isSelect, setIsSelect] = useState("선택하기");
  const [isActive, setIsActive] = useState(false);
  const [, setState] = useRecoilState(deptRecoilState);

  const onClickSelectBtn = async () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    setIsSelect(el);
    setState(el);
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected ref={props.refInput}>{isSelect}</Drop.Selected>
        {isActive && (
          <Drop.Option>
            <ul>
              {props?.data?.map((el) => (
                <li key={el.id}>
                  <span onClick={onClickOption(el.Name)}>{el.Name}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
