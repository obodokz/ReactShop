import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import '../Assets/all_product'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Продукты</p>
            <p>Заголовок</p>
            <p>Цена</p>
            <p>Количество</p>
            <p>Общая</p>
            <p>Удалить</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return 
                <div>
                    <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr/>
                </div>
            }
        return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Всего в корзине</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Промежуточный итог</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className='cartitems-total-item'>
                        <p>Стоимость доставки</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Общая стоимость</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Оформить заказ</button>
            </div>
            <div className='cartitems-promocode'>
                <p>Ваш промокод: </p>
                <div className='cartitems-promobox'>
                    <input type="text" placeholder='Промокод' />
                    <button>Принять</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems