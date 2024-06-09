import React, { useState } from 'react'
import Maps from './Map'
import Footer from './home/Footer'

const Contact = () => {

  const [subbutton,setSubbutton]=useState(true);

  const handlesubmit =(e) =>{
    e.preventDefault();
    //console.log(e.target.input.value)
    setSubbutton(false)
    //console.log(subbutton)
  }

  return (
    <div>
        <div className="titleabout">
            <p className='abouts'>Contact Us</p>
        </div>
        <div className="contactcontent">
            <div className="contactusleft">
                <p className="contactushead">Contact Us</p>
                <p className="contactustext">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                {
                  subbutton===true?
                  <form className='contactform' onSubmit={handlesubmit}>
                  <div className="contactname">
                    <p className="contactinfo">NAME</p>
                    <input type="text" placeholder='Enter your name' className='contactinput'/>
                  </div>
                  <div className="contactemail">
                    <p className="contactinfo">EMAIL</p>
                    <input type="email" placeholder='Enter your email' className='contactinput'
                       inputprops={{
                        onInvalid: (e) => e.target.setCustomValidity('Invalid Custom message'),
                        onInput: (e) => e.target.setCustomValidity(''),
                      }}  />
                  </div>
                  <div className="contactmessage">
                    <p className="contactinfo">MESSAGE</p>
                    <textarea type="text" placeholder='Hi there, I am reaching out because I think we can collab...' className='contactinputmessage'/>
                  </div>
                  <button className="submitform">
                    S U B M I T
                  </button>
                </form>
                :
                  <p className="thanksforsub">Thank you! Your submission has been received!</p>

              }
                
            </div>
            <div className="outaddressright">
              <p className="ouroffices addresstext">OUR OFFICES</p>
              <p className="ourofficestext addresstextpara">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              <p className="ouroffice addresstext">OUR OFFICE</p>
              <p className="ourofficetext addresstextpara">908 Broadway,<br />
                                          San Francisco,<br />
                                          CA 94133 <br /></p>
              <p className="working addresstext">WORKING HOURS</p>
              <p className="workingtext addresstextpara">9AM - 3PM, Mon to Fri</p>
              <p className="contactinformation addresstext">CONTACT</p>
              <p className="contactinformationtext addresstextpara">contact@business.com <br />
                                                    01 (650) 658 6822</p>
            </div>
        </div>
        <div className="googlemap">
          <Maps />
        </div>
        <Footer />
    </div>
  )
}

export default Contact