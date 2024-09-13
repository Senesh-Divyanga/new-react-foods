import React, { useState } from 'react'
import './Products.css'

const Products = () => {
  return (
    <div className='products'>
      <div className="topic">
        <h1>Products</h1>
      </div><br></br>
      <div className="thumbnails">
      <div className="p1">
            <img src="images/brinjal.jfif" className="product-image-1" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    <div className="p2">
            <img src="images/brinjal.jfif" className="product-image-1" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    <div className="p3">
            <img src="images/brinjal.jfif" className="product-image-1" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    <div className="p4">
            <img src="images/brinjal.jfif" className="product-image-1" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
      </div>
      </div>
  )
}

export default Products
