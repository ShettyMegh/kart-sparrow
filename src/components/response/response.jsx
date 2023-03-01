const Response = ({ message = "It Look's So Empty Here", loading = false, gif, noImage = false, textClass }) => {
  const images = ["https://media.tenor.com/xGltAvilB9sAAAAM/chad-cat.gif", "https://img-9gag-fun.9cache.com/photo/a0ZVrvO_460swp.webp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf2rNQ5npYtf9n6qCJsOQzRfsQygH4ORBow&usqp=CAU", "https://media.wired.com/photos/5a5547032b3a7778f5ca06cb/191:100/w_2291,h_1199,c_limit/Doggo-FeatureArt2-104685145.jpg", "https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp", "https://www.meme-arsenal.com/memes/f7dfbfd654e5cb1552a60f1510b5cf41.jpg", "https://media.tenor.com/Nfct9RreQfUAAAAd/dog-meme.gif", "https://www.indy100.com/media-library/alive-became-a-viral-meme-after-looking-a-little-worse-for-wear.png?id=28060079&width=400&height=225&coordinates=0%2C442%2C0%2C442&quality=80"]
  const idx = Math.floor(Math.random() * images.length);

  if (loading) return (
    <div className="d-flex flex-column align-items-center" style={{ marginTop: "15%" }}>
      <img src={gif} style={{ borderRadius: "50%" }} alt="loading" />
    </div>
  )
  return (
    <div className="response">
      <div className="response-container" style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "8%" }}>
        {!noImage && <img src={images[idx]} width="550px" style={{ maxHeight: "400px" }} alt="" />}
        <h4 className={`my-5 ${textClass}`} style={{ textAlign: "center" }}>{message}</h4>
      </div>
    </div>

  )
}

export default Response;