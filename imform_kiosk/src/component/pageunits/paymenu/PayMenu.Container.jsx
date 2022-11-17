import { useParams } from "react-router-dom"

export const PayMenuPage = ()=>{
    const {paymentId} = useParams()
  console.log(paymentId)
  // 다이나믹 라우팅할때 파라미터를 사용하자 ! 
    return(<> 결제하는 페이지 </>)
  }