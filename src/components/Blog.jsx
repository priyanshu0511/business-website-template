import React from 'react'
//import Navbar from './home/Navbar'
import Footer from './home/Footer'

const Blog = () => {

    const blogs=[{
        id:1,
        name: "10 Quick Tips About Blogging",
        date: "May 27, 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },{
        id:2,
        name: "15 Best Blogs To Follow About Web Design",
        date: "May 27, 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },{
        id:3,
        name: "7 of the Best Examples of Beautiful Blog Design",
        date: "May 27, 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },]

  return (
    <div>
        <div className="titleabout">
            <p className='abouts'>Our Blog</p>
        </div>
        <div className="whatwebest">
            <p className="whatbestat">APERIAM HARUM</p>
            <p className="ourservices">Our Stories</p>
            <div className="projects">
                {blogs.map((x)=>
                    <div className="bloggrid">
                        <div className="blogimg"></div>
                        <div className="blogtext">
                            <div className="blogtitle">{x.name}</div>
                            <div className="blogconten">{x.content}</div>
                            <div className="blogdates">{x.date}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog