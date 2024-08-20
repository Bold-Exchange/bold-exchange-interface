import { useCallback, useEffect, useState } from "react";
import { history } from "umi";
import classNames from "classnames";
import Web3 from "web3";
import request from "@/utils/request";
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
  message,
  FormProps,
} from "antd";
import {
  CaretDownOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { setToken } from "@/utils/auth";
import { hooks, metaMask } from "@/connectors/metaMask";
import { getAddChainParameters } from "@/chains";
import { FUN_ABI } from "@/abis/fun.sol/Fun";
import { ethers } from "ethers";
import { CopyText, UploadImage } from "@/components";
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
        <img width={10} className="w-5 mr-2" src="icons/solana.webp" />
        Sol
      </span>
    </Select.Option>
  </Select>
);
const Top = (props: any) => {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        username: "a",
        password: "a",
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
      "0xcc8C1B722c5BB7b30252A8Ceb20d48f1C7AD4569",
      FUN_ABI,
      provider?.getSigner()
    );
    const gasLimit = ethers.utils.hexlify(100000000); // 设置 gas limit，例如 100000
    abd
      .createToken(values.tokenName, values.tokenSymbol, {
        gasLimit: ethers.utils.hexlify(100000),
        value: ethers.utils.parseEther("0.001"),
      })
      .then((res: any) => {
        abiDecoder.addABI(FUN_ABI);
        const decodedData = abiDecoder.decodeMethod(res.data);
      })
      .catch((res: any) => {
        debugger;
        messageApi.open({
          type: "error",
          content: res.code || "error",
        });
      });
    request.post("/api/token", {
      tokenName: values.tokenName,
      tokenSymbol: values.tokenSymbol,
    });
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
    <div className="container-fluid top_bar relative">
      {contextHolder}
      <div className="absolute w-[300px] inset-x-0 m-auto">
        <Input
          prefix={<SearchOutlined />}
          suffix={<span>⌘K</span>}
          className="w-full p-2"
          placeholder="Search token/contract/wallet"
        />
      </div>
      <div className="top_bar_wrapper flex items-center justify-between">
        <ul className="ml-5 text-gray-500 text-lg flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/meme")}
          >
            Launcher
          </li>
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/newpair")}
          >
            NewPair
          </li>
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/trending")}
          >
            Trending
          </li>
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/trader")}
          >
            Trader
          </li>
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
              {(walletAddress && (
                <CopyText
                  text={(accounts && accounts.length > 0 && accounts[0]) || ""}
                />
              )) ||
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
    </div>
  );
};
export default Top;
