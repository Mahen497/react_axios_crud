import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import Form from "./Form";

const PostList = () => {
   const [data, setData] = useState([]);
   const [updateDataApi, setUpdateDataApi] = useState({});

   const getPostData = async () => {
      try {
         const response = await getPosts();
         // console.log(response.data);
         setData(response.data);
      } catch (error) {
         console.error("Error fetching posts:", error);
      }
   }

   const handleDeletePost = async (id) => {
      try {
         // console.log(id);
         const response = await deletePost(id);
         // console.log(response);
         if (response.status === 200) {
            const newUpdatePosts = data.filter((curPost) => {
               return curPost.id !== id;
            })
            setData(newUpdatePosts);
            console.log("Post Deleted Successfully");
         }
      } catch (error) {
         // console.log(error);
         console.error("Error deleting post:", error);

      }
   }

   const handleUpdatePost = (curElem) => {
      setUpdateDataApi(curElem);
   }

   useEffect(() => {
      getPostData();
   }, []);
   return (
      <>
         <section className="postlist">
            <div className="postlist_inner">
               <div className="postlist_add">
                  <Form
                     data={data}
                     setData={setData}
                     updateDataApi={updateDataApi}
                     setUpdateDataApi={setUpdateDataApi}
                  />
               </div>
               <h1>Post List</h1>
               <ul>
                  {
                     data.map((curElem) => {
                        const { id, body, title } = curElem;
                        return <li key={id}>
                           <p className="post_id">{id}</p>
                           <p className="title">Title : {title}</p>
                           <p className="body">Body : {body}</p>
                           <div className="actions">
                              <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                              <button
                                 onClick={() => handleDeletePost(id)}>
                                 Delete
                              </button>
                           </div>
                        </li>;
                     })
                  }
               </ul>
            </div>
         </section>
      </>
   );
}

export default PostList;