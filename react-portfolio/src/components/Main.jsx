import React from 'react';
import manImage from './assets/imgs/man.png';
import pencilCaseImage from './assets/imgs/pencil-case.svg';
import responsiveImage from './assets/imgs/responsive.svg';
import toolboxImage from './assets/imgs/toolbox.svg';
import analyticsImage from './assets/imgs/analytics.svg';
import scooterImage from './assets/imgs/scooter.svg';

const Main = () => {
  return (
    <>
      <div>
        <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
          <div className="container">
            <a className="logo" href="#" style={{ color: 'black' }}>UsmanDev</a>
            <ul className="nav">
              <li className="item">
                <a className="link" href="#home" style={{ color: 'black' }}>Home</a>
              </li>
              <li className="item">
                <a className="link" href="#about" style={{ color: 'black' }}>About</a>
              </li>
              <li className="item">
                <a className="link" href="#service" style={{ color: 'black' }}>Services</a>
              </li>
              <li className="item">
                <a className="link" href="#testmonial" style={{ color: 'black' }}>Testimonial</a>
              </li>
              <li className="item">
                <a className="link" href="#pricing" style={{ color: 'black' }}>Pricing</a>
              </li>
              <li className="item">
                <a className="link" href="#contact" style={{ color: 'black' }}>Contact</a>
              </li>
            </ul>
            <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </a>
          </div>
        </nav>

        <header id="home" className="header">
          <div className="overlay"></div>
          <div className="header-content container">
            <h1 className="header-title">
              <span className="up">HI!</span>
              <span className="down">I am Usman Tanveer</span>
            </h1>
            <p className="header-subtitle">Full Stack AI Developer</p>
            <button className="btn btn-primary"><a className="link" href="#about" style={{ color: 'White' }}>Learn More</a></button>
          </div>
        </header>

        <section className="section pt-0" id="about">
          <div className="container text-center">
            <div className="about">
              <div className="about-img-holder">
                <img src={manImage} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
              </div>
              <div className="about-caption">
                <p className="section-subtitle">Who Am I ?</p>
                <h2 className="section-title mb-3">About Me</h2>
                <p>
                  Hi there! I'm Usman Tanveer, a Full Stack AI Developer from Pakistan. I'm passionate about coding and I excel in producing high-quality code in minimal time. I have expertise in UI/UX design, backend programming with databases, and integrating real-time updates.
                  <br />
                  Apart from coding, I'm also skilled in web design, graphic designing, and website development. I love taking creative ideas and turning them into functional and visually appealing digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <div className="container text-center">
            <p className="section-subtitle">What I Do ?</p>
            <h6 className="section-title mb-6">Service</h6>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={pencilCaseImage} className="icon" />
                    <h6 className="title">Web Design</h6>
                    <p className="subtitle">I create stunning and user-friendly web designs that engage users and leave a lasting impression.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={responsiveImage} className="icon" />
                    <h6 className="title">Graphic Design</h6>
                    <p className="subtitle">I specialize in creating visually appealing graphics that communicate your brand's message effectively.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={toolboxImage} className="icon" />
                    <h6 className="title">Website Development</h6>
                    <p className="subtitle">I build responsive and functional websites with clean code and seamless user experience.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={analyticsImage} className="icon" />
                    <h6 className="title">Video Animations in Vector style</h6>
                    <p className="subtitle">I implement real-time updates in web applications to provide seamless user interactions and data synchronization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <div className="container text-center">
            <p className="section-subtitle">What I Do ?</p>
            <h6 className="section-title mb-6">Use</h6>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={analyticsImage} className="icon" />
                    <h6 className="title">Frontend Expert: HTML, CSS, JS, and React</h6>
                    <p className="subtitle">Crafting captivating web designs for an engaging user experience.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={toolboxImage} className="icon" />
                    <h6 className="title">Backend Specialist: Firebase and Firestore</h6>
                    <p className="subtitle">Delivering visually appealing graphics that effectively communicate your message.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={pencilCaseImage} className="icon" />
                    <h6 className="title">Vector Art with Adobe Illustrator and Figma</h6>
                    <p className="subtitle">Making awesome characters and environments to use in animations.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="body">
                    <img src={responsiveImage} className="icon" />
                    <h6 className="title">Animation Magic with Filmora Pro</h6>
                    <p className="subtitle">Implementing real-time updates in web applications for a seamless user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container text-center">
            <p className="section-subtitle">How Much I Charge ?</p>
            <h6 className="section-title mb-6">My Pricing</h6>
            <div className="pricing-wrapper">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <img className="pricing-card-icon" src={scooterImage} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div className="pricing-card-body">
                  <h6 className="pricing-card-title">$6.00</h6>
                  <div className="pricing-card-list">
                    <p>Fast responses</p>
                    <p>Build custom websites with scalability</p>
                    <p>Submit an MVP and the final product fast</p>
                    <p>Work with clients and co-workers really nicely</p>
                    <p>Building with love and creativity</p>
                    <p>Offer 20% refund if final product doesn't satisfy</p>
                  </div>
                </div>
                <div className="pricing-card-footer">
                  <span>$</span>
                  <span>6.00/Hour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm bg-primary">
          <div className="container text-center text-sm-left">
            <div className="row align-items-center">
              <div className="col-sm offset-md-1 mb-4 mb-md-0">
                <h6 className="title text-light">Want to work with me?</h6>
                <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
              </div>
              <div className="col-sm offset-sm-2 offset-md-3">
                <button href="#contact" className="btn btn-lg my-font btn-light rounded"><a className="link" href="#contact" style={{ color: 'black' }}>Hire Me</a></button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="testmonial">
          <div className="container text-center">
            <p className="section-subtitle">What Clients Think About Me ?</p>
            <h6 className="section-title mb-6">Testimonials</h6>
            <div className="row" style={{ alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-card-body">
                    <p className="testimonial-card-subtitle">"Instantaneous responses, fast execution. Asked for confirmation before putting anything in production and made an MVP for me really fast!"</p>
                    <h6 href className="testimonial-card-title">Cecilia Ziniti <span style={{ fontSize: '12px', color: 'rgba(128, 128, 128, 0.7)' }}>(Replit)</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container text-center">
            <p className="section-subtitle">How can we communicate?</p>
            <h6 className="section-title mb-5">Contact Me</h6>
            <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <input type="text" size="50" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group col-sm-6">
                  <input type="email" className="form-control" placeholder="Enter Email" required />
                </div>
                <div className="form-group col-sm-12">
                  <textarea name="comment" id="comment" rows="6" className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-outline-primary btn-rounded">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer className="footer section text-center">
          <div className="container">
            <p className="footer-text">Designed and Developed with ❤️ by Usman Tanveer</p>
          </div>
        </footer>

        <a href="#" className="back-to-top"><i className="ti-arrow-up"></i></a>
      </div>
    </>
  );
};

export default Main;
