import React, { useState } from "react";
import axios from "axios";
import { Backend_URL } from "../utils";
import '../css/Join.css';


export const Join = () => {

     const [username,setUsername] = useState("")     
     const [email,setEmail] = useState("")     
     const [password,setPassword] = useState("")     
    return (
        <div>
            <form 
            onSubmit={async (e)=>{
                e.preventDefault();
                const data = await axios({
                    url: `${Backend_URL}.user/join`,
            methode: "Post",
            data: {
                username,
                 email,
                password,
            }
        })
        console.log(data);

            }}>
           
            <div className="pageForm">
            <div className="signForm">회원가입</div>
            <div className="info">이름</div>
            <input 
            type="email"
            className="inputForm"
            placeholder="username"
            value={username}
            onChange={(e)=>
            setUsername(e.target.value)}
            />
             <div className="info" placeholder="Email">아이디</div>
            <input
            type="email"
            className="inputForm"
            placeholder="emali@example.com"
            value={email}
            onChange={(e)=>
            setEmail(e.target.value)}
            /> 
            <div className="info">비밀번호</div>
            <input 
            type="email"
            className="inputForm"
            placeholder="8글자 이상 입력해주세요"
            value={password}
            onChange={(e)=>
            setPassword(e.target.value)}
            
            />
            <br />
            <button className="signUp">가입하기</button>
        </div>
        </form>
        </div>
      
    )
}

export default Join;