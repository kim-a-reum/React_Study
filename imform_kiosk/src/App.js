import {BrowserRouter,Routes,Route} from "react-router-dom" 
import { HisToryPage } from "./component/pageunits/history/HisTory.Container"
import { MainSelectPage } from "./component/pageunits/main/Main.Container"
import { OrderMenuPage } from "./component/pageunits/ordermenu/OrderMenu.Container"
import { PayMenuPage } from "./component/pageunits/paymenu/PayMenu.Container"

const Header = ()=>{
  return (<>렌딩을 포함하는 Header </>)
}




const NotFound = ()=>{
  return(<>일치하지 않는 경로의 페이지 입니당</>)
}
function App() {
  return (
    <div className="App">
      <Header/><br/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainSelectPage/>}/>
            <Route path="/order" element={<OrderMenuPage/>}/>
            <Route path="/payment/:paymentId" element={<PayMenuPage/>}/>
            <Route path="/history" element={<HisToryPage/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
