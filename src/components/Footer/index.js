import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import './index.css'

const Footer = () => {
  const googlePlayImg =
    'https://coincap.io/static/images/stores/google_play.svg'
  const appStoreImg = 'https://coincap.io/static/images/stores/apple_store.svg'

  return (
    <div className="footer-container">
      <div className="coincapio-container">
        <p className="follow-para-text">COINCAP.IO </p>

        <a className="anchor-styling" href="https://coincap.io/methodology">
          Methodology
        </a>

        <a
          href="https://shapeshift.zendesk.com/hc/en-us/requests/new"
          className="anchor-styling"
        >
          Support
        </a>
        <a href="https://docs.coincap.io/" className="anchor-styling">
          Our API
        </a>
        <a href="https://coincap.io/rate-compare" className="anchor-styling">
          Rate Comparison
        </a>
        <a href="https://shapeshift.com/contribute" className="anchor-styling">
          Careers
        </a>
      </div>

      <div>
        <div className="legal-container">
          <p className="follow-para-text">LEGALS</p>
          <a
            href="https://assets.coincap.io/documents/terms_of_service.pdf"
            className="legal-li anchor-styling"
          >
            Terms of Service
          </a>
          <a
            href="https://shapeshift.com/privacy?_ga=2.32122238.1309090788.1673455252-1821674170.1673455252"
            className="legal-li anchor-styling"
          >
            Privacy Policy
          </a>
        </div>

        <div className="disclaimer-container">
          <p className="follow-para-text">DISCLAIMER</p>
          <p className="disclaimer-li">
            Neither shapeShift AG nor CoinCapp are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </div>
      </div>

      <div className="follow-container">
        <p className="follow-para-text">FOLLOW US</p>
        <a href="https://twitter.com/CoinCap_io" className="anchor-styling">
          <AiOutlineTwitter className="follow-us-icons" />
        </a>
        <a
          href="https://www.facebook.com/coincapmarketdata/videos/365220420785166/"
          className="anchor-styling"
        >
          <AiFillFacebook className="follow-us-icons" />
        </a>
      </div>
      <div className="app-available-container">
        <p className="follow-para-text">COINCAP AVAILABLE ON</p>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap"
        >
          <img
            className="available-imgs"
            src={googlePlayImg}
            alt="google-play-img"
          />
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/coincap/id1074052280?ign-mpt=uo%3D4"
        >
          <img
            className="available-imgs"
            src={appStoreImg}
            alt="app-store-img"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
