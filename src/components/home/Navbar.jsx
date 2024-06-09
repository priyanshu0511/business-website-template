import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navLinks=[{
        id:1,
        text: "About",
        link:"./about"
    },{
        id:2,
        text: "Work",
        link:"./work"
    },{
        id:3,
        text: "Team",
        link:"./team"
    },{
        id:4,
        text: "Blog",
        link:"./blog"
    },{
        id:5,
        text: "Contact",
        link: './contact'
    }]

  return (
    <div>
        <div className="nav">
            <div className="logo"><Link to='/'>Business</Link></div>
            <div className="navlinks">
                <ul>
                    {navLinks.map((nav) => <li key={nav.id}><Link to={nav.link}><p>{nav.text}</p></Link></li>)}
                </ul>
            </div>
            <button className="contact">C O N T A C T &nbsp;&nbsp; U S</button>
        </div>
    </div>
  )
}

export default Navbar