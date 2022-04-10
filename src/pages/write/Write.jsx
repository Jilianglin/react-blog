import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/733846/pexels-photo-733846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="writeImg" 
            alt="" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/> 
                {/* can use classname and do it in css file */}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                {/* autoFocus will always be true when you refresh page, means the cursor will flash on the input field */}
            </div>
            <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." 
                            type="text" 
                            className="writeInput writeText" 
                    ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>

    </div>
  )
}
