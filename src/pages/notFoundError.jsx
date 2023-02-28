import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: "2.5rem" }}>
        <video width="110%" style={{ maxWidth: "665px" }} height="" src="https://static.surveysparrow.com/site/assets/404/404-v2.mp4" autoPlay={true} loop={true} muted={true} playsInline={true}>
        </video>
        <Link to="/" style={{ margin: "20px 0px", color: "#7700FF" }}>Return to Home</Link>
      </div>

    </>
  )
}

export default NotFoundError;