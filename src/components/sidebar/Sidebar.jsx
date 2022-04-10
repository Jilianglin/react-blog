import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        {/* container sidebar and other item */}
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span> 
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" 
                alt="" 
                className="sidebarImg" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel placerat mi. 
            Donec auctor massa vitae ex porta volutpat.consectetur adipiscing.
            </p>
        </div>
        <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span> 
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sytle</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-youtube-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>


    </div>
  )
}
