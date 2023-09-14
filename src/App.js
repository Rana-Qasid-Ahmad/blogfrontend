// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './component/PostList';
import SinglePost from './component/SinglePost';
import Navbar from './component/Navbar';
import HomePage from './component/Pages/HomePage';
import About from './component/Pages/About'
import Contact from './component/Pages/Contact'
import Portfolio from './component/Pages/Portfolio'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/blogs" exact element={<PostList />} />
          <Route path="/blog/:postId" exact element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
