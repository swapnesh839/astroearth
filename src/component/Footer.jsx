import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid border-1 border-top fnt-1">
            <div className="row p-5" style={{ backgroundColor: "var(--tertiary-color)" }}>
                <div className="col-lg-3">
                    <img src="https://astroearth.org/wp-content/uploads/2023/07/astrologer-logo-2_cropped.png" className="d-inline-block align-text-top w-100" />
                    <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                    <h3 className="tclr-1 mb-5">Follow Us</h3>
                    <div className="container-fluid row d-flex m-0 p-0 ">
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-brands fa-facebook fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-solid fa-x fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-brands fa-instagram fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-brands fa-reddit-alien fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-brands fa-quora fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                        <div className="col-2 h-25px">
                            <div className="rounded-circle hbr-1 border border-light position-relative h-100 w-100 p-3"><i className="fa-brands fa-youtube fa-lg position-absolute top-50 start-50 translate-middle" style={{ color: "white" }}></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ps-xl-5">
                    <div className="mt-4">
                        <h2 className='fnt-1 pb-1 mb-5 d-inline' style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Our Services</h2>
                    </div>
                    <ul className="list-group ms-4" style={{ color: "var(--primary-text-background-color)", listStyle: "square" }}>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Career Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Education Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Child Birth Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Vedic Card Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Health Issue Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Numerology Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Relationship Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Ask Any Question</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className="mt-4">
                        <h2 className='fnt-1 pb-1 mb-5 d-inline' style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Quick Links</h2>
                    </div>
                    <ul className="list-group ms-4" style={{ color: "var(--primary-text-background-color)", listStyle: "square" }}>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Career Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Education Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Child Birth Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Vedic Card Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Health Issue Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Numerology Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Relationship Reading</a></li>
                        <li className="fs-5 mt-1 ms-1 "><a href="" className="tclr-2 text-decoration-none">Ask Any Question</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className="mt-4">
                        <h2 className='fnt-1 pb-1 mb-5 d-inline' style={{ border: "3px solid var(--primary-text-background-color)", borderTop: "0", borderRight: "0", borderLeft: "0" }}>Contact Us</h2>
                    </div>
                    <ul className="list-group ms-4 " style={{ color: "var(--primary-text-background-color)", listStyle: "none" }}>
                        <li className="fs-5 mt-1 ms-1 "><div className="d-flex mt-2"><i className="fa-solid fa-location-dot fa-lg mt-3"></i><p className="ps-1 fs-6 text-light">Erendai, Gobindpur, Bhadrak, Odisha - 766112</p></div></li>
                        <li className="fs-5 mt-1 ms-1 "><div className="d-flex mt-2"><i className="fa-solid fa-location-dot fa-lg mt-3"></i><p className="ps-1 fs-6 text-light">Erendai, Gobindpur, Bhadrak, Odisha - 766112</p></div></li>
                        <li className="fs-5 mt-1 ms-1 "><div className="d-flex mt-2"><i className="fa-solid fa-location-dot fa-lg mt-3"></i><p className="ps-1 fs-6 text-light">Erendai, Gobindpur, Bhadrak, Odisha - 766112</p></div></li>
                    </ul>
                </div>
            </div>
            <div className="fs-5 p-4" style={{ backgroundColor: "var(--primary-color)" }}>
                <p className="text-center p-0 m-0">Copyright @ 2023 astroearth.org | Powered by great-expert.com</p>
            </div>
        </div>
    )
}

export default Footer