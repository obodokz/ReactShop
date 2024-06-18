import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay__left'>
          <div className="productdisplay__img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay__img">
            <img className='productdisplay__main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay__right">
            <h1>{product.name}</h1>
            <div className='productdisplay__right-star'>
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={start_dull_icon} alt="" />
              <p>(1234)</p>
            </div>
            <div className="productdisplay__right-prices">
              <div className="productdisplay__right_price-old">
                ${product.old_price}
              </div>
              <div className="productdisplay__right_price-new">
                ${product.new_price}
              </div>
            </div>
            <div className="productdisplay__right-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint autem doloribus voluptatum illo enim corrupti molestiae? Iure aperiam enim cupiditate minima. Consectetur eos nisi qui, nulla nobis, adipisci quaerat quo animi recusandae non et quibusdam cumque similique laborum nostrum cum harum. Rerum placeat magni itaque aperiam, ullam assumenda tempora tempore quis vel sint dolore reprehenderit fugit dicta veniam numquam ut saepe sit ab harum earum! Unde, fugit. Nobis, quod? Iusto itaque veniam deserunt accusantium consequuntur optio, dolor fugit. Molestias, sit natus quibusdam esse pariatur similique assumenda, architecto incidunt repellat, doloribus laborum maxime necessitatibus officia eius praesentium corrupti facere velit!
            </div>
            <div className="productdisplay__right-size">
              <h1>Select Size</h1>
              <div className='productdisplay__right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
              <button onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
              <p className='productdisplay__right-category'>
                <span>Category: </span>
                Women, T-Shirt
              </p>
              <p className='productdisplay__right-category'>
                <span>Tags: </span>
                Modern, Latest
              </p>
            
        </div>
    </div>
  )
}

export default ProductDisplay