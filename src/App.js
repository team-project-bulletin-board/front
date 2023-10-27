 import { useRef, useState, useEffect } from "react";
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import RouteTest from './components/RouteTest';
 import Login from "./Pages/Login";
 import List from './Pages/List';
 import Comment from "./Pages/Comment";
 import Writing from "./Pages/Writing";
 import Join from './Pages/Join';
 



 function App() {

  const [data,setData] = useState([]);

  const dateId = useRef(0);


  //api 호출하기
  const getData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>res.json());
   
    const initData = res.slice(0,20).map((it)=>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : DOMMatrixReadOnly.current++ //++은 +1을 말함
      }

    });

    setData(initData);
  };

  useEffect(()=>{
    getData();
  },[])


  const onCreate = (author,content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dateId.current,

    };
    dateId.current += 1;
    setData([newItem, ...data]);

  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId,newContent)=>{
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent}: it
      )
    );
  };

  // const getDiaryAnalysis = useMemo(  //어떤 함수가 있고
    // ()=>{


// const goodCount = data.filter((it)=>it.emotion >= 3).length;
// const badCount = data.length - goodCount;
// const goodRatio = (goodCount / data.length) * 100;
// return {goodCount,badCount,goodRatio};  //그 함수가 어떤 값을 리턴하고 있는데 그 리턴까지의 연산을 최적화하고 싶을 때 useMemo를 사용해서 [] 안에 어떤 겂이 변화할 때만 연산을 수행할 것인지를 명시하게 되면
  // } ,[data.length]);

// const {goodCount,badCount,goodRatio} = getDiaryAnalysis; //이 함수를 값처럼 사용해서 연산최적화를 할 수 있다.
  return (
         <div className="App">
      
       <BrowserRouter>
       <Routes>
         <Route path="/list" element={<List />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/comment" element={<Comment />}/>
         <Route path="/writing" element={<Writing />}/>
         <Route path="/join" element={<Join />}/>
       </Routes>
         <RouteTest />
       </BrowserRouter>
       
      </div>
       

   
  );
};

     
  


export default App;
