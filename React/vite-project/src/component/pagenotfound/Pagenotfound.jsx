import React from 'react'
import { Link } from 'react-router-dom'
import './Pagenotfound.css'

const Pagenotfound = () => {
  return (
    <div className="container text-center py-5 not-found-page">

      <h1
        className="display-1 fw-bold text-danger"
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p className="text-muted">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Back to Dashboard
      </Link>

    </div>
  )
}

export default Pagenotfound;
