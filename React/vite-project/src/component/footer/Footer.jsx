import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="text-light mt-5 app-footer">

      <div className="container py-4">

        <div className="row">

          <div className="col-md-6">
            <h4>MyApp</h4>

            <p>
              Building responsive and modern web applications with React.
            </p>
          </div>

          <div className="col-md-3">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>Dashboard</li>
              <li>About</li>
              <li>Contact</li>

            </ul>

          </div>

          <div className="col-md-3">

            <h5>Contact</h5>

            <p>Email: support@myapp.com</p>

            <p>Phone: +91 9876543210</p>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 MyApp. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}


