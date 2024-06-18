import React, {useContext} from 'react'
import './CSS/shopcategories.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/items/Item'

const ShopCategories = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop__categories'>
      <img className='shopcategory__banner' src={props.banner} alt="" />
      <div className='shopcategory__index-sort'>
        <p>
          <span>Показать 1-12</span> из 36 продуктов
        </p>
        <div className='shopcategory__sort'>
          Сортирован <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory__products">
        {all_product.map((item, i)=>{
          if(props.category===item.category)
          {
            return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })
        }
      </div>
      <div className='shopcategory__loadmore'>
        Показать больше
      </div>
    </div>
  )
}

export default ShopCategories