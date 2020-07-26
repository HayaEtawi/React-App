import React from "react";
import ReactDOM from "react-dom";
import "./Footer.scss";
import img from "./../images/1.png";

class Footer extends React.Component {
  render() {
    return (
      <footer class="About">
        <div class="About__content">
          <img src={img} />
          <ul class="About__list">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Team</li>
            <li>Join Ud</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
          <ul class="About__list">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Team</li>
            <li>Join Ud</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
          <ul class="About__list">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Team</li>
            <li>Join Ud</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
