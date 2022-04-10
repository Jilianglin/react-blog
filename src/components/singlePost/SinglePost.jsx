import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/1567058/pexels-photo-1567058.jpeg?cs=srgb&dl=pexels-johannes-plenio-1567058.jpg&fm=jpg" 
            alt="" 
            className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>name</b></span>
                <span className="singlePostDate"> 1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro! Rerum laborum quia, mollitia quaerat perspiciatis aliquam earum vitae facere blanditiis aut excepturi commodi quod consequuntur itaque sit iste hic.
            </p>
        </div>
    </div>
  )
}
