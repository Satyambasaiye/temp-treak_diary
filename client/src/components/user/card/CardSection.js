import React from 'react'
import CardList from './CardList'

export default function CardSection() {
  return (
    <>
      <CardList title={"Upcoming Treks"} id={"upcoming"}/>
      <CardList title={"Every Weekend Events"} id={"weekend"}/>
    </>
  )
}
