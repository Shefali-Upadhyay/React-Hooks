import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { UserContext, PlaceContext } from '../App'

export default function ComponentB() {

  const user = useContext(UserContext)
  const place = useContext(PlaceContext)
  return <div> User is {user} and is from {place}
  <ComponentC/></div>
}