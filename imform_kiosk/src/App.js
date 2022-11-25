import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HisToryPage } from "./component/pageunits/history/HisTory.Container";
import { MainSelectPage } from "./component/pageunits/main/Main.Container";
import { OrderMenuPage } from "./component/pageunits/ordermenu/OrderMenu.Container";
import { PayMenuPage } from "./component/pageunits/paymenu/PayMenu.Container";
import { Header } from "./component/components/header";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = () => {
  return <>일치하지 않는 경로의 페이지 입니당</>;
};

function App() {
  return (
    <Wrapper className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSelectPage />} />
          <Route path="/order" element={<OrderMenuPage />} />
          <Route path="/payment/:paymentId" element={<PayMenuPage />} />
          <Route path="/history" element={<HisToryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
