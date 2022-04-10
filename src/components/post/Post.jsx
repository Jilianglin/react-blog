import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://images.pexels.com/photos/4555923/pexels-photo-4555923.jpeg"
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
                <span className="postCat"></span>
                <span className="postCat"></span>
                <span className="postCat"></span>
                <span className="postCat"></span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis veritatis ad,
             eligendi fugit, quisquam reiciendis aliquam doloremque animi qui et atque facilis 
             fuga debitis nisi molestiae. Eaque, illo explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis veritatis ad,
             eligendi fugit, quisquam reiciendis aliquam doloremque animi qui et atque facilis 
             fuga debitis nisi molestiae. Eaque, illo explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis veritatis ad,
             eligendi fugit, quisquam reiciendis aliquam doloremque animi qui et atque facilis 
             fuga debitis nisi molestiae. Eaque, illo explicabo?
        </p>
    </div>
  )
}
