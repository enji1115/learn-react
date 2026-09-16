import Greeting from "./components/Greeting";
// import Card from "./components/Card";

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
      변경~!

      <Greeting />
      {/* <Greeting /> */}

      {/* 미션: Card 컴포넌트 만들고, 이 자리에 노출 */}
      {/*
      <Card />
      <Card />
      <Card />
      <Card />
      */}
    </div>
  );
}

export default App;
