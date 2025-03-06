import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-300">
      <h3 className="text-3xl text-center mt-2 ">
        Bookmarks:{bookmarks.length}{" "}
      </h3>

      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
