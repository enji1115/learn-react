import React, { useState } from 'react'

const Greeting = () => {
  // logic
  // const username = "???"; // 일반 JS - 값 지정
  // let username = ""; // 일반 JS - 변수 적용
  const [username, setUsername] = useState("");
  const handleClick =()=>{
    // 일반 JS - 변수를 사용하여 사용자 이름 변경(React에서는 적용 안됨!!!)
    // username = window.prompt("성함이 어떻게 되시나요?");

    // 수정할 값을 인자로 넣어서 state 업데이트
    setUsername(window.prompt("성함이 어떻게 되시나요?"));
  }

  // view
  return (
    <div style={{"backgroundColor":"pink","padding":"10px"}}>
      <p>안녕하세요, {username}님!</p>
      <p>오늘도 좋은 하루 보내세요~😄</p>
      <button type="button" onClick={handleClick}>입력</button>
    </div>
  )
}

export default Greeting