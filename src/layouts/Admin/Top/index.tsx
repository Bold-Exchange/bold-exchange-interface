import { useCallback, useEffect, useState } from "react";
import { history } from "umi";
import classNames from "classnames";
import Web3 from "web3";
import request from "@/utils/request";
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
  message,
  FormProps,
} from "antd";
import {
  CaretDownOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { setToken } from "@/utils/auth";
import { hooks, metaMask } from "@/connectors/metaMask";
import { getAddChainParameters } from "@/chains";
import { FUN_ABI } from "@/abis/fun.sol/Fun";
import { ethers } from "ethers";
import { CopyText, UploadImage, Icon } from "@/components";
import { devUseWarning } from "antd/es/_util/warning";
import styles from "./styles.less";
import Tl from '@/pages/index/Tl';
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
const { Option } = Select;
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
type FieldType = {
  tokenName?: string;
  tokenSymbol?: string;
};
const selectBefore = (
  <Select style={{ width: "100px" }} defaultValue={"1"}>
    <Select.Option value="1">
      <span className="flex items-center">
        <img width={10} className="w-5 mr-2" src="icons/ether.webp" />
        Eth
      </span>
    </Select.Option>
  </Select>
);
const Top = (props: any) => {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleChain, setVisibleChain] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const [desiredChainId, setDesiredChainId] = useState<number>(11155111);
  const provider = useProvider();
  const accounts: string[] | undefined = useAccounts();
  const abiDecoder = require("abi-decoder"); // NodeJS
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    // debugger;
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const response: any = await request.post("/api/login", {
        username: "doctor",
        password: "wz123456",
      });
      if (response.code === 200) {
        setToken(response.data.token);
      }
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
      handleLoginCancel();
    } catch (error) {
      debugger;
    }
  };

  const handleCreateToken: FormProps<FieldType>["onFinish"] = async (
    values
  ) => {
    const s = form.getFieldValue("logo");
    console.log("Success:", values);
    const abd = new ethers.Contract(
      "0x1267F5dF76c308ea17AD7E5C8Df7A386d4E233fc",
      FUN_ABI,
      provider?.getSigner()
    );
    debugger;
    const gasLimit = ethers.utils.hexlify(100000); // 设置 gas limit，例如 100000
    abd
      .createToken(values.tokenName, values.tokenSymbol, {
        // gasLimit: ethers.utils.hexlify(2000000),
        value: ethers.utils.parseEther("0.001"),
      })
      .then((res: any) => {
        debugger;
        abiDecoder.addABI(FUN_ABI);
        const decodedData = abiDecoder.decodeMethod(res.data);
      })
      .catch((res: any) => {
        messageApi.open({
          type: "error",
          content: res.code || "error",
        });
      });
    // request.post("/api/token", {
    //   tokenname: values.tokenName,
    //   tokensymbol: values.tokenSymbol,
    //   initialbuy: 0,
    // });
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    switchChain(desiredChainId);
    // if (window.ethereum) {
    //   try {
    //     const web3 = new Web3(window.ethereum);
    //     await window.ethereum.request({ method: "eth_requestAccounts" });
    //     const accounts = await web3.eth.getAccounts();
    //     setWalletAddress(accounts[0]);
    //   } catch (error) {
    //     console.error("Error connecting to wallet: ", error);
    //   }
    // } else {
    //   alert("Please install MetaMask!");
    // }
  };
  const switchChain = useCallback(async (desiredChainId: number) => {
    setDesiredChainId(desiredChainId);
    try {
      // if (
      //   // If we're already connected to the desired chain, return
      //   desiredChainId === activeChainId ||
      //   // If they want to connect to the default chain and we're already connected, return
      //   (desiredChainId === -1 && activeChainId !== undefined)
      // ) {
      //   setError(undefined)
      //   return
      // }

      await metaMask.activate(getAddChainParameters(desiredChainId));
      // localStorage.setItem('chainId',desiredChainId+"");
      // setError(undefined)
    } catch (error) {
      // setError(error)
    }
  }, []);
  useEffect(() => {
    switchChain(desiredChainId);
  }, []);
  return (
    <div className="flex items-center justify-between w-full bg-[#101014]">
      {contextHolder}
      <div>
        <a
          onClick={() => history.push("/")}
          className="flex justify-center items-center"
        >
          <img
            style={{ height: "40px" }}
            src="/logo.png"
            alt="Bold Exchange Logo"
          />
        </a>
      </div>

      <div className="flex items-center justify-between flex-auto">
        <ul className="ml-5 text-gray-500 text-lg flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/markets")}
          >
            Markets
          </li>
        
          {/* <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/trending")}
          >
            Trending
          </li> */}
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/trade")}
          >
            Trade
          </li>
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/discover")}
          >
            Discover
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {/* <Button type="primary" onClick={showModal}>
              Create Token
            </Button> */}

          <Button
            type="default"
            onClick={() => !walletAddress && connectWallet()}
          >
            {(accounts && accounts.length > 0 && accounts[0] && (
              <CopyText text={accounts[0]} />
            )) ||
              "Connect"}
          </Button>
          <div
            onClick={() => history.push("/profile")}
            className="flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700"
            style={{ width: "28px", height: "28px" }}
          >
            <UserOutlined />
          </div>

          {/* <span onClick={() => setIsLoginModalOpen(true)}>Log in</span> */}
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
        </div>
      </div>
      <div className="absolute w-[300px] inset-x-0 m-auto">
        <Input
          prefix={<SearchOutlined />}
          suffix={<span>⌘K</span>}
          className="w-full p-2"
          placeholder="Search token/contract/wallet"
          onClick={() => setVisibleChain(true)}
        />
      </div>
      <Modal
        title="Create Token"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={handleCreateToken}>
          <Form.Item<FieldType>
            name="tokenSymbol"
            label="Token Symbol"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="tokenName"
            label="Token Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <div className="flex gap-4">
            <Form.Item name="icon" label="Logo">
              <UploadImage />
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
            <Input addonBefore={selectBefore} defaultValue="0" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={handleCancel}>
                Cancle
              </Button>
            </Space>
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
      <Modal
        open={visibleChain}
        onCancel={() => setVisibleChain(false)}
        footer={null}
        className={styles.chains}
      >
        <div className={styles.con}>
          <div className="m-auto max-w-[400px] py-2">
            <Input
              prefix={<SearchOutlined />}
              suffix={<span>⌘K</span>}
              className="w-full p-2"
              placeholder="Search token/contract/wallet"
            />
          </div>
          <div className="flex max-w-[1000px] m-auto">
            <div className="min-w-[150px]">
              <div className="text-xl text-center mb-4">Chains</div>
              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center justify-center border rounded-full p-1 border-gray-500 gap-1">
                  <img className="w-[24px]" src="/icons/bsc.svg" />
                  BNB chain (18460)
                </div>
                <div className="flex items-center justify-center border rounded-full p-1 border-gray-500 gap-1">
                  <img className="w-[24px]" src="/icons/bsc.svg" />
                  BNB chain (18460)
                </div>
                <div className="flex items-center justify-center border rounded-full p-1 border-gray-500 gap-1">
                  <img className="w-[24px]" src="/icons/bsc.svg" />
                  BNB chain (18460)
                </div>
              </div>
            </div>
            <div className="flex-auto overflow-auto h-[800px] px-4">
              <Tl />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Top;
