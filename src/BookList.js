import { Link } from "react-router-dom"


const BookList = ({ books }) => {
  // let BlogList = blogs.map((blog) => (<BlogList title={blog.title} image={blog.image} Id={blog.id} key={blog.id}/>))
 

  return (
<div className="book-list">
      {books.map( book => (
        <div className="book-preview" key={book .id} >

          {/* <Link to= { `/blogs/ $ {blog.body}` } >  */}
          <h2>{ book .title }</h2>
          {<img className="image-preview" src={ book .image } alt=""/>}
          <p>Description: { book .body }</p>
          <h5>Written by { book .author } </h5>
          <Link to ={"url"} >Order Book </Link>

          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}
 
// export default BlogList ({ image, author, body }) ;
export default BookList;


//          <p>{ blog.body }</p>
