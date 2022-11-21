import { useEffect } from "react";
import DropdownSelect from "../../components/dropdown";
import { Wrapper } from "../../units/Global";

export const OrderMenuPage = () => {
  useEffect(() => {
    menuData();
  }, []);
  const menuData = async () => {
    await fetch("/data/coffeeData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Wrapper>
      <DropdownSelect />
    </Wrapper>
  );
};
