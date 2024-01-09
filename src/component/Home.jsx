import React from 'react'
import Home_blog from './Home-blog'
import Form_1 from './Form-1'
import Know_about from "./Know_about"

const Home = () => {
  return (
    <>
      <Home_blog />



      <div className=" row container-fluid align-content-center m-0 " style={{ height: "120vh" }}>
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
          
        </div>
      </div>

      <Know_about />

      <div className="container-fluid p-5">
        <div className="text-center m-4">
          <h2 className='fnt-1 d-inline'
            style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>
            Tools
          </h2>
        </div>
        <div className="row p-5">
          <div className="col-lg-3 offset-lg-2 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
          <div className="col-lg-3 offset-lg-2 mt-lg-0 mt-5 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-lg-3 offset-lg-1 text-center p-4 hexagon-background hbr-1 pointer d-flex " style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
          <div className="col-lg-3 offset-lg-4 mt-lg-0 mt-5 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5  d-flex'>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-lg-3 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
          <div className="col-lg-3 offset-lg-6 mt-lg-0 mt-5 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-lg-3 offset-lg-2 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
          </div>
          <div className="col-lg-3 offset-lg-2 mt-lg-0 mt-5 text-center p-4 hexagon-background hbr-1 pointer d-flex" style={{ backgroundColor: "var(--primary-text-background-color-sub)" }} >
            <div className='hexagon-background bgclr-1 h-100 w-25 position-relative ms-5 '>
              <i className="fa-solid fa-phone fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i>
            </div>
            <h5 className="ms-4">Kundli</h5>
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


        <Form_1 />


      </div>

    </>
  )
}

export default Home


