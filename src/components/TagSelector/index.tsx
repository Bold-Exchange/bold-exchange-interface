import React, { useState } from "react";

const TagSelector = ({ tags, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);

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
          className={`bg-zinc-900 cursor-pointer ${
            selectedTag === tag
              ? "opacity-100 bg-[#fff200]"
              : "hover:opacity-100"
          }`}
          onClick={() => handleTagClick(tag)}
        >
          <div
            className={`${
              selectedTag === tag
                ? "opacity-100  bg-[#fff200] text-[#000]"
                : "opacity-25 hover:opacity-100"
            } p-1`}
          >
            {tag}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagSelector;
