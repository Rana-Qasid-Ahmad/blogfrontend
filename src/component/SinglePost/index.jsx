// SinglePost.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css'
import ReacMarkDown from 'react-markdown'

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiURL = `https://strapi-ftb9.onrender.com`

  useEffect(() => {
    async function fetchPostData() {
      try {
        const response = await axios.get(`${apiURL}/api/blogs/${postId}?populate=*`);
        setPost(response.data.data);
        setLoading(false);
        // Assuming the response contains the entire post object
      } catch (error) {
        console.error('Error fetching post data:', error);
        setPost(null);
        setLoading(false);
      }
    }

    fetchPostData();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mainDiv">
    <div className="mainDivOne">
      <script>
        
      </script>
     
            
            <div className="postImg">
            <img src={`${post.attributes.CoverImg.data.attributes.url}`} alt="Sample Image"/>
            </div>

            <div className='Content'>
            <p className="postTitle">{post.attributes.Title}</p>
            <div className="postContentDiv">
            <ReacMarkDown className="postContent">
            {post.attributes.Content}
            </ReacMarkDown >
            </div>
            </div>

      {/* <h2>{post.attributes.Title}</h2>
      <img src={`${apiURL}${post.attributes.CoverImg.data.attributes.url}`} alt="" />
      <p>{post.attributes.Content}</p> */}
    </div>
    </div>
  );
}

export default SinglePost;
