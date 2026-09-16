// import Greeting from "./components/Greeting";
import Card from "./components/Card";

function App() {
  // logic
  // 구조분해할당 - object destructuring
  // 배열
  const animals = ["dog", "cat", "pic"];
  // const second = animals[1];
  const [patato, second] = animals;
  console.log("🚀 ~ App ~ first:", patato);
  console.log("🚀 ~ App ~ second:", second);
  // 객체
  const todoItem = {
    todo: "React학습하기",
    isComplete: false
  }
  // const todo = todoItem.todo;
  // const isComplete = todoItem.isComplete;
  const { todo: todoName, isComplete } = todoItem;
  // console.log("🚀 ~ App ~ todo:", todo);
  console.log("🚀 ~ App ~ todoName:", todoName);
  console.log("🚀 ~ App ~ isComplete:", isComplete);

  // view
  return (
    <div className="App">
      {/* 변경~! */}

      {/*
      <Greeting />
      <Greeting />
      */}
      {/* 컴포넌트 안에 기능이 있는 것이기 때문에 각각 다른 값으로 설정됨! */}

      {/* 미션: Card 컴포넌트 만들고, 이 자리에 노출 */}
      <div style={{ "display": "flex", "gap": "1.5em" }}>
        <Card imgUrl={"https://t3.ftcdn.net/jpg/02/74/06/48/360_F_274064877_Tuq84kGOn5nhyIJeUFTUSvXaSeedAOTT.jpg"} itemName={"웰시코기"} />
        {/* 미션: 남은 카드들 데이터 넘겨서 아이템 이미지 잘 보이게 하기 */}
        <Card imgUrl={"https://t4.ftcdn.net/jpg/02/90/84/47/240_F_290844781_V4hoIL3E291xvY5nEL7NCaWIoCIQxHfI.jpg"} itemName={"골든 리트리버"} />
        <Card imgUrl={"https://t3.ftcdn.net/jpg/01/65/27/74/240_F_165277412_kqhTmjJ5JAobrGBaeBppkPPnF33coEjP.jpg"} itemName={"잭 러셀 테리어"} />
      </div>
    </div>
  );
}

export default App;
