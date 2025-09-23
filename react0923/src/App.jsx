import { useState,memo } from "react";


function Parent() {  //useState 단점
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>카운트: {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <Child />
    </div>
  );
}

// function Child() {
//   console.log('Child 렌더링!');
//   return <div>자식 컴포넌트</div>;
// }

const Child=memo(()=>{
  console.log('Child 랜더링!');
  return <div>자식 컴포넌트</div>
});

function App() {
  const [state, setState] = useState({
    name:"",
    birth:""
  });

  const handleOnChange = (e) =>{
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <Parent/>
      <input type="text" onChange={handleOnChange} name="name"/>
      <input type="date" onChange={handleOnChange} name ="birth"/>
    </div>
    )
}

export default App
