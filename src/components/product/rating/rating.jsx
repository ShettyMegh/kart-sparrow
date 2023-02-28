import './rating.scss'

const Rating = ({ rating, classes = "d-flex" }) => {
  return (
    <div className={`card-rating ${classes}`}>
      <i className="fa-sharp fa-solid fa-star"> </i>
      <p>
        {rating.rate}/5.0
        <span>({rating.count} customers reviewed)</span>
      </p>
    </div>
  )
}

export default Rating;