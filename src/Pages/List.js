 import React, { useState, useEffect } from 'react';
 import axios from 'axios'


// const List = ({ list }) => {
//   console.log(list);
function List(){

  const [list, setList] = useState([]);

   useEffect(() => {
     getBoardData()
  
 },[])

 const getBoardData=async()=> {
    // 더미 데이터를 가져오는 fetch 호출
     const result=await axios.get('http://localhost:3000/data.json')
     console.log(result.data)
  //     .then(response => response.json())
  //      .then(data => setPosts(data.slice(0, 5))) // 필요한 만큼 데이터를 가져옵니다.
  //      .catch(error => console.error('Error fetching data: ', error));
    // }, []);
 
  setList(result.data.data);
 }

  return (
    <div className='pageList'>

       <h2>게시물 목록</h2>
       <h4>{list.length}개의 글이 있습니다.</h4>
      <div>
        {list.map((it) => (
          <div className='listWrap' key={it.id}>
        <div>이름 : {it.name}</div>
        <div>제목 : {it.title}</div>
        <div>내용 : {it.content}</div>
        <div>날짜 : {it.date}</div>
        </div>
        /* 여기서 post는 위 객체의 하나를 뜻합니다!
  //           그래서 post.id, post.title, post.name, post.content로 해당 객체의 속성의 키값으로
  //           접근해서 데이터를 넣어주는 것이다! */
      
      
    ))}
  </div>
  </div>
  );
        };
      
  
  //   <ul> 
  //           {/* 5. list를 map 메서드를 이용해 파라미터로 넣은 콜백함수에서 반환한 값을
  //           새로운 배열로 만들어서 렌더링 하는 것 */}
  //           {/* 여기서 post는 위 객체의 하나를 뜻함!
  //           그래서 post.id, post.title, post.name, post.content로 해당 객체의 속성의 키값으로
  //           접근해서 데이터를 넣어주는 것 */}
  //           {/* 나중에 좀 더 깔끔하게 하려면 <li> ... </li> 이 부분을 별도의 컴포넌트로 따로 뺄 수도 있다*/}
  //            {/* {list.map((post) => ( 
  //                <li key={post.id}>
  //                <p style={{fontWeight: 'bold'}}>{post.title}</p>
  //                <p>{post.name}</p>
  //                    <p>{post.content}</p>
  //                </li>))}
  //         </ul> */}




export default List;