import React, { Component } from 'react'
import Header from 'parts/Header'
import landingPage from '../json/landingPage.json';
import Hero from 'parts/Hero.js'

export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header> 
        <Hero data={landingPage} />
      </>
    )
  }
}
