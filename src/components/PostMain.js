// import '../css/PostMain.css';
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import List from "../Pages/List"


// function PostMain(){
    // 1. 일단 처음에는 아래 getBoardData 비동기 요청으로 데이터를 받아오기전에
    // 미리 빈 배열으로 초기화 시킨 list라는 상태를 하나 생성해둡니다!
    // const [list, setList] = useState([])
    
    // useEffect(()=>{
        // 2. 그 다음에 미리 정의 해둔 비동기 요청을 통해서
        // 데이터를 받아올겁니다.
        // 받아온 데이터를
    //   getBoardData()
  
    // },[])
  
    // const getBoardData=async()=>
    // {
      // 일단 더미데이터 자체는 DB연결해서 가져온건 아니고
      // 리액트 서버에서 data.json 파일에서 가져옵니당.
      // 아래 "http://localhost:3000/" 경로는
      // 폴더구조에서 public 하위의 파일을 바로 가져올 수 있습니당!
      // 그래서 아래 처럼 작성하면, public/data.json 파일을 fetch해오는 코드라고 보시면 되용!!
      // 이렇게 받아온 데이터(result)를 어떤 state(상태)에 넣어서
      // 목록으로 렌더링 하시면 됩니당
      // 일단 여기서 배열 형태로 데이터를 받아오시는 거는 이제 이해하셨을거라 생각하고!
    //   const result=await axios.get('http://localhost:3000/data.json')
    //   console.log(result.data)
    //   // 3. 여기 setList를 통해서 빈 배열을 받아온 데이터로 변경해서
    //   // 브라우저 업데이트를 시킵니다.
    //   setList(result.data.data)
    // }

    /**
     * 4. 데이터가 아래 객체를 배열형태로 가지고 있으니까
     * {
     *  content: "안녕디지몬"
     *  date: "20231026",
     *  id: 1,
     *  name: "홍길동",
     *  title: "안녕1"
     * }
     */
    // return(
    //     <div id='post-main'>
    //       <List />
      
//          {/* <ul> */}
//             {/* 5. list를 map 메서드를 이용해 파라미터로 넣은 콜백함수에서 반환한 값을
//             새로운 배열로 만들어서 렌더링해요! */}
//             {/* 여기서 post는 위 객체의 하나를 뜻합니다!
//             그래서 post.id, post.title, post.name, post.content로 해당 객체의 속성의 키값으로
//             접근해서 데이터를 넣어주는 겁니당! */}
//             {/* 나중에 좀 더 깔끔하게 하려면 <li> ... </li> 이 부분을 별도의 컴포넌트로 따로 뺄 수도 있으니
//             이것도 연습해보시면 좋아욥 ~ 끗!*/}
//             {/* {list.map((post) => ( */}
// {/* //                 <li key={post.id}>
// //                     <p style={{fontWeight: 'bold'}}>{post.title}</p>
// //                     <p>{post.name}</p>
// //                     <p>{post.content}</p>
// //                 </li>))}
// //          </ul>
//      </div>
// //     ) */}

// {/* // } */}
// </div>
//     )};

// export default PostMain;