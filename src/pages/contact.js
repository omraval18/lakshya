import React from 'react';
import '../App.css';

import profile from '../img/logo192.png';

function contact() {
  return (
    <div className="contact grid">
      <div className="contact__heading">
        Reach Out
      </div>

      <div className="col_1-of_2 contact__left">
        <div className="contact__main">
          <div className="contact__left">
            <div className="contact__left__profile">
              <img src={profile} alt="" className="contact__left--img" />
              <p className="contact__left--name">Name</p>
            </div>

            <div className="contact__left__details">
              <h2 className="contact__left--head">Event Head</h2>
              <p className="contact__left--email">
                <i class="fas fa-envelope"></i>abc@gmail.com
              </p>
              <p className="contact__left--number">
                <i class="fas fa-phone-alt"></i>9785215448
              </p>
            </div>
          </div>

          <div className="contact__left">
            <div className="contact__left__profile">
              <img src={profile} alt="" className="contact__left--img" />
              <p className="contact__left--name">Name</p>
            </div>

            <div className="contact__left__details">
              <h2 className="contact__left--head">Event Head</h2>
              <p className="contact__left--email">
                <i class="fas fa-envelope"></i>abc@gmail.com
              </p>
              <p className="contact__left--number">
                <i class="fas fa-phone-alt"></i>9785215448
              </p>
            </div>
          </div>

          <div className="contact__left">
            <div className="contact__left__profile">
              <img src={profile} alt="" className="contact__left--img" />
              <p className="contact__left--name">Name</p>
            </div>

            <div className="contact__left__details">
              <h2 className="contact__left--head">Event Head</h2>
              <p className="contact__left--email">
                <i class="fas fa-envelope"></i>abc@gmail.com
              </p>
              <p className="contact__left--number">
                <i class="fas fa-phone-alt"></i>9785215448
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col_1-of_2 contact__right">
        <h1 className="contact__right--heading">Leave a Message</h1>
        <form action="/" className="contact__right--form">
          <div className="contact__container">
            <input
              type="text"
              className="contact__right--name"
              placeholder="Name"
            />
            <input
              type="email"
              className="contact__right--email"
              placeholder="Email"
            />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="contact__right--message"
            placeholder="Message"
          ></textarea>

          <button className="contact__right--btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
