import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AllProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {products.map((product, index) => (
          <article
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl'
          >

            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>{product.name}</h2>
              <p className='text-gray-700 mb-2'>Company: {product.company}</p>
              <p className='text-gray-700 mb-2'>Category: {product.category}</p>
              <p className='text-gray-700 font-bold mb-2'>${product.price}</p>
              <p className='text-gray-700 mb-2'>Rating: {product.rating}</p>
              <p className='text-red-500 font-bold mb-2'>
                Discount: {product.discount}%
              </p>
              <p className='text-gray-700'>
                {product.availability ? 'Available' : 'Not Available'}
              </p>
              <Link to={`/product/${index}`} className='inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4'>
                Learn More
              </Link> 
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}

export default AllProducts
