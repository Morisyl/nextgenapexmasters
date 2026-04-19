import Head from 'next/head';
import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    img: './public/images/service-construction.jpg',
    icon: '🏗️',
    title: 'Building & Construction',
    desc: 'Precision execution of residential, commercial, and institutional projects — from foundation to finishing.',
    tag: 'Core Service',
  },
  {
    img: './public/images/service-architecture.jpg',
    icon: '📐',
    title: 'Architectural Design',
    desc: 'Functional and aesthetic blueprints inspired by modern, sustainable concepts that stand the test of time.',
    tag: 'Design',
  },
  {
    img: './public/images/service-management.jpg',
    icon: '📋',
    title: 'Project Management',
    desc: 'End-to-end oversight to ensure budgets and timelines remain on track across every project phase.',
    tag: 'Management',
  },
  {
    img: './public/images/service-realestate.jpg',
    icon: '🏢',
    title: 'Real Estate Services',
    desc: 'Expert property management, sales, and development guidance to maximize asset value.',
    tag: 'Real Estate',
  },
  {
    img: './public/images/service-logistics.jpg',
    icon: '🚚',
    title: 'Logistics & Mobility',
    desc: 'Streamlined delivery of high-quality construction materials to eliminate delays and keep sites moving.',
    tag: 'Supply Chain',
  },
  {
    img: './public/images/service-hardware.jpg',
    icon: '🔧',
    title: 'Hardware & Electrical',
    desc: 'A one-stop shop for professional-grade tools and industry-standard electrical components.',
    tag: 'Retail',
  },
];

const WHY = [
  {
    num: '01',
    title: 'Full-Circle Advantage',
    text: 'We manage design, supply, and construction under one roof — eliminating budget leaks and communication gaps at every stage.',
  },
  {
    num: '02',
    title: 'Innovation-Driven',
    text: 'We embrace modern design and engineering concepts to ensure your investment remains future-proof and ahead of the curve.',
  },
  {
    num: '03',
    title: 'Built-In Reliability',
    text: 'Our internal supply chain guarantees materials are always ready, ensuring timely delivery and zero project downtime.',
  },
];

export default function Home() {
  const scrollRef = useRef(null);

  // Drag-to-scroll for services
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX, scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>NextGen Apex Masters Ltd — Building the Future</title>
        <meta name="description" content="Premier construction, real estate, and logistics solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo" onClick={scrollTo('hero')}>
          <img src="./public/images/logo.png" alt="NextGen Apex Masters Logo" onError={(e) => { e.target.style.display='none'; }} />
          <div className="nav-wordmark">
            NEXT<span>GEN</span><br />
            <span style={{ color: 'var(--steel)', fontWeight: 400, fontSize: '0.72rem', letterSpacing: '0.15em' }}>APEX MASTERS LTD</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#about" onClick={scrollTo('about')}>About</a></li>
          <li><a href="#services" onClick={scrollTo('services')}>Services</a></li>
          <li><a href="#why" onClick={scrollTo('why')}>Why Us</a></li>
          <li><a href="#contact" onClick={scrollTo('contact')} className="nav-cta">Contact</a></li>
        </ul>

        <button className="hamburger" aria-label="Menu" onClick={() => {
          const list = document.querySelector('.nav-links');
          if (list) list.style.display = list.style.display === 'flex' ? 'none' : 'flex';
        }}>
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg">
          <img src="./public/images/hero-building.jpg" alt="" className="hero-bg-img" />
          <div className="hero-grid" />
          <div className="hero-accent-bar" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">▸ Construction · Real Estate · Logistics</div>
          <h1 className="hero-headline">
            Building<br />the <em>Future.</em>
          </h1>
          <p className="hero-sub">
            Professional construction, real estate, and logistics solutions delivered with technical precision. One company. Every stage.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={scrollTo('contact')}>Start Your Project</a>
            <a href="#services" className="btn-outline" onClick={scrollTo('services')}>Our Services</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">360°</div>
            <div className="stat-label">Full Solution</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6+</div>
            <div className="stat-label">Service Lines</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1</div>
            <div className="stat-label">Unified Team</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-inner">
          <div className="about-img-wrap">
            <div className="about-img-accent" />
            <img src="./public/images/about-team.jpg" alt="NextGen Apex Masters team and project" />
          </div>
          <div>
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">A Premier <em>Enterprise</em> Shaping the Built Environment</h2>
            <p className="section-lead">
              NextGen Apex Masters Ltd. provides a 360-degree solution by bridging the gap between visionary architectural design and robust supply chain management. From the first sketch to the final brick, we manage the entire lifecycle of your project to ensure lasting value and structural integrity.
            </p>
            <div className="about-features">
              {['Design to Delivery', 'Structural Integrity', 'Quality Materials', 'On-Time Completion'].map((f) => (
                <div className="feature-chip" key={f}>{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-eyebrow">What We Do</div>
        <h2 className="section-title">Our <em>Services</em></h2>
        <p className="section-lead">
          We offer a vertically integrated approach — we don't just build, we control quality at every stage.
          <br /><span style={{ fontSize: '0.8rem', color: 'var(--orange)', fontStyle: 'italic', marginTop: '6px', display: 'inline-block' }}>← Scroll to explore →</span>
        </p>

        <div className="services-scroll-wrapper" ref={scrollRef}>
          <div className="services-track">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <img src={s.img} alt={s.title} className="service-card-img" />
                <div className="service-card-body">
                  <div className="service-icon">{s.icon}</div>
                  <div className="service-card-title">{s.title}</div>
                  <p className="service-card-desc">{s.desc}</p>
                  <div className="service-card-tag">▸ {s.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="section-eyebrow">Our Edge</div>
        <h2 className="section-title">Why Choose <em>Us?</em></h2>
        <p className="section-lead">
          Three pillars that set NextGen Apex Masters apart from the competition — consistently, on every project.
        </p>
        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card" key={w.num}>
              <div className="why-number">{w.num}</div>
              <div className="why-card-title">{w.title}</div>
              <p className="why-card-text">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta-banner">
        <img src="./public/images/cta-background.jpg" alt="" className="cta-bg" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <div className="section-eyebrow">Ready to Build?</div>
          <h2 className="section-title">Let's Break <em>Ground.</em></h2>
          <p className="section-lead">
            Whether it's a residential home, a commercial complex, or a full development project — our team is ready to deliver with precision.
          </p>
          <a href="#contact" className="btn-primary" onClick={scrollTo('contact')}>Start Your Project</a>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="./public/images/logo.png" alt="NextGen Apex Masters" onError={(e) => { e.target.style.display = 'none'; }} />
            <p>
              A premier enterprise dedicated to shaping the built environment with technical precision, from architectural design to logistics.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Contact Us</div>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📞</span>
                <span>____________________</span>
              </li>
              <li>
                <span className="contact-icon">✉</span>
                <span>____________________</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>____________________</span>
              </li>
              <li>
                <span className="contact-icon">🗺</span>
                <span>____________________</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-nav-links">
              <li><a href="#hero" onClick={scrollTo('hero')}>Home</a></li>
              <li><a href="#about" onClick={scrollTo('about')}>About Us</a></li>
              <li><a href="#services" onClick={scrollTo('services')}>Services</a></li>
              <li><a href="#why" onClick={scrollTo('why')}>Why Choose Us</a></li>
              <li><a href="#contact" onClick={scrollTo('contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} <span>NextGen Apex Masters Ltd.</span> All rights reserved.</div>
          <div>Built with precision. Delivered with purpose.</div>
        </div>
      </footer>
    </>
  );
}
