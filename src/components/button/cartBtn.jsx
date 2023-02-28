import './button.scss'
import { useContext } from 'react';
import { productsContext } from '../../App';

const CartBtn = ({ classes, css }) => {
  const { cartData } = useContext(productsContext);
  return (
    <button className={`btn ${classes}`} style={{ height: "auto", width: "auto", padding: "5px 10px", ...css }}><i className='fa-solid fa-cart-shopping' ><span className='card-badge'>{cartData.length}</span></i></button>
  )
}

export default CartBtn;