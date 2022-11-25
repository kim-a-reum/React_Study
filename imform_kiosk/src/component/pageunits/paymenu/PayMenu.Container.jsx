import { useParams } from "react-router-dom";

export const PayMenuPage = () => {
  const { paymentId } = useParams();
  console.log(paymentId);
  // 다이나믹 라우팅할때 파라미터를 사용하자 !
  return <> {paymentId}번 주문자의 결제 페이지 입니다 </>;
};
