import { Link } from "react-router-dom"

export const MainSelectPage = () =>{
    return (<>
    <Link to="/order">주문하기</Link>
    <Link to="/history">주문내역</Link>
    </>)
  }