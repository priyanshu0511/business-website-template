import React from 'react'
//import Navbar from './home/Navbar'
import Footer from './home/Footer'

const Team = () => {

    const people=[{
        name: "Michael Fassbender",
        desig: "CEO"
    },{
        name: "Jason Smith",
        desig: "Product Designer"
    },{
        name: "Amanda Peterson",
        desig: "Design Director"
    },{
        name: "Billy Maxwell",
        desig: "Lead Developer"
    },{
        name: "Priyanshu Singh",
        desig: "CTO"
    },{
        name: "Joshua Harris",
        desig: "Recruiter"
    }]

  return (
    <div>
        <div className="titleabout">
            <p className='abouts'>Team</p>
        </div>
        <div className="whatwebest">
            <p className="whatbestat">OUR PEOPLE</p>
            <p className="ourservices">Our World-Class Team</p>
            <div className="services">
                {people.map((x)=>
                    <div className="teamgrid">
                        <div className="peopleimg"></div>
                        <div className="peoplehead">{x.name}</div>
                        <div className="peopletext">{x.desig}</div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Team