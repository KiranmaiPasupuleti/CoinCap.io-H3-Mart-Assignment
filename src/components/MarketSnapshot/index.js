import TableComponent from '../TableComponent'
import './index.css'

const MarketSnapshot = () => (
  <div className="market-table-container">
    <ul className="market-items">
      <li className="firstEl">
        <p>
          MARKET CAP <br /> $1.01T
        </p>
      </li>
      <li>
        <p>
          EXCHANGE VOL <br /> $28.21B
        </p>
      </li>

      <li>
        <p>
          ASSETS <br /> 2,295
        </p>
      </li>
      <li>
        <p>
          EXCHANGES <br /> 73
        </p>
      </li>

      <li>
        <p>
          MARKETS <br /> 12,563
        </p>
      </li>
      <li className="lastEl">
        <p>
          BTC DOM INDEX <br /> 33.4%
        </p>
      </li>
    </ul>

    <div className="table-component-container">
      <TableComponent />
    </div>
  </div>
)

export default MarketSnapshot
