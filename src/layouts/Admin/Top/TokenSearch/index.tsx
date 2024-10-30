import { Head } from '@/components'
import Item from './Items';

const TokenSearch = () => {
    return <div className="flex w-[1024px] m-auto"><div className="min-w-[170px] bg-zinc-900 p-1 rounded-xl">
        <div className="text-xl text-center mb-4">Chains</div>
        <div className="flex flex-col justify-center gap-3 ">
            <div className=" flex items-center justify-between p-1 gap-1 relative bg-[#fff200]">
                <div className="flex items-center gap-1">
                    <img className="w-[32px]" src="/icons/bsc.svg" />
                    <div>
                        <p className="p-0 text-[12px] text-black">BNB chain</p>
                        <p className="p-0 text-[10px] text-gray-500">180 tokens</p>
                    </div>
                </div>
                <div className="w-[20px]">
                    <img
                        className="opacity-100 hover:opacity-100"
                        src="/icons/check.svg" />
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
                        src="/icons/check.svg" />
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
                        src="/icons/check.svg" />
                </div>
            </div>
        </div>
    </div>
        <div className="flex-auto overflow-auto h-[800px] px-4">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div></div>;
}
export default TokenSearch;