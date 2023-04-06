import React from 'react'
import BrandData from './brandData.json'

const Test = () => {

const brandName = [...new Set(BrandData.products.map((r) => r.brand))]
console.log("brandName:",brandName)

  return (
    <div>Test</div>
  )
}

export default Test