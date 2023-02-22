import './quantity.scss';
import Button from '../button/button';
import Box from '../box/box';
import { useState } from 'react';

const Quantity = ({ min = 1, max = 5 }) => {
  const [quant, setQuant] = useState(min);

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
    <div className='d-flex flex-row'>
      <Button text="-" classes='btn-light' height='30px' width='30px' css={{ borderRadius: "50%", padding: "2px", backgroundColor: "#7700FF", color: "white", fontSize: "12px" }} action={handleDecr} />
      <Box width='20px' height='30px' bgColor='transparent' text={quant} css={{ textAlign: "center" }} />
      <Button text="+" classes='btn-light' height='30px' width='30px' css={{ borderRadius: "50%", padding: "2px", backgroundColor: "#7700FF", color: "white" }} action={handleIncr} />
    </div>
  )
}

export default Quantity;