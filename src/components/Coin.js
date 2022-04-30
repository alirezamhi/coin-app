import React from 'react';

// Styles
import styles from "../components/Coin.module.css";

const Coin = ({name,image,price,symbol,marketcap,changeprice}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={name} className={styles.image}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}> $ {price.toLocaleString()}</span>
            <span className={changeprice > 0 ? styles.greenPriceChange : styles.redPriceChange} >{changeprice.toFixed(2)}</span>
            <span className={styles.marketCap} >$ {marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;