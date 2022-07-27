import { Link } from "react-router-dom"

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Description: { blog.body } </p>
          <h3>Written by { blog.author }</h3>
          <h4> Link {blog.image} </h4>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;