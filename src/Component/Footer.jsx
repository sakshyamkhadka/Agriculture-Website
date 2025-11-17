import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <footer className="footer-container bg-dark text-light">
        <div className="container py-5 border-top border-secondary">
          <div className="row gy-4">
            {/* Company Info */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start mb-3">
              <h1 className="fw-bold text-white mb-3">AgriCulture</h1>
              <p className="mb-1">Jharuwarashi</p>
              <p className="mb-1">Nepal, Kathmandu</p>
              <p className="mb-1"><strong>Phone:</strong> +977 1234567890</p>
              <p><strong>Email:</strong> khadka@gmail.com</p>
            </div>

            {/* Useful Links */}
            <div className="col-12 col-md-2">
              <h5 className="fw-semibold text-white mb-3">Useful Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white-50">Home</a></li>
                <li className="nav-item mb-2"><a href="/aboutus" className="nav-link p-0 text-white-50">About us</a></li>
                <li className="nav-item mb-2"><a href="/ourservices" className="nav-link p-0 text-white-50">Services</a></li>
                <li className="nav-item mb-2"><a href="/#testimonials" className="nav-link p-0 text-white-50">Tesimonials</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-white-50">Contact</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-12 col-md-2">
              <h5 className="fw-semibold text-white mb-3">Our Services</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Web Design</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Web Development</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Product Management</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Marketing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Graphic Design</a></li>
              </ul>
            </div>

            {/* Additional Sections */}
            <div className="col-12 col-md-2">
              <h5 className="fw-semibold text-white mb-3">Hic solutasetp</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Molestiae accusamus iure</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Excepturi dignissimos</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Suscipit distinctio</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Dilecta</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Sit quas consectetur</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-2">
              <h5 className="fw-semibold text-white mb-3">Nobis illum</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Ipsam</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Laudantium dolorum</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Dinera</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Trodelas</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Flexo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="bg-dark text-light border-top border-secondary">
        <div className="container footer d-flex flex-column flex-sm-row justify-content-between align-items-center py-3">
          <p className="mb-2 mb-sm-0 text-center text-sm-start">
            © Copyright <strong>AgriCulture</strong>. All Rights Reserved<br />
            Designed by <a href="#" className="text-success text-decoration-none">Sakshyam Khadka</a>
          </p>

          <div className="d-flex justify-content-center mt-2 mt-sm-0">
            <a href="#" className="btn btn-outline-success btn-sm rounded-3 me-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="btn btn-outline-success btn-sm rounded-3 me-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="btn btn-outline-success btn-sm rounded-3 me-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="btn btn-outline-success btn-sm rounded-3"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
