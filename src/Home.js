import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://safe-citadel-50910.herokuapp.com/blogs')

  return (
    <div className="home">
      <h1> Web Development Books Under One Roof </h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;