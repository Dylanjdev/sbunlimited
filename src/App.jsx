import { useState } from 'react'
import './App.css'
import logoImg from './sbunlimited.jpg'
import heroBackground from './assets/Hero (1).jpg'
import imgBulldozer from './assets/bulldozerweldrepair.jpg'
import imgFloor from './assets/floorintall.jpg'
import imgGate from './assets/gateinstall.jpg'
import imgGutter from './assets/gutterrepair.jpg'
import imgHydro from './assets/hydroplainingseedsyard.jpg'
import imgWaterline from './assets/waterlineintall.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const projects = [
    { id: 1, title: 'Bulldozer Weld Repair',       image: imgBulldozer },
    { id: 2, title: 'Floor Installation',           image: imgFloor },
    { id: 3, title: 'Gate Installation',            image: imgGate },
    { id: 4, title: 'Gutter Repair',                image: imgGutter },
    { id: 5, title: 'Hydroseeding & Yard Work',     image: imgHydro },
    { id: 6, title: 'Water Line Installation',      image: imgWaterline },
  ]

  return (
    <>
      {/* Header — transparent, floats over hero */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-section">
            <img src={logoImg} alt="Seibers unlimited llc" className="logo" />
            <span className="brand">Seibers Unlimited LLC</span>
          </div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero — full viewport dark section */}
      <section className="hero-full">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <div className="hero-logo-frame">
            <img src={heroBackground} alt="Seibers Unlimited LLC" className="hero-logo" />
          </div>
          <div className="hero-divider" />
          <p className="hero-tagline">Professional Services You Can Trust</p>
          <p className="hero-sub">Licensed &amp; Insured &mdash; Serving with integrity on every job.</p>
          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">Get a Free Quote</a>
            <a href="#work" className="hero-btn-ghost">View Our Work</a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-bar">
        <div className="trust-item">
          <span className="trust-label">Licensed</span>
          <span className="trust-divider" />
          <span className="trust-desc">Fully certified professionals</span>
        </div>
        <div className="trust-sep" />
        <div className="trust-item">
          <span className="trust-label">Insured</span>
          <span className="trust-divider" />
          <span className="trust-desc">Comprehensive coverage</span>
        </div>
        <div className="trust-sep" />
        <div className="trust-item">
          <span className="trust-label">Professional</span>
          <span className="trust-divider" />
          <span className="trust-desc">Years of proven experience</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="section-inner">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="card-num">01</span>
              <h3>Welding Services</h3>
              <p>In-shop and mobile welding available. From structural repairs to custom fabrication, our certified welders bring the work to you or handle it in our fully equipped shop.</p>
            </div>
            <div className="service-card">
              <span className="card-num">02</span>
              <h3>Mechanical &amp; Roadside Assistance</h3>
              <p>Comprehensive mechanical services for your equipment and vehicles. Stuck on the road? Our roadside assistance team is ready to get you back moving fast.</p>
            </div>
            <div className="service-card">
              <span className="card-num">03</span>
              <h3>Timber Hauling</h3>
              <p>Professional log truck and timber hauling services. We have the capacity and experience to handle your haul efficiently — contact us to arrange your next load.</p>
            </div>
            <div className="service-card">
              <span className="card-num">04</span>
              <h3>Excavation &amp; Land Management</h3>
              <p>Full-service excavation including demolition, ditching, water line installation, land clearing, and site management. No project is too large or too complex.</p>
            </div>
            <div className="service-card">
              <span className="card-num">05</span>
              <h3>Plumbing Services</h3>
              <p>Emergency and routine plumbing handled around the clock. Water leaks, burst pipes, and system repairs — we respond 24 hours a day with no job too big or too small.</p>
            </div>
            <div className="service-card">
              <span className="card-num">06</span>
              <h3>Handyman Services</h3>
              <p>General repairs, maintenance, and home improvement work done right. Contact us today for a complimentary quote on your next project, big or small.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="portfolio">
        <div className="section-inner">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Our Work</h2>
          <div className="portfolio-grid">
            {projects.map(project => (
              <div key={project.id} className="portfolio-item">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <span>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-inner about-inner">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">About Seibers Unlimited</h2>
          <p className="about-text">We are dedicated to delivering exceptional results with integrity and craftsmanship. As a fully licensed and insured company, we hold ourselves to the highest professional standards on every job — no exceptions.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-inner contact-inner">
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="contact-sub">Ready to get started? Reach out and we'll get back to you promptly.</p>
          <button className="btn-cta">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span>&copy; 2026 Seibers Unlimited LLC</span>
          <span className="footer-badge">Licensed &amp; Insured</span>
          <span className="footer-credit">Built by <a href="https://smithdigitals.com/" target="_blank" rel="noopener noreferrer">Smith Digitals</a></span>
        </div>
      </footer>
    </>
  )
}

export default App
