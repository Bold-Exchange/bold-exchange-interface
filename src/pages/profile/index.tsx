import React from "react";
import { InfoItem, CopyText } from "@/components";
import { Tabs } from "antd";
import Tl from '../index/Tl'
const Profile = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Stream",
    },
    {
      key: "2",
      label: "Portfolio",
    },
  ];
  return (
    <div className="p-2 max-w-[1000px] m-auto">
      <div className="flex flex-row gap-2 ">
        <img src="/images/header.svg" />
        <div className='flex flex-col gap-1'>
          <div>NO ID</div>
          <div>
            <CopyText
              text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"}
              startLength={10}
            />
          </div>
          <div>Add a bio to introduce yourself</div>
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    <div>
      <div className="flex">
        <img src="/icons/bsc.svg"/>
        <div>
          <p>BNB Chain</p>
          <p><span className="">$38,791</span><span>99%</span></p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Profile;
