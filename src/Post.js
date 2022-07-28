import { useState } from "react";


const Post = () => {
    const [title, setTitle ]= useState ("") 
    const [body, setBody ]= useState ("") 
    const [author, setAuthor ]= useState ("") 

    return (
        <div className = "post-book">
            <h1> Post a New Book </h1>
            <form>
                <label> Book Title </label>
                <input
                 type="text" 
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 />
                 <label> Book Body  </label>
                 <textarea 
                 required
                 value={body}
          onChange={(e) => setBody(e.target.value)}
                 >
                 </textarea>
                 <label> Author  </label>
                <input
                 type="text" 
                 required
                 value={author}
          onChange={(e) => setAuthor(e.target.value)}
                 />
                 <button>Add Book </button>
            </form>
            </div>
     );
}
 
export default Post;