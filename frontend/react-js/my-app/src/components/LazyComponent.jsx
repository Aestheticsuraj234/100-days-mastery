import React from 'react'
import useStore from '../store/store'

const LazyComponent = () => {
  const {count , increase , decrease , reset} = useStore()
  return (
    <div>
      <h1>LazyComponent</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default LazyComponent