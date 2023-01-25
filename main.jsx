import React from 'react'

export default function main() {
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
  )
}
