import { Link } from "react-router-dom";


const RouteTest = () => {
    return (
        <>
        <Link to={"/list"}>리스트</Link>
        <br />
        <Link to={"/login"}>로그인</Link>
        <br />
        <Link to={"/comment"}>댓글</Link>
        <br />
        <Link to={"/writing"}>글쓰기</Link>
        <br/>
        <Link to={"/join"}>회원가입</Link>
        </>
    )
    
}

export default RouteTest;