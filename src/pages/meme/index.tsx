import { Icon, TagSelector } from '@/components';
import Tl from '../index/Tl';
import { CopyOutlined, RightOutlined } from '@ant-design/icons';
import T1 from '../trade/T1';
import Item from './Item';
import { useState } from 'react';
import { Select } from 'antd';
const TokenItem = () => {
  return (
    <div className="flex items-center rounded-md justify-between py-2 hover:bg-gray-700 p-2">
      <div className="flex items-center gap-2">
        <img className="w-[24px]" src="/icons/bsc.svg" />
        BNB
      </div>
      <div>$542.00</div>
      <div className="text-red-500">-00.50%</div>
    </div>
  );
};
const TopItem = ({title}) => {
  return (
    <div className="rounded-lg border border-gray-700  p-2 flex-1">
      <div className="flex items-center justify-between p-2">
        <div>{title}</div>
        <div>
          More <RightOutlined style={{ fontSize: '0.5rem' }} />
        </div>
      </div>
      <div className="overflow-auto h-[120px]">
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
      </div>
    </div>
  );
};
const Meme = () => {
  const [v, setV] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="font-bold  text-2xl">Markets Overview</div>
        <div className="font-bold  text-1xl text-gray-600">Trading Data</div>
      </div>
      <div className="flex gap-2 w-full overflow-auto">
        <TopItem title="Trending"/>
        <TopItem title="New Listing"/>
        <TopItem title="Top Gainer Coin"/>
        <TopItem title="Top Volume Coin"/>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-bold flex items-center gap-1">
          <Icon.Jiaonang />
          Pump
        </div>
        <div className="font-bold flex items-center gap-1 opacity-50">
          <Icon.Moon />
          Moonshot
        </div>
        <div className="font-bold flex items-center gap-1 opacity-50">
          <Icon.Booster width={24} />
          Booster
        </div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          allowClear
          options={[{ value: 'Orca', label: 'Orca' },{ value: 'Raydium', label: 'Raydium' }]}
          placeholder="ALL DEX"
        />
        <TagSelector
          tags={['Pump', 'New Creation', 'Completing']}
          onTagSelect={(e: string) => {
            setV(e != 'Pump');
          }}
        />
      </div>
      <Tl />
      {/* {(v && <Tl />) || (
        <div className="grid gap-4 grid-cols-3 flex-1">
          <div className="flex flex-col bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🌱 New Pool</div>
            <div className="overflow-y-auto flex-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🔥 Burnt</div>
            <div className="overflow-y-auto">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🦅 Spent</div>
            <div className="overflow-y-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default Meme;
