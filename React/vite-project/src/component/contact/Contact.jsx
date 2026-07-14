import './Contact.css'

const Contact = () => {
  return (
      <div className="container py-5 contact-page">

      <div className="row justify-content-center">

        <div className="col-md-7">

          <div className="card shadow contact-card">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Contact Us
              </h2>

              <form>

                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label>Message</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact;
