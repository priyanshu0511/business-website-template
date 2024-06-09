import React from 'react'
//import Navbar from './home/Navbar'
import Footer from './home/Footer'

const About = () => {

    const services=[{
        id: 1,
        serv:"Support",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
    },{
        id: 2,
        serv:"Strategy",
        text:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
    },{
        id: 3,
        serv:"Management",
        text:"Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
    },{
        id: 4,
        serv:"Training",
        text:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"
    },{
        id: 5,
        serv:"Consulting",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
    },{
        id: 6,
        serv:"Events",
        text:"Blind texts it is an almost unorthographic life One day however a small line of blind text by the name"
    },]

  return (
    <div>
        <div className="titleabout">
            <p className='abouts'>About Us</p>
        </div>
        <div className="aboutinfotitle">
            <p>We're a group of creative thinkers who have built a business to change the world.</p>
        </div>
        <div className="aboutinfopara">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            ‍<br/>
            <br />
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
            ‍<br />
            <br />
            She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
        </div>
        <div className="whatwebest">
            <p className="whatbestat">WHAT WE ARE BEST AT</p>
            <p className="ourservices">Our Services</p>
            <div className="services">
                {services.map((x)=>
                    <div className="servicegrid">
                        <div className="serviceimg"></div>
                        <div className="servicehead">{x.serv}</div>
                        <div className="servicetext">{x.text}</div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About