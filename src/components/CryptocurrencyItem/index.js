import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCrypto
  return (
    <li className="cryptocurrency-item">
      <div className="logo-coin-type">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
