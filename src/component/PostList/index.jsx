import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

function PostList() {
  const [data, setData] = useState([]);
  const apiURL = 'https://strapi-ftb9.onrender.com';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiURL}/api/blogs?populate=*`);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Function to render a single blog post item
  function renderBlogPost(item) {
    return (
      <div className="postListInnerDiv" key={item.id}>
        <Link to={`/blog/${item.id}`}>
          <img src={`${item.attributes.CoverImg.data.attributes.url}`} alt={item.attributes.Title} />
          {item.attributes.Title}
        </Link>
      </div>
    );
  }

  // Group blog posts into rows of 3
  function renderBlogPostRows() {
    const rows = [];
    for (let i = 0; i < data.length; i += 3) {
      const rowItems = data.slice(i, i + 3);
      console.log(rowItems)
      const row = (
        <div className="postListRow" key={`row-${i}`}>
          {rowItems.map((item) => renderBlogPost(item))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  }

  return (
    <div className="postListMainDiv">
      <h2>Blog Posts</h2>
      {renderBlogPostRows()}
    </div>
  );
}

export default PostList;
