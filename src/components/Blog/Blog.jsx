const Blog = ({ blog }) => {
  // console.log(blog);

  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div>
      <img src={cover} alt={`Cover Picture of the title ${title}`} />

      <div className="flex justify-between ">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />

          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>

      <p>
        {hashtags.map((hashtag) => (
          <span className="mr-2">#{hashtag}</span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
