import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime , setReadingTime] = useState(0);

  const handleAddBookmark = (blog) => {
    // console.log("Bookmark Added", blog); 

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time,id) => {
    // console.log("Marked as Read", time); 

    const newReadingTime = readingTime + time; 
    setReadingTime(newReadingTime);

    // remove the blog from the blogs list 
    console.log('remove blog with id:', id);
    const remainingBlogs = bookmarks.filter(blog => blog.id !== id);

    setBookmarks(remainingBlogs);
  }


  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookmark={handleAddBookmark}
        />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
