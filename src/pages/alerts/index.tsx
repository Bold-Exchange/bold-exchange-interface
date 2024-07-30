import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider } from "antd";
const Item = () => {
  return (
    <div className="bg-gray-800 rounded-sm p-2">
      <div>
        deadbiden<span className="text-gary-400">/SOL</span> deadbiden
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div>
          {" "}
          <div className="text-green-500">🔔&nbsp;ACTIVE</div>
          <div>
            Alert me when Price{" "}
            <span className="text-green-500">goes over $0.0001347</span>
          </div>
          <div className="text-slate-400">Created 29 minutes ago</div>
        </div>
        <div className="flex gap-4">
          <EditOutlined />
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <>
      <h1 className="text-lg">My Alert</h1>
      <div className="grid grid-cols-4 gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};
export default Page;
