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
    <div className='List'>

      {/* <h2>게시물 목록</h2>
      <div>
        {list.map((it) => (
      <div>
        <div>작성자 : {it.author}</div>
        <div>내용 : {it.content}</div>
      
      </div> */}
  {/* ))}
  </div>
  </div>
  );
        };
      
   */}
   <ul> 
            {/* 5. list를 map 메서드를 이용해 파라미터로 넣은 콜백함수에서 반환한 값을
            새로운 배열로 만들어서 렌더링해요! */}
            {/* 여기서 post는 위 객체의 하나를 뜻합니다!
            그래서 post.id, post.title, post.name, post.content로 해당 객체의 속성의 키값으로
            접근해서 데이터를 넣어주는 겁니당! */}
            {/* 나중에 좀 더 깔끔하게 하려면 <li> ... </li> 이 부분을 별도의 컴포넌트로 따로 뺄 수도 있으니
            이것도 연습해보시면 좋아욥 ~ 끗!*/}
             {list.map((post) => ( 
                 <li key={post.id}>
                 <p style={{fontWeight: 'bold'}}>{post.title}</p>
                 <p>{post.name}</p>
                     <p>{post.content}</p>
                 </li>))}
          </ul>
     </div>
    ) }





export default List;