import { useRef, useState } from "react";
import '../css/Comment.css';




const Comment = ({
    onEdit,
    onRemove,
    onChange,
    author,
    id,
    content,
    created_date,
    }) => {

        const [isEdit,setIsEdit] = useState(false);
        const toggleIsEdit = () => setIsEdit(!isEdit);

        const [localContent,setLocalContent] = useState(content);
        const localContentInput = useRef();

        const handleComment = () => {
            if (window.confirm(`${id}번째 댓글을 수정하시겠습니까?`)) {
                onChange(id);
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
            if (window.confirm(`${id}번째 댓글을 삭제하시겠습니까?`)) {

            onRemove(id,localContent);
            toggleIsEdit();
           }
        };
    return  (
       <div className="pageMenu">
            <div className="content">
                {/* <span className="date">{new Date(created_date).toLocaleString()}</span> */}
                </div>
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
            {/* <button className="buttonList" onClick={handleEdit}>목록</button> */}
            <button className="buttonList" onClick={toggleIsEdit}>등록</button>
            </>
            )}
    </div>
   );
};

export default Comment;