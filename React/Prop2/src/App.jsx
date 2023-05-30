import React from 'react'
import Child from './Child'

export default function App() {

  let n = 10

  return (
    <>
    <h1>PROP</h1>

    <h3></h3>

    <Child num={n} />
    </>
  )
}
