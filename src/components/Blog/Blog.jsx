import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  // console.log(blog);

  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover Picture of the title ${title}`}
      />

      <div className="flex justify-between mb-4 ">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />

          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="ml-2 text-red-400 text-2xl"
          >
            <FaBookmark></FaBookmark>{" "}
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>

      <p>
        {hashtags.map((hashtag) => (
          <span className="mr-2">#{hashtag}</span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(reading_time,id)}
        className="text-purple-800 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

export default Blog;
