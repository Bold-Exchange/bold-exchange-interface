import { useEffect, useState } from "react";
import { history } from "umi";
import classNames from "classnames";
import Web3 from "web3";
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
import {
  CaretDownOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
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
        login out
      </a>
    ),
  },
];

const Top = (props: any) => {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet: ", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };
  return (
    <div className="container-fluid top_bar relative">
      <div className="absolute w-[300px] inset-x-0 m-auto">
        <Input
          prefix={<SearchOutlined />}
          suffix={<span>⌘K</span>}
          className="w-full p-2"
          placeholder="Search token/contract/wallet"
        />
      </div>
      <div className="top_bar_wrapper d-flex align-items-center justify-content-between">
        <ul className="ml-5 text-gray-500 text-lg flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/meme")}
          >
            Meme
          </li>
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/newpair")}
          >
            NewPair
          </li>
          <li className="hover:text-white hover:underline">Trending</li>
          <li className="hover:text-white hover:underline">Trade</li>
          <li className="hover:text-white hover:underline">Follow</li>
        </ul>

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
            <Button
              type="default"
              onClick={() => !walletAddress && connectWallet()}
            >
              {(walletAddress &&
                `${walletAddress.slice(0, 3)}...${walletAddress.slice(-4)}`) ||
                "Connect"}
            </Button>
            <span onClick={() => setIsLoginModalOpen(true)}>Log in</span>
            {/* <Dropdown menu={{ items }} placement="bottomLeft">
              <div className="flex items-center gap-1">
                <img
                  width={40}
                  src="assets/images/user/profile-sm.png"
                  alt="Profile Picture"
                />
                <span>Doctor</span>
                <CaretDownOutlined />
              </div>
            </Dropdown> */}
          </Space>
        </div>
      </div>
      <Modal
        title="Create Token"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // footer={null}
      >
        <Form layout="vertical">
          {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="Token Symbol" required>
            <Input />
          </Form.Item>
          <Form.Item label="Token Name" required>
            <Input />
          </Form.Item>

          <div className="flex gap-4">
            <Form.Item
              label="Icon"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              required
            >
              <Upload
                className="w-full"
                action="/upload.do"
                listType="picture-card"
              >
                <button
                  style={{ border: 0, background: "none", width: "300px" }}
                  type="button"
                >
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
            <Form.Item className="flex-1" label="Description">
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>

          <Form.Item label="Website">
            <Input />
          </Form.Item>
          <Form.Item label="X(Twitter)">
            <Input />
          </Form.Item>
          <Form.Item label="Telegram">
            <Input />
          </Form.Item>
          <Form.Item
            label={
              <div>
                <p>Initial Buy</p>
                <p className=" text-xs text-gray-500">
                  Optional: be the very first person to buy your token!
                </p>
              </div>
            }
          >
            <Select defaultValue={"1"}>
              <Select.Option value="1">
                <span className="flex items-center">
                  <img
                    width={10}
                    className="w-5 mr-2"
                    src="icons/solana.webp"
                  />
                  Sol
                </span>
              </Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Login"
        open={isLoginModalOpen}
        onOk={handleOk}
        onCancel={handleLoginCancel}
      >
        <Form layout="vertical">
          {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="Email" required>
            <Input />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Top;
