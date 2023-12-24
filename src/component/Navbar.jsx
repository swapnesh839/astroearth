import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const phoneNumber = '+(12)34567890';
  const emailAddress = 'example@example.com';

  const location = useLocation().pathname.slice("1")
  return (
    <>
      <div style={{ backgroundColor: "var(--secondary-color)" }}>
        <p className="text-white lh-lg">
          <span>Phone: <i className="fa-solid fa-envelope fa-sm" style={{ color: "#ffffff" }}> </i>
            <Link className="text-white link-underline-opacity-0" to={`tel:${phoneNumber}`}> {"" + phoneNumber}</Link></span>
          <span className="ms-3">Email: <i className="fa-solid fa-phone fa-sm" style={{ color: "#ffffff" }}> </i>
            <Link className="text-white link-underline-opacity-0" to={`mailto:${emailAddress}`}> {emailAddress}</Link></span>
        </p>

      </div>
      <nav className="navbar navbar-expand-lg text-center" data-bs-theme="dark" >
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/">
            <img src="https://astroearth.org/wp-content/uploads/2023/07/astrologer-logo-2_cropped.png" width={"250px"} className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
          <ul className="navbar-nav text-white" id='navbar-nav'>
            <li className="nav-item m-auto">
              <Link className={`nav-link ${location === "" ? "active" : ""}`} aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  ${location === "About" ? "active" : ""}`} to="/About">ABOUT US</Link>
            </li>
            <li className="nav-item dropdown-center">
              <Link className={`nav-link ${location === "Services" ? "active" : ""}`} to="/Services">SERVICES</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className={`nav-link ${location === "Tutorial" ? "active" : ""}`} aria-current="page" to="/Tutorial">TUTORIAL</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className={`nav-link ${location === "Tools" ? "active" : ""}`} to="/Tools">TOOLS</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
                <li><Link className="dropdown-item text-center" to="/">item</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "Blog" ? "active" : ""}`} to="/Blog">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "ContactUs" ? "active" : ""}`} to="/ContactUs">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar