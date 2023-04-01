import React from 'react'
import propTypes from 'prop-types'
import ImageHero from '../assets/images/img-hero.jpg'
import ImageHeroFrame from '../assets/images/img-hero-frame.jpg'
import IconCities from '../assets/images/icons/icon-cities.svg'
import IconTraveler from '../assets/images/icons/icon-traveler.svg'
import IconTreasure from '../assets/images/icons/icon-treasure.svg'
import Button from '../elements/Button'
import { numberFormat } from '../utils/formatNumber'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    })
  }

  return (
    <section className="container pt-4">
      <div className="row justify-content-between">
        <div
          className="col-lg-6 col-sm-12 pr-5 d-flex flex-column align-items-start justify-content-center"
          style={{ width: 530, height: 530 }}
        >
          <h1 className="fw-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 fw-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            type="link"
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{' '}
                <span className="text-gray-500 font-weight-ligt">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}{' '}
                <span className="text-gray-500 font-weight-ligt">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                height="36"
                width="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{' '}
                <span className="text-gray-500 font-weight-ligt">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 pl-5 -flex flex-column align-items-end">
          <div>
            <img
              width="550px"
              // height="100px"
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: '-5px 0 0 40px', zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: '60px -25px -25px 120px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  // data: propTypes.array,
}
