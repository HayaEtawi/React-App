import React from "react";
import ReactDom from "react-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default AppContainer;
