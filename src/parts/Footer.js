import React from 'react'
import Button from 'elements/Button'
import IconText from './IconText'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <IconText />
            <p className='brand-tagline mt-3 text-gray-500'>
              We kaboom your beauty holidy instantly and memorable
            </p>
          </div>
          <div className='col mr-5'>
            <h6 className='mt-2'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group'>
                <Button type='link' href='/register'>
                  New Account
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='/properties'>
                  Start Booking Room
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='/use-payments'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className='col mr-5'>
            <h6 className='mt-2'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group'>
                <Button type='link' href='/career'>
                  Our Careers
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='/privacy'>
                  Privacy
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='/terms'>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h6 className='mt-2'>Connect Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group'>
                <Button isExternal type='link' href='/mailto:support@staycation.id'>
                  Support@staycation.id
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='tel:+625763761872'>
                  021 - 2209 - 1194
                </Button>
              </li>
              <li className='list-group'>
                <Button type='link' href='/location'>
                  Staycation, Magelang Jawa Tengah
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center copyrights'>
            Copyright 2020 - All rights reserver - Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}

