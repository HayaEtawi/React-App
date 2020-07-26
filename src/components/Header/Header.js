import React from "react";
import ReactDOM from "react-dom";
import "./Header.scss";
import img from "./../images/1.png";

class Header extends React.Component {
  render() {
    return (
      <div class="main">
        <div>
          <header>
            <img src={img} alt="HikinImage" />
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Places</a>
                </li>
                <li>
                  <a href="">Promo</a>
                </li>
                <li>
                  <a href="">Tours</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div class="main__icons">
              <a href="" target="_blank">
                {" "}
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a href="">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
              <a href="">
                {" "}
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              <a href="">
                {" "}
                <i class="fab fa-whatsapp fa-2x"></i>
              </a>
            </div>
          </header>
          <h1>DISCOVER</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsdsa
            iusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsu
            suspendisse sa asultrices gravida. Risus commodo vive maecenas
            accumsan lacus.
          </p>
          <button>
            <a href="" target="_blank">
              Read more
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
