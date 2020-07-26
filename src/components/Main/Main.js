import React from "react";
import ReactDOM from "react-dom";
import "./Main.scss";
import img3 from "./../images/3.png";
import img4 from "./../images/4.png";
import img5 from "./../images/5.png";
import img6 from "./../images/6.png";
import img16 from "./../images/16.jpg";
import img10 from "./../images/10.png";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div class="places">
          <h2> PLACES</h2>
          <div class="box">
            <figure>
              <img src={img3} alt="MOUNTAINS" />
              <figcaption>MOUNTAINS</figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </p>
          </div>
          <div class="box">
            <figure>
              <img src={img4} alt="SNOW" />
              <figcaption>SNOW</figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </p>
          </div>
          <div class="box">
            <figure>
              <img src={img5} alt="FOREST" />
              <figcaption>FOREST</figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </p>
          </div>
        </div>
        <div class="GetOut">
          <img src={img6} />
          <h1>GET</h1>
          <h1>OUT NOW</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing, sedsdsa
            domeiusmod tempor incididunt ut labore et dolore magna aliqua Quis
            ipsum suspendisse sa asultrices gravida. Risus commodo viverr
            maecenas accumsan lacus vel.
          </p>
          <button>Read more</button>
        </div>
        <div class="aventure">
          <h1>AVENTURE</h1>

          <p>THE NEW AVENTURE</p>
          <p> LOREM IPSUM</p>
        </div>
        <div class="Women">
          <img src={img16} alt="LadyImage" />
          <div class="Women__content">
            <h1>
              30<span>%off</span> Women
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>

        <div class="discover">
          <h1>DISCOVER</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>

        <div class="tours">
          <h1>TOURS</h1>
        </div>

        <div class="Polar">
          <h1>POLAR</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsdsa
            domeiusmod tempor incididunt ut labore et dolore magna Quis ipsum
            suspendisse sa asultrices gravida.Risus commodo viverr maecenas
            accumsan lacus vel.
          </p>
          <div class="Polar__icons">
            <a href="" target="_blank">
              {" "}
              <i class="fas fa-map-marker-alt fa-3x"></i>
            </a>
            <a href="" target="_blank">
              {" "}
              <i class="far fa-snowflake fa-3x"></i>
            </a>
            <a href="" target="_blank">
              {" "}
              <i class="far fa-calendar fa-3x"></i>
            </a>
          </div>
          <button>
            <a href="" target="_blank">
              Go
            </a>
          </button>
        </div>

        <div class="GetOutNow">
          <img src={img10} />
          <div class="GetOutNow__content">
            <h1>GET </h1>
            <h1>OUT NOW</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsdsa
              domeiusmod tempor incididunt ut labore et dolore magna Quis ipsum
              suspendisse sa asultrices gravida.Risus commodo viverr maecenas
              accumsan lacus vel.
            </p>
            <div class="GetOutNow__icons">
              <a href="" target="_blank">
                {" "}
                <i class="fas fa-map-marker-alt fa-3x"></i>
              </a>
              <a href="" target="_blank">
                {" "}
                <i class="far fa-snowflake fa-3x"></i>
              </a>
              <a href="" target="_blank">
                {" "}
                <i class="far fa-calendar fa-3x"></i>
              </a>
            </div>
            <button>
              <a href="" target="_blank">
                Go
              </a>
            </button>
          </div>
        </div>

        <div class="TitleHere">
          <h1>Title Here</h1>
          <p>
            Lorem ipsum ckshdnsk msolgtb elit.Vivamus lacinia odio vitae
            vestibulum vestibulum
          </p>

          <form>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
