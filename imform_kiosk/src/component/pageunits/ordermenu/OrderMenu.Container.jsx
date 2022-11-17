import { useEffect } from "react"

export const OrderMenuPage = ()=>{
  useEffect(()=>{
menuData()
  },[])
  const menuData = async()=>{
await fetch("/data/commentData.json").then((res)=>res.json()).then((data)=>console.log(data))
  }
    return(<>메뉴 고르고 장바구니 담는 페이지</>)
  }
  
  