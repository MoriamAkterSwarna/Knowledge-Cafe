import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-gray-200 p-4 m-4">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default Bookmark;
