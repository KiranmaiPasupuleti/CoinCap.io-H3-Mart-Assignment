import 'bootstrap/dist/css/bootstrap.min.css'
import {BiDownArrow} from 'react-icons/bi'
import {Component} from 'react'

import './index.css'
import EachRowOfTable from '../EachRowOfTable'

class TableComponent extends Component {
  state = {
    isLoading: true,
    itemsList: [],
    limit: 50,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {limit} = this.state
    const apiUrl = `https://api.coincap.io/v2/assets?limit=${limit}`
    const options = {method: 'GET'}

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.data
      //   console.log(formattedData)
      this.setState(prevState => ({isLoading: !prevState.isLoading}))
      this.setState({itemsList: formattedData})
    }
  }

  onClickViewMore = () => {
    this.setState({limit: 100, isLoading: true}, this.getData)
  }

  render() {
    const {itemsList, isLoading} = this.state

    return (
      <div className="table-btn-container">
        <div className="table-container shadow">
          <table className="table-element" cellPadding="10" cellSpacing="10">
            {!isLoading && (
              <thead className="thead-styles">
                <th className="rank">
                  Rank <BiDownArrow className="arrow-rank" />
                </th>
                <th className="name">Name</th>
                <th className="price">Price</th>
                <th className="market-cap">MarketCap</th>
                <th className="vwap">VWAP(24Hr)</th>
                <th className="supply">Supply</th>
                <th className="volume">Volume(24Hr)</th>
                <th className="change">Change (24Hr)</th>
              </thead>
            )}

            <tbody>
              {itemsList.map(eachRowDetails => (
                <EachRowOfTable
                  key={eachRowDetails.id}
                  eachRowDetails={eachRowDetails}
                />
              ))}
            </tbody>
          </table>
        </div>
        {!isLoading && (
          <button
            type="button"
            className="view-more-btn"
            onClick={this.onClickViewMore}
          >
            View More
          </button>
        )}
      </div>
    )
  }
}

export default TableComponent
