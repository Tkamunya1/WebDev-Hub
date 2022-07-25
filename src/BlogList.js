const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <h3>Thumbnail { blog.thumbnail }</h3>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;