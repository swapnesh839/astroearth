import React from 'react'
import Home_blog from './Home-blog'

const Home = () => {
  return (
    <>
      <Home_blog />



      <div className=" row container-fluid align-content-center m-0 py-5" style={{ height: "120vh" }}>
        <div className="col-lg-6">
          <img src="https://astroearth.org/wp-content/uploads/2023/07/astrologer-logo-2_cropped.png" className="d-inline-block align-text-top w-75 ms-5 mt-5" />
        </div>
        <div className="col-lg-6">
          <h2 className='fnt-1 mb-5 d-inline'
            style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Know About
          </h2>
          <p className="mt-5">Welcome to Astroearth, your celestial gateway to the
            captivating world of Astrology! Our passion for this ancient art drives us to offer you a compre
            hensive platform for exploration and understanding.

            Our primary mission is to empower and enlighten individuals with the
            profound wisdom of Astrology. We believe that the positions and movements of celestial
            bodies hold valuable insights into our lives,
            guiding us towards self-awareness and personal growth. Our commitment
            to this mission is reflected in the array of services and resources we provide. <br />

            One of our key offerings is personalized Horoscope Readings. Our team of
            expert astrologers meticulously analyze the cosmic alignments and provide you with accurate daily,
            weekly, and monthly horoscopes, tailored to your zodiac sign. Gain valuable
            knowledge about upcoming events, opportunities, and potential challenges, allowing you to make
            informed decisions.</p>
          <button type="button" className="btn btn-lg bg-info rounded-0 w-25 bgclr-1 fnt-3 fw-bold"> Read more</button>
          <div className="container w-75 mt-3 ms-0 row rounded-5 h-25 align-content-center" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }}>
            <div className="col-3 d-flex">
              <div className='rounded-circle bgclr-1 h-75 w-75 m-auto position-relative'>
                <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
              </div>
            </div>
            <div className="col-9 ps-5">
              <p>Contact Our Expert Astrologers</p>
              <h4 className='tclr-1'>+ (91) 90400-92651</h4>
            </div>
          </div>
        </div>
      </div>


      <div className="grid-container">
        <div className="grid-item">
          <div className="h-25 w-50 mt-4 m-auto">
            <div className='rounded-circle bgclr-1 h-75 w-75 m-auto position-relative'>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
          </div>
          <div>
            <h5 className='fnt-1 mb-5 d-inline bg-black'
              style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Know About
            </h5>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="text-center">
          <h3 className='fnt-1 d-inline '
            style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Know Your Zodiac Sign
          </h3>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident <br />
            a sunt porro iste enim laborum rerum soluta quibusdam, itaque expedita voluptatem!</p>
        </div>
        <div className="mt-5 bg-dark rounded-1 p-5">
          <form>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Date">Date Of Birth</label> <br />
                <input type="date" id='Date' className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Time">Time Of Birth</label> <br />
                <input type="time" id='Time' className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Text">Place Of Birth</label> <br />
                <input type="text" id='Text' className="form-control" />
              </div>
              <div className="col-md-3 df">
              <button type="button" className="btn btn-lg rounded-0 w-100  bgclr-1 fnt-3 fw-bold mt-4 rounded-2"> Read more</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Home


