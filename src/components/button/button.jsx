import './button.scss'

const Button = ({ text = "Click", classes = "btn-primary", css, width = "auto", height = "auto", type = "", padding = "5px 10px", action = null }) => {

  return (
    <button type={type} className={`btn ${classes}`} style={{ height: height, width: width, padding: padding, ...css }} onClick={action}>{text}</button>
  )
}

export default Button;