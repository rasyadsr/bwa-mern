import React, { useRef } from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import jsonLandingPage from '../json/landingPage.json'
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories'

export default function LandingPage() {
  const refMostPicked = useRef(null)

  return (
    <>
      <Header />
      <Hero refMostPicked={refMostPicked} data={jsonLandingPage.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={jsonLandingPage.mostPicked}
      />
      <Categories data={jsonLandingPage.categories} />
    </>
  )
}
