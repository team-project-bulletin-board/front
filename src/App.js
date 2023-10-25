import Login from "./Pages/Login";
import './index.css';
import './App.css';
// import React, { useEffect, useMemo, useRef,useState } from 'react';
// import DiaryEditor from './DiaryEditor';
// import DiaryList from './DiaryList';
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import PostMain from "./components/PostMain";
 import PostWrite from "./components/PostWrite";
 import PostView from "./components/PostLogin";
 import { useRef, useState } from "react";
 import axios from "axios";
import WritingEditor from "./Pages/WritingEditor";
import PostComment from "./components/PostComment";
import PostLogin from "./components/PostLogin";
import PostJoin from "./components/PostJoin";





function App() {
  const [data, setData] = useState([]);

  const dateId = useRef(0)

  const onCreate = (author,content) =>{
    const newItem = {
      author,
      content,
      id : dateId.current
      
    }
    dateId.current += 1;
    setData([newItem, ...data])
  }

  // const getData = async()=>{
  //   const res = await fetch('https://www.objgen.com/json/local/QwFuXqAHy')
  //   .then((res)=>res.json());

  return (
    <div className="App">
      
       {/* <Login /> */}
       {/* <WritingEditor /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostMain/>}/>
        <Route path="/write" element={<PostWrite/>}/>
        <Route path="/login" element={<PostLogin />}/>
        <Route path="/commentList" element={<PostComment />}/>
        <Route path="/join" element={<PostJoin />}/>
      </Routes>
      </BrowserRouter>
      

    </div>
)};
  


export default App;
