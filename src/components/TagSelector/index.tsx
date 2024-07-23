import React, { useState } from "react";

const TagSelector = ({ tags, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    if (onTagSelect) {
      onTagSelect(tag);
    }
  };

  return (
    <div className="flex divide-x divide-gray-800 max-w-max rounded-lg my-2 border border-gray-800 overflow-hidden">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`bg-zinc-900 p-1 cursor-pointer ${
            selectedTag === tag
              ? "opacity-100 bg-gray-500"
              : "hover:opacity-100"
          }`}
          onClick={() => handleTagClick(tag)}
        >
          <span
            className={`${
              selectedTag === tag
                ? "opacity-100"
                : "opacity-25 hover:opacity-100"
            }`}
          >
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TagSelector;
