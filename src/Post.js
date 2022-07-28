const Post = () => {
    return (
        <div className = "post-book">
            <h1> Post a New Book </h1>
            <form>
                <label> Book Title </label>
                <input
                 type="text" 
                 required
                 />
                 <label> Book Body  </label>
                 <textarea 
                 required
                 >
                 </textarea>
                 <label> Author  </label>
                <input
                 type="text" 
                 required
                 />
                 <button>Add Book </button>
            </form>
            </div>
     );
}
 
export default Post;