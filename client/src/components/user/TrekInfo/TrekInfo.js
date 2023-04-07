import React from 'react'
import Nav from '../navBar/Nav'
import CardDescription from '../cardDiscription/CardDescription'
import Footer from '../footer/Footer'
import CardList from '../card/CardList'

export default function TrekInfo() {
  return (
    <div className=' bg-gradient-to-b from-yellow-300 to-white'>
      <Nav />
      <CardDescription />
      <CardList title={"Upcoming treks"} id={"upcoming2"} />
      <Footer />
    </div>
  )
}
