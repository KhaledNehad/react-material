import React, { Fragment, Component } from 'react';
// import { Header, Footer } from "./Components/Layouts";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Exercises from "./Components/Exercises";


export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    )
  }
}





