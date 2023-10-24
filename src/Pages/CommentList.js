import { useRef, useState } from "react";
import WritingEditor from "./WritingEditor";



const CommentList = ({
    onEdit,
    onRemove,
    id,
    content,
    }) => {

        const [isEdit,setIsEdit] = useState(false);
        const toggleIsEdit = () => setIsEdit(!isEdit);

        const [localContent,setLocalContent] = useState(content);
        const localContentInput = useRef();

        const handleComment = () => {
            if (window.confirm(`${id}번째 댓글을 수정하시겠습니까?`)) {
                onRemove(id);
               }

        };

        const handleQuickEdit = () => {
            setIsEdit(false);
            setLocalContent(content);
        };

        const handleEdit = ()=> {

            if (localContent.length < 5) {
                localContentInput.current.focus();
                return;
            }
            if (window.confirm(`${id}번째 를 댓글을 삭제하시겠습니까?`)) {

            onEdit(id,localContent);
            toggleIsEdit();
           }
        };
    return  (
       <div className="CommentList">
         <input className="inputItem"/> 
            <div className="content">
                {isEdit ? (
             <>
             <textarea
             ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
             />
             </>
             ) : (
                 <>{content}</>
                 )}
             </div> 

            {isEdit ? (
             <>
            <button className="buttonList" onClick={handleComment}>수정</button> 
            <button className="buttonList" onClick={handleQuickEdit}>삭제 </button>
            </>
            ) : (
           <>
            <button className="buttonList" onClick={handleEdit}>목록</button>
            <button className="buttonList" onClick={toggleIsEdit}>등록</button>
            </>
            )}
    </div>
   );
};

export default CommentList;