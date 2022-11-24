import { useState } from "react";
import Swal from "sweetalert2";

import * as Drop from "./dropdown.styled";

export default function Dropdown2(props) {
  const [isSelect, setIsSelect] = useState("선택하기");
  const [isActive, setIsActive] = useState(false);

  const onClickSelectBtn = async () => {
    if (props.data === undefined) {
      Swal.fire({
        icon: "error",
        iconColor: "#f86700",
        confirmButtonColor: "#ffd400",
        width: "200px",
        title: "부서 선택",
      });
      return;
    }
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    setIsSelect(el);
  };
  console.log(props);
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
