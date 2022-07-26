import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('https://safe-citadel-50910.herokuapp.com/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      <h1> Web Development Books Under One Roof </h1>
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;