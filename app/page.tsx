import Home from '@/components/Home';
import React from 'react'

const page = async () => {
  const products = await fetch("http://mystore.alaqmar.dev/api/markaz-pneumatics/products").then(res => res.json());
  return (
    <div>
      <Home products={products} />
    </div>
  )
}

export default page
