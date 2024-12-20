import "./App.css";
import Logomdm from "./Logomdm";

function App() {
  return (
    <>
      <div>
        {/* Header Section */}
        <div className="container-fluid bg-white py-2 text-dark">
          <div className="container d-flex justify-content-between align-items-center">
            <div>World's Largest Medical Equipment Market Place</div>
            <div>
              <a className="nav-link d-inline text-dark" href="#">
                My account
              </a>
              <span> | </span>
              <a className="nav-link d-inline text-dark" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <hr className="header-line" />
        </div>

        {/* Logo Section */}
        <Logomdm/>

        {/* Main Section */}
        <div className="main-section">
          <img src="/map.57c384e0.svg" alt="Background Image" />
          <div className="overlay container">
            <div className="row">
              {/* Left side content */}
              <div className="col-md-6 text-left">
                <h2 className="text-start">Sell on 1mdm.com</h2>
                <h1 className="text-start fw-bold">
                  Reach millions of B2B buyers globally
                </h1>
                <br />
                <div className="text-start">
                  <button className="btn btn-danger rounded-pill m-0">
                    Start selling
                  </button>
                  <button className="btn btn-outline-danger rounded-pill m-2">
                    Chat with consultant
                  </button>
                </div>
              </div>

              {/* Right side content */}
              <div className="col-md-6 text-right">
                <p className="fs-4 fw-bold">
                  26,000,000 active buyers globally
                </p>
                <p className="fs-4 fw-bold">400,000 product inquiries daily</p>
                <p className="fs-4 fw-bold">
                  200 countries and regions represented
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <section>
          <div className="container banner-bottom">
            <h2 className="banner-heading">
              1mdm.com is a leading ecommerce platform that <br /> helps SMEs go
              global
            </h2>
            <br />
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/TN7iJyc5Uks"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
                <br />
              </div>

              <div className="col">
                <p>
                  Connect with millions of business buyers from around the
                  world.
                </p>
                <br />
                <p>
                  Get the tools and know-how to build a successful ecommerce
                  presence for your business.
                </p>
                <br />
                <p>
                  Pocket more from each sale, with take rates as low as 0% in
                  some cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Redline Section */}
        <section className="redline">
          <h1>
            Largest number of products & categories of <br /> medical devices on
            a single place - 1mdm.com
          </h1>
          <br />
          <h5>
            Connect with buyers worldwide for your product & <br /> start
            selling now.
          </h5>
        </section>

        {/* Tool Suite Section */}
        <section className="box">
          <h2 style={{ color: "#a10005" }} className="text-align-center">
            Grow your business with a suite of tools built for you
          </h2>
          <br />
          <br />
          <br />

          <div className="container">
            <div className="row tabs">
              {/* Tab Navigation */}
              <div className="col-2">
                <div className="list-group" id="list-tab" role="tablist">
                  <a
                    className="list-group-item list-group-item-action active"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                  >
                    Custom storefront
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-bs-toggle="list"
                    href="#list-profile"
                    role="tab"
                    aria-controls="list-profile"
                  >
                    Advertising tools
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-messages-list"
                    data-bs-toggle="list"
                    href="#list-messages"
                    role="tab"
                    aria-controls="list-messages"
                  >
                    Data and analytics
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    id="list-settings-list"
                    data-bs-toggle="list"
                    href="#list-settings"
                    role="tab"
                    aria-controls="list-settings"
                  >
                    Customer support
                  </a>
                </div>
              </div>

              {/* Tab Content */}
              <div className="col-md-10">
                <div className="tab-content" id="nav-tabContent">
                  {/* Tab Content */}
                  <div
                    className="tab-pane fade show active"
                    id="list-home"
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                  >
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h1>Set up a store that showcases your brand</h1>
                            <p>
                              Differentiate yourself from the competition with a
                              full store dedicated to your products—no coding or
                              design skills necessary!
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/custstro.png"
                              className="img-fluid"
                              alt="1mdm-product"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Tab Content */}
                  <div
                    className="tab-pane fade"
                    id="list-profile"
                    role="tabpanel"
                    aria-labelledby="list-profile-list"
                  >
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h1>
                              Increase exposure by up to 120% with a suite of
                              smart advertising tools.
                            </h1>
                            <p>
                              Get your products placed in the right spots to be
                              noticed by the exact audience you are targeting.
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/1mdm-product-2.png"
                              className="img-fluid"
                              alt="1mdm-product"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Tab Content */}
                  <div
                    className="tab-pane fade"
                    id="list-messages"
                    role="tabpanel"
                    aria-labelledby="list-messages-list"
                  >
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h1>
                              Optimize your every move with in-depth data and
                              customer insights
                            </h1>
                            <p>
                              Improve performance with dashboards detailing
                              product exposure, click volume, spend, average
                              cost, store visits, and more.
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/1mdm-product-3.png"
                              className="img-fluid"
                              alt="1mdm-product"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Tab Content */}
                  <div
                    className="tab-pane fade"
                    id="list-settings"
                    role="tabpanel"
                    aria-labelledby="list-settings-list"
                  >
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h1>
                              Know you’re supported throughout your journey
                            </h1>
                            <p>
                              From onboarding help to online chats to local
                              support during business hours and account
                              optimization tips—we’re here for you.
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/1mdm-product-image-4.png"
                              className="img-fluid"
                              alt="1mdm-product"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider */}
        <section className="slider">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <h2 className="slider-heading">
              Success stories from 1mdm.com sellers
            </h2>
            <br />
            <br />
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container slider-content">
                  <div className="row align-items-center">
                    <div className="col-md-5 slider-left">
                      <i className="bi bi-quote"></i>
                      <p>
                        Mr David runs a manufacturing company that works in this
                        field of medical devices. With administrative and
                        production across the country. With full respect for
                        environment and several years’ experience using IP
                        systems that are conventional
                      </p>
                    </div>

                    <div className="col-md-7 slider-right">
                      <img
                        src="/davidsidebar.png"
                        className="img-fluid"
                        alt="1mdm-product"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container slider-content">
                  <div className="row align-items-center">
                    <div className="col-md-5 slider-left">
                      <i className="bi bi-quote"></i>
                      <p>
                        Lab Evolution is an import-export company of reagents
                        and laboratory equipment established over a decade. Our
                        company’s team of experts (in the instrumentations and
                        reagents market) carefully follows customers all over
                        the world. Lab Evolution is able to offer all the most
                        competitive and popular brands and the best quality
                        products for your laboratory.
                      </p>
                    </div>

                    <div className="col-md-7 slider-right">
                      <img
                        src="/flosidebar.png"
                        className="img-fluid"
                        alt="1mdm-product"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container slider-content">
                  <div className="row align-items-center">
                    <div className="col-md-5 slider-left">
                      <i className="bi bi-quote"></i>
                      <p>
                        Rupesh Kanna found himself in between jobs in 2016. He
                        started a blog, and wrote about his past experience as a
                        lab technician while sharing his knowledge on imaging
                        techniques. Kanna wanted to see more diversity in the
                        medical devices industry and specialized in high-quality
                        pigmented imaging process, so he decided to create his
                        own product line.
                      </p>
                    </div>

                    <div className="col-md-7 slider-right">
                      <img
                        src="/rupeshk.png"
                        className="img-fluid"
                        alt="1mdm-product"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container slider-content">
                  <div className="row align-items-center">
                    <div className="col-md-5 slider-left">
                      <i className="bi bi-quote"></i>
                      <p>
                        LTA International Global Services LLC is a Florida-based
                        export management company that sells top Medical device
                        products from major US brands to importers and
                        distributors around the globe. Founded in 1994 by Loyd,
                        LTA's long-standing expertise in logistics and pricing
                        has made it one of the most successful international
                        trade businesses in the USA.
                      </p>
                    </div>

                    <div className="col-md-7 slider-right">
                      <img
                        src="/la.png"
                        className="img-fluid"
                        alt="1mdm-product"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <i
                className="bi bi-chevron-left"
                style={{ fontSize: "30px" }}
              ></i>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <i
                className="bi bi-chevron-right"
                style={{ fontSize: "30px" }}
              ></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>

      <section className="footer-red">
        <h2 className="footer-text">Ready to Grow Your Business?</h2>
        <div className="footer-btn">
          <a href="#">
            <button
              id="footer-btn-red"
              style={{ marginRight: "7px", color: "#e60008" }}
              type="button"
              className="btn btn-light btn-lg rounded-pill"
            >
              Start selling
            </button>
          </a>
          <br />
          <a href="#" target="_blank">
            <button
              style={{ color: "#ffffff" }}
              type="button"
              className="btn btn-outline-light btn-lg rounded-pill"
            >
              Chat with consultant
            </button>
          </a>
          <br />
        </div>
      </section>

      <section className="footer-section">
        <div className="container footer">
          <div>
            <img className="logo" src="./footerlogo.png" alt="1mdm" />
            <br />
            <p className="footer-link">
              <br />
              One Medical Devices
              <br /> Market Place
            </p>
          </div>
          <br />
          <div className="link-section">
            <h5>Platform</h5>
            <br />
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Sell on 1MDM</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Pricing</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">About Us</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Our Story</p>
            </a>
            <a href="#" className="text-decoration-none" target="_blank">
              <p className="footer-link">Careers</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Blog</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Brands</p>
            </a>
          </div>

          <div className="link-section">
            <h5>Press Room</h5>
            <br />
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Images & B-roll</p>
            </a>
            <br />
            <h5>Policies</h5>
            <br />
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Terms of Service</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Privacy Policy</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Delivery Information</p>
            </a>
          </div>
          <br />
          <div className="contact-section">
            <h5>Reach Us</h5>
            <br />
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Corporate Information</p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="footer-link">Contact Us</p>
            </a>
          </div>
          <br />
        </div>
      </section>

      <section className="last-section">
        <br />
        <p className="text-black">© 2024 1MDM ⚡ by SuperLabs</p>
      </section>

      <div className="sticky-buttons d-flex flex-column">
        <button className="btn btn-danger mt-0 mb-3 rounded-pill">
          Start Selling
        </button>
        <button className="btn btn-outline-danger mr-2 rounded-pill">
          Customer Service
        </button>
      </div>
    </>
  );
}

export default App;
