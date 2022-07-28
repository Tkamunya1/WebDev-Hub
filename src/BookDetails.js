import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://safe-citadel-50910.herokuapp.com/blogs' + id );

  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <book>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </book>
      )}
    </div>
  );
}
 
export default BookDetails;




//https://safe-citadel-50910.herokuapp.com/blogs
