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
import { CopyText, UploadImage, Icon, TagSelector } from "@/components";
import { devUseWarning } from "antd/es/_util/warning";
import styles from "./styles.less";
import Tl from "./Tl";
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
        <ul className="m-0 ml-5 text-gray-500 text-lg flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-white hover:underline"
            onClick={() => history.push("/markets")}
          >
            Launchpad
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
            onClick={() => history.push("/portfolio")}
            className="flex items-center justify-center rounded cursor-pointer hover:bg-gray-700"
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
          <div className="m-auto max-w-[1024px] py-2">
            <Input
              prefix={<SearchOutlined />}
              className="w-full p-2 m-0 text-sm"
              placeholder="Search token/contract/wallet"
            />
          </div>
          <div className="w-[1024px] m-auto">
            <div className="flex items-center bg-[#1f1f1f] rounded-l p-1">
              <span className="mr-4">History</span>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 bg-zinc-900 p-1">
                  <img
                    className="w-[15px]"
                    src="https://cdn.dexscreener.com/cms/images/Q5rKmhs4FGIgTnJ8?width=56&height=56&fit=crop&quality=95&format=auto"
                  />
                  BOGUS
                </div>{" "}
                <div className="flex items-center gap-1 bg-zinc-900 p-1">
                  <img
                    className="w-[15px] rounded-full"
                    src="https://cdn.dexscreener.com/cms/images/Q5rKmhs4FGIgTnJ8?width=56&height=56&fit=crop&quality=95&format=auto"
                  />
                  BOGUS
                </div>{" "}
                <div className="flex items-center gap-1 bg-zinc-900 p-1">
                  <img
                    className="w-[15px]"
                    src="https://cdn.dexscreener.com/cms/images/Q5rKmhs4FGIgTnJ8?width=56&height=56&fit=crop&quality=95&format=auto"
                  />
                  BOGUS
                </div>{" "}
                <div className="flex items-center gap-1 bg-zinc-900 p-1">
                  <img
                    className="w-[15px]"
                    src="https://cdn.dexscreener.com/cms/images/Q5rKmhs4FGIgTnJ8?width=56&height=56&fit=crop&quality=95&format=auto"
                  />
                  BOGUS
                </div>{" "}
                <div className="flex items-center gap-1 bg-zinc-900 p-1">
                  <img
                    className="w-[15px]"
                    src="https://cdn.dexscreener.com/cms/images/Q5rKmhs4FGIgTnJ8?width=56&height=56&fit=crop&quality=95&format=auto"
                  />
                  BOGUS
                </div>
              </div>
            </div>
            <div className="my-2 flex items-center gap-3">
              <div className="font-bold flex items-center gap-1">
                <Icon.Moon />
                Moonshot
              </div>
              <TagSelector
                tags={["Finalized", "Trending", "Top", "Rising", "New"]}
                onTagSelect={(v) => {}}
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px] rounded-full"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px] rounded-full"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[40px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Uranus</p>
                  <p className="p-0 text-[10px] text-gray-500">$2.0M 18d</p>
                </div>
              </div>
            </div>
            <img className="mt-4" src="images/demo.png" />
            <div></div>
            <div className="mt-4  flex">
              <div className="bg-zinc-900 px-1 flex items-center">
                <img className="w-[15px]" src="icons/user.svg" /> Traders 
              </div>
              <div className="bg-[#e4e932] px-1 text-[#000] flex items-center">
                <img  className="w-[15px]" src="icons/token.svg" /> Tokens
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
              <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 flex-auto">
                <img
                  className="w-[60px]"
                  src="https://cdn.dexscreener.com/cms/images/S0D-k9hn9FLJp7bp?width=256&height=256&fit=crop&quality=95&format=auto"
                />
                <div>
                  <p className="p-0 text-[12px]">Trump WIF Space X</p>
                  <p className="p-0 text-[10px] text-gray-500 flex items-center gap-2">
                    <img className="w-[15px]" src="icons/solana.webp" /> Solana
                  </p>
                  <p>X</p>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="flex max-w-[1000px] m-auto">
            <div className="min-w-[170px] bg-zinc-900 p-1 rounded-xl">
              <div className="text-xl text-center mb-4">Chains</div>
              <div className="flex flex-col justify-center gap-3 ">
                <div className=" flex items-center justify-between p-1 gap-1 relative bg-gray-800">
                  <div className="flex items-center gap-1">
                    <img className="w-[32px]" src="/icons/bsc.svg" />
                    <div>
                      <p className="p-0 text-[12px]">BNB chain</p>
                      <p className="p-0 text-[10px] text-gray-500">180 tokens</p>
                    </div>
                  </div>
                  <div className="w-[20px]">
                    <img
                      className="opacity-100 hover:opacity-100"
                      src="/icons/check.svg"
                    />
                  </div>
                </div>
                <div className=" flex items-center justify-center p-1 gap-1 relative hover:bg-gray-800">
                  <div className="flex-auto flex justify-start items-center gap-1">
                    <img className="w-[24px]" src="/icons/solana.webp" />
                    Solana (18460)
                  </div>
                  <div className="w-[20px]">
                    <img
                      className="opacity-0 hover:opacity-100"
                      src="/icons/check.svg"
                    />
                  </div>
                </div>
                <div className=" flex items-center justify-center p-1 gap-1 relative hover:bg-gray-800">
                  <div className="flex-auto flex justify-start items-center gap-1">
                    <img className="w-[24px]" src="/icons/ether.webp" />
                    ETH (18460)
                  </div>
                  <div className="w-[20px]">
                    <img
                      className="opacity-0 hover:opacity-100"
                      src="/icons/check.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto overflow-auto h-[800px] px-4">
              <Tl />
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};
export default Top;
