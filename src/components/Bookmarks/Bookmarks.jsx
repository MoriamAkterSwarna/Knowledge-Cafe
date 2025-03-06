import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime} </h3>
      </div>
      <h2 className="text-3xl text-center mt-2 ">
        Bookmarks:{bookmarks.length}{" "}
      </h2>

      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
