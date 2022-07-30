import { Link } from "react-router-dom"


const BlogList = ({ blogs }) => {
  // let BlogList = blogs.map((blog) => (<BlogList title={blog.title} image={blog.image} Id={blog.id} key={blog.id}/>))
 

  return (
<div className="blog-list">
      {blogs.map(blog => (
        <div className="book-preview" key={blog.id} >

          {/* <Link to= { `/blogs/ $ {blog.body}` } >  */}
          <h2>{ blog.title }</h2>
          {<img className="image-preview" src={ blog.image }/>}
          <p>Description: { blog.body }</p>
          <p>Written by { blog.author }</p>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}
 
// export default BlogList ({ image, author, body }) ;
export default BlogList;


//          <p>{ blog.body }</p>
