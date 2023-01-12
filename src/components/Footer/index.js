import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import './index.css'

const Footer = () => {
  const googlePlayImg =
    'https://coincap.io/static/images/stores/google_play.svg'
  const appStoreImg = 'https://coincap.io/static/images/stores/apple_store.svg'

  return (
    <div className="footer-container">
      <ul className="coincapio-container">
        <p className="follow-para-text">COINCAP.IO </p>
        <a href="https://coincap.io/methodology">link here</a>
        <li className="coincap-li">Methodology</li>
        <li className="coincap-li">Support</li>
        <li className="coincap-li">Our API</li>
        <li className="coincap-li">Rate Comparison</li>
        <li className="coincap-li">Careers</li>
      </ul>

      <div>
        <ul className="legal-container">
          <p className="follow-para-text">LEGALS</p>
          <li className="legal-li">Terms of Service</li>
          <li className="legal-li">Privacy Policy</li>
        </ul>

        <ul className="disclaimer-container">
          <p className="follow-para-text">DISCLAIMER</p>
          <li className="disclaimer-li">
            Neither shapeShift AG nor CoinCapp are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </li>
        </ul>
      </div>

      <div className="follow-container">
        <p className="follow-para-text">FOLLOW US</p>
        <AiOutlineTwitter className="follow-us-icons" />
        <AiFillFacebook className="follow-us-icons" />
      </div>
      <div className="app-available-container">
        <p className="follow-para-text">COINCAP AVAILABLE ON</p>
        <img
          className="available-imgs"
          src={googlePlayImg}
          alt="google-play-img"
        />
        <img className="available-imgs" src={appStoreImg} alt="app-store-img" />
      </div>
    </div>
  )
}

export default Footer
