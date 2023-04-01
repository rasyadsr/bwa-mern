import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import jsonLandingPage from '../json/landingPage.json'

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero data={jsonLandingPage.hero} />
    </>
  )
}
