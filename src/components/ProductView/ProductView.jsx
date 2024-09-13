import React from 'react'
import './ProductView.css'
import { assets } from '../../assets/assets'

const ProductView = () => {
  return (
    <div className='product-view'>
      <div className="product-view-container">
        <div className="product-name">
            <h2>Brinjal Moju</h2>
            <img onClick={setShowDetails(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="product-details">
            <div className="product-image">
                <img src="/images/moju.png" alt="" />
            </div>
            <div className="content-and-button">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, amet? Blanditiis laboriosam officia totam esse! Rem perferendis quae quidem est animi voluptas doloremque enim libero?</p>
                <h4>Ingridients</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim minima possimus delectus dolores saepe. Doloremque fugit ex ipsum!</p>
                <button>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
