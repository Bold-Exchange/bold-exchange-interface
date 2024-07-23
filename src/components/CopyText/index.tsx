import { CheckOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import React, { useState } from "react";

// Utility function to handle text copy
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

// Custom CopyText component
const CopyText = ({ text, extension = "", startLength = 5, endLength = 3 }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const displayText = `${text.slice(0, startLength)}...${text.slice(
    -endLength
  )}`;

  return (
    <div className="flex items-center space-x-1">
      <span>
        {displayText}
        {extension}
      </span>

      {copied ? (
        <CheckOutlined className="text-green-300" />
      ) : (
        <CopyOutlined onClick={handleCopy} />
      )}
    </div>
  );
};
export default CopyText;
