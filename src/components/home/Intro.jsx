import React from 'react'

const intro = () => {

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
        <div className="heading">
            <h1>
                Grow your business.
            </h1>
            <h2>
                Give your business a boost with a beautifully crafted homepage.
            </h2>
            <button className="learn">LEARN  MORE</button>
        </div>
        <div className="whatwebel">
            <p className='whatwe'>WHAT WE BELIEVE IN</p>
            <p className="grow">Grow your business, establish your brand, and put your customers first.</p>
        </div>
        <div className="abouthome">
            <div className="aboutwho">
                <p className="abouthead">ABOUT</p>
                <p className="aboutwhowe">Who we are</p>
                <p className="aboutpara">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</p>
                <button className="contact">L E A R N &nbsp; &nbsp; M O R E</button>
            </div>
            <div className="abouthomeimage"></div>
        </div>
        <div className="teamhome">
            <div className="teamwho">
                <p className="teamhead">TEAM</p>
                <p className="teamwhowe">What we do</p>
                <p className="teampara">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</p>
                <button className="contact">L E A R N &nbsp; &nbsp; M O R E</button>
            </div>
            <div className="teamhomeimage"></div>
        </div>
        <div className="aboutus">
            <p className="aboutusss">ABOUT US</p>
            <p className="companynews">Company News</p>
            <div className="blogs">
                {blogs.map((blog) => 
                <div className='blog'>
                    <p className="blogheading"><a href="./">{blog.name}</a></p>
                    <p className="blogdate">{blog.date}</p>
                    <p className="blogcontent">{blog.content}</p>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default intro