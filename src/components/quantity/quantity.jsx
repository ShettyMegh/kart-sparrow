import './quantity.scss';
import Button from '../button/button';
import Box from '../box/box';
import { useEffect, useContext } from 'react';
import { productsContext } from '../../App';


const Quantity = ({ min = 1, max = 5, quant, setQuant, btnCss }) => {
  quant > 5 && setQuant(5);

  const handleDecr = () => {
    setQuant(prevQuant => {
      return (prevQuant <= min) ? min : prevQuant - 1;
    });
  }

  const handleIncr = () => {
    setQuant(prevQuant => {
      return (prevQuant >= max) ? max : prevQuant + 1;
    });
  }


  return (
    <div className='d-inline-flex flex-row quantity-card'>
      <Button text="-" height='30px' width='30px' css={{ borderRadius: "50%", padding: "2px", color: "white", fontSize: "12px", ...btnCss }} isDisabled={(quant <= 1) ? true : false} onClick={handleDecr} />
      <input type="text" className='quantInp' value={quant} disabled />
      {/* <Box onChange={handleQuantChange} width='20px' height='30px' bgColor='transparent' text={quant} css={{ textAlign: "center" }} /> */}
      <Button text="+" height='30px' width='30px' css={{ borderRadius: "50%", padding: "2px", color: "white", fontSize: "12px", ...btnCss }} isDisabled={(quant >= 5) ? true : false} onClick={handleIncr} />
    </div>
  )
}

export default Quantity;