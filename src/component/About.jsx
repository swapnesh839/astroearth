import React from 'react'

const About = () => {
  return (
    <div style={{backgroundColor :"var(--tertiary-color)"}}>
      <div className="containe d-flex flex-column p-4">
        <h2 className='fnt-1 d-inline m-auto'
          style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>
          ABOUT US
        </h2>
        <p className="mt-5 p-3">
          Welcome to Astroearth, your celestial gateway to the captivating world of Astrology! Our passion for this ancient art drives us to offer you a comprehensive platform for exploration and understanding.
          Our primary mission is to empower and enlighten individuals with the profound wisdom of Astrology. We believe that the positions and movements of celestial bodies hold valuable insights into our lives, guiding us towards self-awareness and personal growth. Our commitment to this mission is reflected in the array of services and resources we provide.

          One of our key offerings is personalized Horoscope Readings. Our team of expert astrologers meticulously analyze the cosmic alignments and provide you with accurate daily, weekly, and monthly horoscopes, tailored to your zodiac sign. Gain valuable knowledge about upcoming events, opportunities, and potential challenges, allowing you to make informed decisions.

          For a deeper dive into your cosmic identity, our Birth Chart Analysis will unravel the mysteries encoded in the stars at the time of your birth. Discover your unique personality traits, innate talents, and life path, helping you navigate life with greater clarity and purpose.

          We understand the significance of relationships, and our Compatibility Reports are designed to enhance your understanding of interpersonal dynamics. By comparing birth charts, we reveal the strengths and potential areas of conflict between you and your loved ones, fostering better connections and communication.
          Our Astrology Articles, authored by seasoned astrologers, cover a vast range of topics, from planetary transits to zodiac sign characteristics. Stay updated with the latest celestial events and expand your knowledge to enrich your astrological journey.

          At Astroearth, we are committed to providing personalized Astrological Guidance. Consult our expert astrologers to seek answers to your most pressing questions about career, relationships, or personal growth. Receive guidance and clarity as you navigate the various facets of life.
          For those eager to deepen their understanding, we offer comprehensive Astrology Courses suitable for enthusiasts of all levels. Learn to read birth charts, interpret astrological aspects, and decode the language of the stars under the guidance of experienced mentors.
          We pride ourselves on maintaining the highest standards of accuracy and authenticity. At Astroearth, we believe that astrology is a powerful tool for self-discovery and empowerment. Join us on this enlightening journey through the cosmos, where ancient wisdom meets modern understanding.
          Thank you for visiting Astroearth. Let the stars illuminate your path to a more profound understanding of yourself and the universe around you!
        </p>

      </div>
      <div className="row container-fluid p-5">
        <div className="col-md-6 p-3">
          <h2 className='fnt-1 d-inline m-3'
            style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>
            Why Choose Us ?
          </h2>
          <p className="m-3">If you are looking for accurate, personalized, and compassionate astrological services, We encourage you to choose us. We are here to help you on your journey to self-discovery and personal growth.</p>
        </div>
      </div>
    </div>
  )
}

export default About