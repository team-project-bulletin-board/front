import { useRef, useState } from "react";


const WritingEditor = ({onCreate})=>{
    const [state,setState] = useState({
        author: "",
        content: "",
     
    });

    const authorInput = useRef();   //다른 테그에 접근할 수 있는 레퍼런스(ref 이름은 authorInput) 객체 생성
    const contentInput = useRef();   //다른 테그에 접근할 수 있는 레퍼런스(ref 이름은 contentInput) 객체 생성
   

    const handleChangeState = (e)=>{
      
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
  };

  const handleSubmit = () => {
   if(state.author.length < 1){
    authorInput.current.focus();  //레퍼런스 객체인 authorInput(돔요소를) 선택하는 useRef /현재 가르키는 값을 current라는 프로퍼티로 불러와서 사용할 수 있음
    // authorInput.currentsms  authorInput테그가 되는 것에 fucus 사용
    return ;

   }
   if(state.content.length < 5){
    contentInput.current.focus();
    return ;
   }
   onCreate(state.author, state.content);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
    });
  };

    
    return (
      <div className="DiaryEditor">
        <h2>글쓰기</h2>
        <div>
          <p>제목</p>
           <input className="inputWrapper"
              ref={authorInput}
              name="author"
              value={state.author}
              onChange={handleChangeState}
            />
        </div>
        <div>
            <p>내용</p>
            <textarea 
              ref={contentInput}
              name="content"
              value={state.content}
              onChange={handleChangeState}
          />
        </div>
       
        <div>
            <button className="button" onClick={handleSubmit}>저장하기</button>
        </div>
    </div>
   
     
     );
};
export default WritingEditor;