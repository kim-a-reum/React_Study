import { useState } from "react"
import Select from "./3-select"

  const Container = ()=>{
    console.log("컨테이너 업로드")
    return (
      <div>컨테이너</div>
    )
  }
  const Presenter1 = ()=>{
    console.log("프리젠터1 업로드")
    const [state,setState] = useState(true)
    const onClick = ()=>{
      setState(false)
    }
    return (
      <div>프리젠터1
        {state}
        <button onClick={onClick}>stateChange!@</button>
      </div>

    )
  }

  const Presenter2 = ()=>{
    console.log("프리젠터2 업로드")
    return (
      <div>프리젠터2
        <Presenter1/>
      </div>
    )
  }


function App() {


  return (
    <>
<Container/>
<Presenter2/>
<Select lists={["서울", "경기", "인천","강원","충북","충남"]}/>

    </>
  )
}

export default App;
