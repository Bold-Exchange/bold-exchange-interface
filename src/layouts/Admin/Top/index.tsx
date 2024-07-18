import { useEffect, useState } from "react";
import classNames from "classnames";
import "./styles.less";
import {
  Input,
  Modal,
  Button,
  Space,
  Dropdown,
  Form,
  Checkbox,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Upload,
  Switch,
  ColorPicker,
  Slider,
} from "antd";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const Top = (props: any) => {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container-fluid top_bar">
      <div className="top_bar_wrapper d-flex align-items-center justify-content-between">
        <div className="search_bar d-flex align-items-center flex justify-center flex-auto gap-10">
          <ul className="ml-5 text-gray-500 text-lg flex items-center gap-4 cursor-pointer">
            <li className="text-white">Meme</li>
            <li className="hover:text-white hover:underline">New</li>
            <li className="hover:text-white hover:underline">Pair</li>
            <li className="hover:text-white hover:underline">Trending</li>
            <li className="hover:text-white hover:underline">Discover</li>
            <li className="hover:text-white hover:underline">Holding</li>
          </ul>
          <Input
            className="w-1/4 p-2"
            placeholder="Search token/contract/wallet"
          />
        </div>
        <div className="user_bar d-flex align-items-center justify-content-end">
          <div className="search_wrapper">
            <a href="javascript:void(0)" className="search_sm d-none">
              <i className="flaticon-loupe d-flex align-items-center"></i>
            </a>
          </div>
          <Space size="large">
            <Button type="primary" onClick={showModal}>
              Create Token
            </Button>
            <Button type="default" onClick={showModal}>
              Connect
            </Button>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <div className="flex items-center gap-1">
                <img
                  width={40}
                  src="assets/images/user/profile-sm.png"
                  alt="Profile Picture"
                />
                <span>Doctor</span>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </Space>
        </div>
      </div>
      <Modal
        title="Create Token"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [{ title: "Bamboo", value: "bamboo" }],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="RangePicker">
            <RangePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
          <Form.Item label="Slider">
            <Slider />
          </Form.Item>
          <Form.Item label="ColorPicker">
            <ColorPicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Top;
