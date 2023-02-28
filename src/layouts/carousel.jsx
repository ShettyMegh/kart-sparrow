const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-MainBanner-P2-Clearance.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-MainBanner-P3-HomeKitchen-HomeExpressionsJaipurFabric-4080.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-MainBanner-P4-BestBrandsHim-DennislingoTheBearHouse-Min60.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel;