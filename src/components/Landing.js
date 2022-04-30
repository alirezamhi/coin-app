import React , {useEffect , useState} from 'react';

//api 
import {getapi} from '../services/getapi';
//component
import Loader from './Loader';
import Coin from './Coin';
//style
import styles from './Landing.module.css';

const Landing = () => {

    const [coins , setCoin] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchapi = async()=>{
            const data = await getapi();
            setCoin(data)
        }
        fetchapi();
    },[])

    const searchHandler = (event)=>{
        setSearch(event.target.value)
    }
    const filtercoin = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        
        <div>
            <input className={styles.input} type="text" placeholder='Search' value={search} onChange={searchHandler}/>
            {
                coins.length?
                    <div className={styles.coinContainer}>
                        {filtercoin.map(coin=><Coin key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} symbol={coin.symbol} marketcap={coin.market_cap} changeprice={coin.market_cap_change_percentage_24h}></Coin>)}
                    </div>:
                    <Loader/>
            }

        </div>
    );
};

export default Landing;