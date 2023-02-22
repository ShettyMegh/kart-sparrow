
const Box = ({ text, height = "auto", width = "auto", bgColor = "#f2f2f2", css }) => {
  return (
    <>
      <div className="box" style={{ display: "inline-block", backgroundColor: bgColor, padding: '4px', height: height, width: width, ...css }}>{text}</div>
    </>
  )
}

export default Box;