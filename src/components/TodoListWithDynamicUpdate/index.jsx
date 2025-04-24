// import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import postsData from "./posts.json"
// const postsUrl = "https://jsonplaceholder.typicode.com/todos";

const TodoListWithDynamicUpdate = () => {
  const [posts] = useState(postsData);

  /*
  [{userId, id, title, completed}] =>   {userId: [{userId, id, title, completed},{userId, id, title, completed},{userId, id, title, completed}], userId:[{userId, id, title, completed},{userId, id, title, completed},{userId, id, title, completed}]}
  */

  const separatePostsByUser = posts.reduce((allPosts, currentPost)=> {
    if(allPosts[currentPost.userId]){
        allPosts[currentPost.userId].push(currentPost);
    }else{
        allPosts[currentPost.userId] = [currentPost];
    }
    
    console.log("allPosts", allPosts);
    console.log("currentPost", currentPost);
    return allPosts
},{})

  console.log("separatePostsByUser", separatePostsByUser);

//   const getPosts = async () => {
//     const response = await axios.get(postsUrl);
//     console.log("response.data", response.data.length);
//     setPosts(response.data);
//   };

//   useEffect(()=> {
//     getPosts();
//   },[])

  console.log("posts", posts);
  return <div>{posts.length ? posts.map((post)=> <Post key={post.id} postData={post}/>) : null}</div>;
};

export default TodoListWithDynamicUpdate;
