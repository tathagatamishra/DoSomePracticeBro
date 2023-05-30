import React from 'react'
import GChild from './GChild'

export default function Child(prop1) {
  return (
    <>
    <h1>Child Of App</h1>
    <h3>{prop1.num}</h3>

    <GChild num1={prop1.num} />
    </>
  )
}
