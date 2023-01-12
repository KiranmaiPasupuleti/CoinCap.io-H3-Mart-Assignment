import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdSettings} from 'react-icons/md'
import './index.css'

const countriesList = [
  {name: 'USD', fullName: 'United States Dollar'},
  {name: 'UK', fullName: 'United Kingdom'},
  {name: 'USA', fullName: 'United states of America'},
  {name: 'IND', fullName: 'India'},
  {name: 'AFN', fullName: 'Afghanistan'},
]

const languages = ['English', 'Franchise', 'Telugu', 'Hindi', 'Urdu', 'Spanish']

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="coin-exchange-swap-container">
          <p>Coins</p>
          <p>Exchanges</p>
          <p>Swap</p>
        </div>

        <div>
          <img
            src="https://coincap.io/static/logos/black.svg"
            alt="logo"
            className="logo-img"
          />
        </div>

        <div className="select-container">
          <select className="select1">
            {countriesList.map(each => (
              <option key={each.name} value={each.name} className="option">
                {each.name}
              </option>
            ))}
          </select>

          <select className="select1">
            {languages.map(each => (
              <option key={each} value={each}>
                {each}
              </option>
            ))}
          </select>

          <BiSearch className="header-icons" />
          <MdSettings className="header-icons" />
        </div>
      </div>
    )
  }
}
export default Header
