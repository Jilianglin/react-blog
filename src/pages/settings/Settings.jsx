import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img className="settingsPPImg"
                        src="https://images.pexels.com/photos/733846/pexels-photo-733846.jpeg?cs=srgb&dl=pexels-mark-koller-733846.jpg&fm=jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="dfsjk" />
                <label>Email</label>
                <input type="email" placeholder="dfsjk@gmail.com" />
                <label>Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>

            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
