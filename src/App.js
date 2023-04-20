import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "./media/img1.jpg";
import img2 from "./media/img2.jpg";
import img3 from "./media/img3.jpg";
import pic1 from "./media/pic1.jpg";
import pic2 from "./media/pic2.jpg";
import pic3 from "./media/pic3.jpg";
import vid from "./media/video.mp4";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
function App() {
  return (
    <div className="App">
      <section className="bg">
        <video autoPlay playsInline lazy="true" loop muted className="bg-video">
          <source src={vid} type="video/mp4" />
        </video>

        <div className="p-3 cont" id="main">
          <p
            href="#"
            className="mt-2 mb-0 text-decoration-none text-white fs-5 fw-bold"
          >
            {" "}
            GorillaCoffee
          </p>
          <Button
            className="d-flex justify-content-center align-items-center side navbar-toggler side-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list icon bi-lg mt-4"></i>
          </Button>
        </div>

        {/* navbar */}
        <nav className="collapse navbar-collapse dropdown-nav" id="navbar">
          <div className="dropdown-nav__container container-xxl d-flex align-items-start align-items-md-center">
            <div className="row align-items-start text-black pt-0 pt-md-2 pt-xl-0">
              <div className="col-12 col-sm-4 mt-4">
                <a href="#" className="row text-decoration-none p-0">
                  <div className="col-2 col-sm-12 mb-4">
                    <img
                      src={img1}
                      alt="Coffe Flavour"
                      className="img-fluid nav-img"
                      width="553"
                      height="746"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-10 text-black">
                    <h3 mb-xxl-0>Amazing Flavour</h3>
                    <p mb-xxl-0> Find out more about our aAmazing Flavour</p>
                    <p mb-xxl-0>
                      Learn More <i class="bi bi-arrow-right-short"></i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-4 mt-4">
                <a href="#" class="row text-decoration-none p-0">
                  <div className="col-2 col-sm-12 mb-4">
                    <img
                      src={img2}
                      alt="Coffe Flavour"
                      className="img-fluid nav-img"
                      width="553"
                      height="746"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-10 text-black">
                    <h3>Surprising Benefits</h3>
                    <p>Find out more about our Surprising Benefits</p>
                    <p>
                      Learn More <i className="bi bi-arrow-right-short"></i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-4 mt-4">
                <a href="#" className="row text-decoration-none p-0">
                  <div className="col-2 col-sm-12 mb-4 nv-div">
                    <img
                      src={img3}
                      alt="Coffe Flavour"
                      className="img-fluid nav-img"
                      width="553"
                      height="746"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-10 text-black">
                    <h3>Essential Nutrients</h3>
                    <p>Find out more about our Essential Nutrients</p>
                    <p>
                      Learn More <i className="bi bi-arrow-right-short"></i>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Button
            className="d-flex justify-content-center align-items-center side navbar-toggler close-btn "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-x icon bi-lg mb-1 mt-1 mb-0"></i>
          </Button>
        </nav>
        {/* navbar-end */}

        <div className="middle container-xl ">
          <div className="d-flex ps-3 flex-column justify-content-center ms bgc">
            <h1 className="mb-4 fw-bold text-white fnt">
              Discover The Taste Of Real Coffee.
            </h1>
            <p className="mb-4 fs-5 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a
              href="#main"
              className="text-decoration-none text-white border-2 border-white buy-btn w-100"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="sec">
          <a href="#second" className="scroll-btn text-white">
            Explore <i className="bi bi-arrow-down-short"></i>
          </a>
        </div>
      </section>
      <section id="second">
        <div className="row diff align-items-center mx-2 px-2 px-sm-1 rows">
          <div className="col-sm-6 mb-4 ps-0">
            <img
              src={img1}
              className="img-fluid left ps-xl-5 ms-xl-5"
              alt="img"
            />
          </div>
          <div
            className="text col-sm-6 mb-4 text-start px-3 ps-md-3 ps-0 ps-xl-5 text-md-start "
            style={{ maxWidth: "500px" }}
          >
            <span>01</span>
            <h1 className="h2 mb-4">Amazing Coffee Flavour</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              totam dolorem quasi! Quis fugiat totam id fuga non distinctio
              incidunt amet nesciunt itaque, tempore repellat eos natus quo
              mollitia laborum.
            </p>
            <a href="#" className="text-black">
              Read More <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row diff align-items-center mx-2 px-2 px-sm-1 rows">
          <div
            className="text col-sm-6 mb-4 text-start px-3 ps-md-3 ps-0 ps-xl-5 ms-xl-5 text-md-start order-2 order-sm-1"
            style={{ maxWidth: "500px" }}
          >
            <span>02</span>
            <h1 className="h2 mb-4">Surprising Health Benefits</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              totam dolorem quasi! Quis fugiat totam id fuga non distinctio
              incidunt amet nesciunt itaque, tempore repellat eos natus quo
              mollitia laborum.
            </p>
            <a href="#" className="text-black">
              Read More <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="col-sm-6 mb-4 ps-0 order-1 order-sm-2">
            <img
              src={img2}
              className="img-fluid right ms-xl-5 ps-xl-5"
              alt="img"
            />
          </div>
        </div>
        <div className="row diff align-items-center mx-2 px-2 px-sm-1 rows">
          <div className="col-sm-6 mb-4 ps-0">
            <img
              src={img3}
              className="img-fluid left ps-xl-5 ms-xl-5 "
              alt="img"
            />
          </div>
          <div
            className="text col-sm-6 mb-4 text-start px-3 ps-md-3 ps-0 ps-xl-5 text-md-start "
            style={{ maxWidth: "500px" }}
          >
            <span>03</span>
            <h1 className="h2 mb-4">Amazing Coffee Flavour</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              totam dolorem quasi! Quis fugiat totam id fuga non distinctio
              incidunt amet nesciunt itaque, tempore repellat eos natus quo
              mollitia laborum.
            </p>
            <a href="#" className="text-black">
              Read More <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="third" className="bg-dark text-white py-4">
        <div className="container-xl my-4">
          <div className="row2 d-flex flex-column flex-sm-row">
            <div className="col-12 col-sm-4 mb-4 px-3">
              <img className="mb-4 img-fluid" alt="coffee-img" src={pic1} />
              <h3>Amazing Coffee Flavour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>
            <div className="col-12 col-sm-4 mb-4 px-3 px-sm-2">
              <img className="mb-4 img-fluid" alt="coffee-img" src={pic2} />
              <h3>Health Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>
            <div className="col-12 col-sm-4 mb-4 px-3">
              <img className="mb-4 img-fluid" alt="coffee-img" src={pic3} />
              <h3>Essential Nutrients</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark color-white footer ">
        <div className="container-xl d-flex justify-content-between align-items-center py-3 border-highlight px-3">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="me-2 text-muted text-decoration-none">
              <i className="bi bi-cup pe-1"></i>
              <span>© 2022 GorillaCoffee</span>
            </a>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
