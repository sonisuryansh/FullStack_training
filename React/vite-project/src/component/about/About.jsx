import './About.css'

export const About = () => {
  return (
     <div className="container py-5 about-page">

      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Welcome to Dashboard
        </h1>

        <p className="lead text-muted">
          Manage your application, monitor statistics and explore all
          available features from a single place.
        </p>

        <button className="btn btn-primary btn-lg about-btn">
          Get Started
        </button>

      </div>

      <div className="row mt-5 g-4">

        <div className="col-md-4">
          <div className="card shadow-sm about-card">
            <div className="card-body">
              <h5>Total Users</h5>
              <h2>1,250</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm about-card">
            <div className="card-body">
              <h5>Revenue</h5>
              <h2>$12,540</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm about-card">
            <div className="card-body">
              <h5>Projects</h5>
              <h2>58</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
