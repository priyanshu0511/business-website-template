import React from 'react'
//import Navbar from './home/Navbar'
import Footer from './home/Footer'

const Work = () => {

    const projects=[{
        title: "Project #1",
        name: "Art Direction"
    },{
        title: "Project #2",
        name: "Product Design"
    },{
        title: "Project #3",
        name: "Animation"
    }]

  return (
    <div>
        <div className="titleabout">
            <p className='abouts'>Our work</p>
        </div>
        <div className="whatwebest">
            <p className="whatbestat">OUR WORK</p>
            <p className="ourservices">Team Projects</p>
            <div className="projects">
                {projects.map((x)=>
                    <div className="projectgrid">
                        <div className="projectimg"></div>
                        <div className="projecttitle">{x.title}</div>
                        <div className="projectname">{x.name}</div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Work