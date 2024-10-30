import { Head,SemiCircle } from '@/components'
import { SwapOutlined } from '@ant-design/icons'
import { Button, Rate } from 'antd'
const Token = () => {
    return <div className='flex gap-2'>
        <Head src='https://dd.dexscreener.com/ds-data/tokens/solana/DBNLn6C32cMmbh8ABcioWgv3ninciwUyfjgL1wyCpSxG.png?size=lg&key=bb66e1' size='base' type='token' />
        <div>
            <p className='text-base'>BTC<span className='text-gray-500'>/ETH</span></p>
            <p>bitcoin</p>
            <p>0xcob...1410</p>
        </div>

    </div>
}
const Price=()=>{
    return <div>
        <p className='text-base'>$0.08</p>
        <p><span className='text-green-500'>6.3%</span> 24h</p>
    </div>
}
const Liq=()=>{
    return <div>
        <p className='text-base'>Liq. $557.17k</p>
        <p>Vol. 12.17k <span className='text-gray-500'>24h</span></p>
    </div>
}
const Pool=()=>{
    return <div>
        <p>
        <Head src='https://dd.dexscreener.com/ds-data/tokens/solana/DBNLn6C32cMmbh8ABcioWgv3ninciwUyfjgL1wyCpSxG.png?size=lg&key=bb66e1' size='small' type='token' />
        <Head src='https://dd.dexscreener.com/ds-data/tokens/solana/DBNLn6C32cMmbh8ABcioWgv3ninciwUyfjgL1wyCpSxG.png?size=lg&key=bb66e1' size='small' type='token' />
        <Head src='https://dd.dexscreener.com/ds-data/tokens/solana/DBNLn6C32cMmbh8ABcioWgv3ninciwUyfjgL1wyCpSxG.png?size=lg&key=bb66e1' size='small' type='token' />
            
        </p>
        <p>17 days ago</p>
    </div>
}
const Swap=()=>{
    return <div className='flex items-center gap-2'>
        {/* <SemiCircle percentage={50} /> */}
        <Button style={{color:'#fff'}}><SwapOutlined />Swap</Button>
        <Rate count={1} defaultValue={1} />
    </div>
}
const Item = () => {
return  <div className='border-b-[1px] border-gray-500 flex items-center justify-between p-2 hover:bg-zinc-900'>
    <Token />
    <Price />
    <Liq />
    <Pool />
    <Swap />
</div>
}
export default Item;