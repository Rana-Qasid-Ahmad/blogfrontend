// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './component/PostList';
import SinglePost from './component/SinglePost';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/blog/:postId" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
