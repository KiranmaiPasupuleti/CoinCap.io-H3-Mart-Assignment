import formattedCurrency from '../FormattedCurrency'
import './index.css'

const EachRowOfTable = props => {
  const {eachRowDetails} = props
  const {
    rank,
    id,
    name,
    priceUsd,
    marketCapUsd,
    vwap24Hr,
    supply,
    volumeUsd24Hr,
    changePercent24Hr,
    symbol,
  } = eachRowDetails

  const lowerCaseSymbol = symbol.toLowerCase()
  const eachRowImage = `https://assets.coincap.io/assets/icons/${lowerCaseSymbol}@2x.png`
  const roundedPriceUsd = parseFloat(priceUsd).toFixed(2)
  const vwap = parseFloat(vwap24Hr).toFixed(2)
  const percentageVal = parseFloat(changePercent24Hr).toFixed(2)

  const percentageClassName =
    percentageVal > 0 ? 'change green-percentage' : 'change red-percentage'

  const updatedSupply = formattedCurrency(supply)
  const updatedVolume = formattedCurrency(volumeUsd24Hr)
  const updatedMarketCapUsd = formattedCurrency(marketCapUsd)

  return (
    <tr className="row-styling">
      <td className="rank">{rank}</td>
      <td>
        <div className="name">
          <img src={eachRowImage} className="each-img" alt={id} />
          <div>
            <p>
              {name} <br /> {symbol}
            </p>
          </div>
        </div>
      </td>
      <td className="price">${roundedPriceUsd}</td>
      <td className="market-cap">${updatedMarketCapUsd}</td>
      <td className="vwap">${vwap}</td>
      <td className="supply">{updatedSupply}</td>
      <td className="volume">${updatedVolume}</td>
      <td className={percentageClassName}>{percentageVal}%</td>
    </tr>
  )
}

export default EachRowOfTable
