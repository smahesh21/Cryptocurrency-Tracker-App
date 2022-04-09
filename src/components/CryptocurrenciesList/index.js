import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    console.log(updatedList)
    this.setState({cryptoList: updatedList, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="cryptocurrency-list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="cryptocurrency"
              alt="cryptocurrency"
            />
            <div className="cryptocurrency-list">
              <div className="header">
                <p className="coin-type">Coin Type</p>
                <div className="coins-value-container">
                  <p className="coin">USD</p>
                  <p className="coin">EURO</p>
                </div>
              </div>
              <div className="middle-container">
                {cryptoList.map(eachCrypto => (
                  <CryptocurrencyItem
                    eachCrypto={eachCrypto}
                    key={eachCrypto.id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
