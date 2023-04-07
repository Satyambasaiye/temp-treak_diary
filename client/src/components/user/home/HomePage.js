import React from 'react'
import Nav from '../navBar/Nav'
import CardSection from '../card/CardSection'
import Footer from '../footer/Footer'
import Tile from '../tile/Tile'

export default function HomePage() {
  return (
    <div className=' bg-gradient-to-b from-yellow-300 to-white-500 overflow-x-hidden'>
      <Nav />
      <Tile />
      <CardSection />
      <Footer />
    </div>
  )
}
