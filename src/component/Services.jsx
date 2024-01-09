import React from 'react'
import Know_about from './Know_about'

const Services = () => {
  return (
    <div>
      <Know_about />
      <div className="container p-5 d-flex flex-column">
        <h2 className='fnt-1 d-inline m-auto'
          style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>
          What Our Customers Say ?
        </h2>
        <p className="p-5">
        Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde dolore magna aliquapspendisse and the gravida.
        </p>
      </div>
    </div>
  )
}

export default Services