import React from "react";
import { InfoItem, CopyText } from "@/components";
const Profile = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-2">
        <img src="/images/header.svg" />
        <div>
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
    </div>
  );
};
export default Profile;
