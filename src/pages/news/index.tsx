import { Breadcrumb } from 'antd'
import styles from './styles.less'
// import { IconSmallLogo } from '@/components/Icon'
const News = () => {
    return <div className={styles.news}>
        <Breadcrumb items={[{ title: 'News Center' }, { title: 'Move' }]} />
        <h1>We are integrating TradingView to enhance the trading experience.</h1>
        <div style={{ margin: '10px 0' }}>
            <div className={styles.header}>
                <div className={styles.img}>
                    <img
                        style={{ height: "40px", width: "128px",maxWidth: "128px"}}
                        src="/logo.png"
                        alt="Bold Exchange Logo"
                    />
                </div>
                <div>
                    <p className={styles.des}>Published on 2025-01-24 Updated on 2025-01-24</p>
                </div>
            </div>
        </div>
        <hr style={{ margin: '10px 0' }}></hr>
        <p>
            We have now integrated TradingView, bringing more intuitive charts and technical analysis tools. Through this collaboration, users can:
        </p>
        <h2> 1. Real-time Market Analysis</h2>

        <p> With TradingView's professional candlestick charts and technical indicators, users can easily track cryptocurrency price trends and optimize trading strategies. For example, by using the <a style={{color:'blue'}} target='_blank' href='https://www.tradingview.com/symbols/BTCUSD/'>BTC/USD</a> price trend chart, users can clearly understand the price changes and market dynamics of different cryptocurrencies, helping to formulate more strategic trading plans.
        </p>
        <h2>2. Backtesting Functionality</h2>
        <p>
            Simulate trading decisions based on historical data to help users optimize their strategies and improve investment returns.
        </p>
        <h2>3. Seamless Experience</h2>
        <p>
            In the future, users will be able to use TradingView tools directly within the trading interface without switching platforms, making operations more efficient and convenient.

            With the TradingView tools, we will be able to offer users smarter and more convenient trading support.
        </p>
    </div>
}
export default News