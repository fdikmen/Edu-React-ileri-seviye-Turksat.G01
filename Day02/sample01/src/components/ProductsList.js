import React from 'react'

export default function ProductsList({products}) {
  if (!products){
    throw new Error('ProductsList: products is required')
  }
  return (
    <div>OrderList
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
