import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h1 className="footer__left--heading">Lakshya 2021</h1>
        <p className="footer__detail">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          aspernatur soluta cum vel enim, laboriosam delectus molestiae suscipit
          cumque nisi accusantium veniam voluptatibus adipisci dolorum quam
          minima esse commodi atque.
        </p>

        <Link to="/" className="footer__left--privacy">
          <h3>Privacy Policy</h3>
        </Link>
      </div>

      <div className="footer__right">
        <div className="footer__links">
          <p className="footer__heading">Links</p>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__about">
          <p className="footer__heading">About</p>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__li">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <p className="footer__heading">Contact Us</p>
          <p className="footer__num">Phone : +91 452132454</p>
          <p className="footer__num">Phone : +91 452132454</p>
          <p className="footer__email">Email : xyz@example.com</p>

          <p className="footer__address">
            Address : Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eaque, aspernatur soluta cum vel enim.
          </p>
        </div>

        <div className="footer__signup">
          <p className="footer__heading">SIGN UP FOR OUR EVENT BROCHURE</p>
          <input
            type="email"
            className="footer__emailAddress"
            placeholder="Enter your Email"
            required
          />
          <button className="footer__btn">Submit</button>

          <h3 className="footer__social">Our Socials</h3>
          <ul className="footer__social--ul">
            <li className="footer__social--li">
              <Link to="/" className="footer__social--link">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="footer__social--li">
              <Link
                to="/"
                className="footer__social--link"
              >
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="footer__social--li">
              <Link to="/" className="footer__social--link">
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
