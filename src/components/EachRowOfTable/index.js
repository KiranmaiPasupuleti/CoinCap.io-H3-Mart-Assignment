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
            {/* <p>{symbol}</p> */}
          </div>
        </div>
      </td>
      <td className="price">${roundedPriceUsd}</td>
      <td className="market-cap">{marketCapUsd}</td>
      <td className="vwap">${vwap}</td>
      <td className="supply">{supply}</td>
      <td className="volume">{volumeUsd24Hr}</td>
      <td className={percentageClassName}>{percentageVal}%</td>
    </tr>
  )
}

export default EachRowOfTable
