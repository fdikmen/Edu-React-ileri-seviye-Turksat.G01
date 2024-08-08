import React from 'react'
import User from './components/User'
import OrderSummary from './components/OrderSummary'
import ProductsMain from './components/ProductsMain'

//UserProfile component import
const UserProfile = React.lazy(() => import('./components/UserProfile'))

export default function App() {
  console.log('App')
  return (
    <div>App
      <hr/>
      <User />
      <hr/>
      <OrderSummary />
      <hr/>
      <ProductsMain />
      <hr/>
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserProfile />
      </React.Suspense>
    </div>
  )
}
