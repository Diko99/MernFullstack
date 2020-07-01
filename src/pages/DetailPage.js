import React, { Component } from 'react'
import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailsTitle'
import FeaturedImage from 'parts/FeaturedImage'
import ItemsDetails from '../json/itemDetails.json'
import PageDetailsDesc from 'parts/PageDetailsDesc'
import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = 'Details Page'
    window.scrollTo(0, 0)
  }

  render() {
    const breadcrumb = [
      { pageTitle : 'Home', pageHref: ''},
      { pageTitle : 'House Details', pageHref: ''},
    ]

    return (
      <>
        <Header {...this.props} /> 
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemsDetails}
        />
        <FeaturedImage data={ItemsDetails.imageUrls} />
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <PageDetailsDesc data={ItemsDetails} />
            </div>
            <div className='col-5'>
              <BookingForm itemDetails={ItemsDetails} />
            </div>
          </div>
        </div>
        <Categories data={ItemsDetails.categories}/>
        <Testimony data={ItemsDetails.testimonial} />
        <Footer />
      </>
    )
  }
}
