import React from "react";
import '../styles/style.css'
function Comments (){
    return (
        <div className="content-comment">
            <img className="content-img" src={require("../img/testimonio-emma.png")}/>
            <div className="content-text">
                <p className="comment-name">Enmma Smith</p>
                <p className="comment-cargo">Ing. En Software</p>
                <p className="comment-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>

    ); 
}

export default Comments;