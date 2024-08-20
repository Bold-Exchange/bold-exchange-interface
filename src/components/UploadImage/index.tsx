import React, { useState, useEffect } from "react";
import { Upload, UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload/interface";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

const UploadImage: React.FC<IProps> = ({ value, onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imgUrl, setImgUrl] = useState<string | undefined>(value);

  useEffect(() => {
    setImgUrl(value);
  }, [value]);

  const handleChange = ({ fileList }: UploadChangeParam<UploadFile>) => {
    // 只保留最新的一个文件
    const newFileList = fileList.slice(-1);

    if (newFileList.length === 0) {
      setImgUrl("");
      onChange && onChange("");
    } else {
      const uploadedFile = newFileList[0];
      const uploadedUrl = uploadedFile.response?.fileName;
      setImgUrl(uploadedUrl);
      onChange && onChange(uploadedUrl);
    }

    setFileList(newFileList);
  };

  return (
    <Upload
      action="/api/upload"
      listType="picture-card"
      fileList={fileList}
      onChange={handleChange}
      maxCount={1}
    >
      {!imgUrl && (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      )}
    </Upload>
  );
};

export default UploadImage;
