import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light app-navbar">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand-mark">✦</span> The Notebook
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Journal
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}
