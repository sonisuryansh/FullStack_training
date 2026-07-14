import './Footer.css'

export const Footer = () => {
  return (
    <footer className="text-light mt-5 app-footer">

      <div className="container py-4">

        <div className="row">

          <div className="col-md-6">
            <h4>MyApp</h4>

            <p>
              A home for considered notes on creativity, design, and making.
            </p>
          </div>

          <div className="col-md-3">

            <h5>Explore</h5>

            <ul className="list-unstyled">

              <li>Latest stories</li>
              <li>About the journal</li>
              <li>Newsletter</li>

            </ul>

          </div>

          <div className="col-md-3">

            <h5>Say hello</h5>

            <p>hello@thenotebook.com</p>

            <p>Made with care in India</p>

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


