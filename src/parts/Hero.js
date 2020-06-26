import React from 'react'
import ImageHero from 'assets/images/picture.png'
import ImageHero_ from 'assets/images/frame.png'
import IconCites from 'assets/icons/ic_cities.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'
import IconTraveler from 'assets/icons/ic_traveler.svg'
import Button from 'elements/Button'

const Hero = props => {
  console.log(props.data)

  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 130,
      behavior: 'smooth'
    })
  }

  return (
    <section className='container pt-4 mt-5'>
      <div className='row align-items-center'>
        <div className='col-auto pr-5' style={{ width:530 }}>
          <h1 className='font-weight-bold line-height-1 mb-3'>
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className='mb-5 font-weight-light text-gray-500 w-75'>
            We provide what you need to enjoy your holiday with family, Time to make
            another memorable moments.
          </p>
          <Button
            className='btn px-5'
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>
          <div className='row mt-5'>
            <div className='col-auto'>
              <img src={IconTraveler} width='36' height='36' alt={`${props.data.travelers} Travelers`} />
              <h6 className='mt-3'>
                {props.data.hero.travelers}{' '}
                <span className='text-gray-500 font-weight-light'>
                  travelers
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img src={IconCites} width='36' height='36' alt={`${props.data.cities} Cities`} />
              <h6 className='mt-3'>
                {props.data.hero.cities}{' '}
                <span className='text-gray-500 font-weight-light'>
                  cities
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img src={IconTreasure} width='36' height='36' alt={`${props.data.treasure} Treasure`} />
              <h6 className='mt-3'>
                {props.data.hero.treasures}{' '}
                <span className='text-gray-500 font-weight-light'>
                  treasure
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-6 pl-5' style={{width: 520, height: 410}}>
          <img
            src={ImageHero}
            alt='room with couches'
            className='img-fluid position-absolute'
            style={{ margin: '-30px 0 0 30px', zIndex: 1}}
          />
          <img
            src={ImageHero_}
            alt='room with frame'
            className='img-fluid position-absolute'
            style={{ margin: '0 15px 15 0'}}
            />
        </div>
      </div>
    </section>
  )
}

export default Hero