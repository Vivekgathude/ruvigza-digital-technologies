import { useState, useRef, useEffect } from "react";
import {
  Target,
  ClipboardList,
  ChartNoAxesCombined,
  Users,
  Search,
  MonitorSmartphone,
  MessageCircle,
  Eye, Compass, ShieldCheck
} from "lucide-react";

import { Helmet } from "react-helmet-async";

import logo from "./assets/ruvigza-logo.png";

import flowLogo from "./assets/ruvigzaflow-logo.png";

import flowDashboard from "./assets/ruvigzaflow-dashboard.png";

import founder from "./assets/founder-portrait.webp";
import "./Portfolio.css";
import moonBg from "./assets/moon.jpg";
import creative1 from "./assets/creatives/restaurant.jpg";
import creative2 from "./assets/creatives/gym.jpg";
import creative3 from "./assets/creatives/clinic.jpg";
import creative4 from "./assets/creatives/tech.jpg";
import creative5 from "./assets/creatives/real.jpg";

import realEstate from "./assets/website-templates/real_FULL_PAGE.png";
import restaurant from "./assets/website-templates/restaurant_FULL_PAGE.png";
import fashion from "./assets/website-templates/fashion_FULL_PAGE.png";
import clinic from "./assets/website-templates/clinic_FULL_PAGE.png";
import itech from "./assets/website-templates/techinstitute_FULL_PAGE.png";
const WA_NUMBER = "918080193896";

const EMAIL = "hello@ruvigza.in";

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;





function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const links = [["Home", "/"], ["About", "/about/"], ["Blog", "/blog/"], ["Contact", "/contact/"]];

  return <header className="site-header"><div className="nav-shell">

    <a className="brand" href="/" aria-label="RUVIGZA home"><img className="brand-logo" src={logo} alt="RUVIGZA logo" /><span className="brand-copy"><strong>RUVIGZA</strong><small>Digital Technologies</small></span></a>

    <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>

    <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">

      {links.map(([label, href]) => <a key={label} className={(path === href.replace(/\/+$/, "") || (href !== "/" && path.startsWith(href.replace(/\/+$/, "")))) ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}

      <a className="nav-cta" href="/contact/" onClick={() => setMenuOpen(false)}>Let’s Talk <Arrow /></a>

    </nav>

  </div></header>;

}



function Footer() {

 return <footer className="site-footer"><div className="footer-main section-shell">

<div className="footer-brand-column"><a className="brand footer-brand" href="/"><img className="brand-logo" src={logo} alt="RUVIGZA logo" /><span className="brand-copy"><strong>RUVIGZA</strong><small>Digital Technologies</small></span></a><p className="footer-tagline">
  <span>Marketing attracts.</span><span className="footer-tagline-accent">  Technology organizes.</span>
</p><span className="footer-location">Latur, Maharashtra, India</span></div>

    <div className="footer-column"><h3>Quick Links</h3><a href="/">Home</a><a href="/about/">About</a><a href="/blog/">Blog</a><a href="/contact/">Contact</a></div>

    <div className="footer-column"><h3>Explore</h3><a href="/marketing/">Marketing Services</a><a href="/tech/">Tech Solutions</a><a href="/tech/#ruvigzaflow">RuvigzaFlow CRM + ERP Demo</a></div>

    <div className="footer-column"><h3>Get in Touch</h3><a href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`} target="_blank" rel="noreferrer">{EMAIL}</a><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp Us</a><a href="/contact/">Send an Enquiry <Arrow /></a></div>

  </div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} RUVIGZA Digital Technologies. All rights reserved.</span><span>Latur, Maharashtra, India</span></div></footer>;

}



function PageHero({eyebrow, title, accent, intro, tone="blue"}) {

  return <section className={`page-hero section-shell tone-${tone}`}><p className="kicker">{eyebrow}</p><h1>{title} <em>{accent}</em></h1><p className="hero-intro">{intro}</p></section>;

}

function CTA({title="Have a project in mind?", text="Tell us what you need. We’ll discuss the next practical step for your business."}) {

  return <section className="cta-panel section-shell"><div><span className="section-label">LET’S TALK</span><h2>{title}</h2><p>{text}</p></div><a className="button-primary" href="/contact/">Contact RUVIGZA <Arrow /></a></section>;

}

function Home() {

  return <main className="home-page home-bg">
<Helmet>
  <title>RUVIGZA Digital Technologies | Digital Marketing & Software</title>
  <meta
    name="description"
    content="Explore digital marketing, SEO, website development, WhatsApp automation, CRM and ERP software solutions from RUVIGZA Digital Technologies."
  />
  <link rel="canonical" href="https://ruvigza.in/" />
  <meta name="robots" content="index, follow" />
</Helmet>

<section className="hero section-shell"><div className="hero-backdrop" aria-hidden="true"></div><div className="hero-orb orb-blue"></div><div className="hero-orb orb-green"></div>

 <div className="hero-content"><p className="kicker">DIGITAL MARKETING <b>&</b> TECHNOLOGY SOLUTIONS</p><h1>Your Growth.<br className="mobile-break" /> <em>Our Focus.</em></h1>

<p className="hero-intro hero-intro-highlight">RUVIGZA brings digital marketing and technology solutions together to help businesses build their online presence and work smarter.</p>
<p className="choose-label choose-label-highlight">RUVIGZA Digital Technologies</p><br></br>
<p className="choose-label choose-label-highlight">Choose the path that fits your business</p></div>

 <div className="path-grid">

 <a className="path-card marketing-card" href="/marketing/"><div className="card-topline"><span className="round-icon blue-icon">↗</span><span className="eyebrow">GROW YOUR PRESENCE</span></div><h2>Explore Marketing Services</h2><p>Reach the right audience, build your brand and create a stronger online presence.</p><div className="mini-tags"><span>Google Ads</span><span>Meta Ads</span><span>SEO</span><span>Website Development</span><span>WhatsApp Automation</span></div><span className="card-link">Explore Marketing <Arrow /></span><div className="card-glow"></div></a>

        <a className="path-card tech-card" href="/tech/"><div className="card-topline"><span className="round-icon green-icon">⌘</span><span className="eyebrow">BUILD SMARTER SYSTEMS</span></div><h2>Explore Tech Solutions</h2><p>Explore software concepts and practical tools to support your business workflows.</p><div className="mini-tags"><span>RuvigzaFlow CRM + ERP</span><span>Custom Software</span><span>White Label Software</span></div><span className="card-link">Explore Tech Solutions <Arrow /></span><div className="card-glow"></div></a>

      </div><div className="hero-bottom"><span className="bottom-line"></span><span>Two specialized divisions. One shared vision — helping businesses grow in the digital world.</span><span className="bottom-line"></span></div>

    </section>

    <section className="intro-strip section-shell"><div><span className="section-label">THE RUVIGZA APPROACH</span><h2>Different needs.<br/><span>Clear paths.</span></h2></div><p>Explore the right solutions for your business. Whether you're looking to strengthen your digital presence or discover industry-specific software, choose the path that fits your goals.</p>

</section>
{/* CTA Section — Footer च्या अगोदर */}
<section><CTA
  title="Let’s understand your goals."
  text="Share what your business is trying to achieve and we’ll explore the next step together."
/></section>
    
    

  </main>;

}

function About() {

  return<main className="about-page about-bg"><PageHero eyebrow="ABOUT RUVIGZA" title="Built with curiosity." accent="Driven by purpose." intro="A growing digital and technology venture focused on helping businesses strengthen their online presence and explore smarter ways of working." />
<Helmet>
  <title>About RUVIGZA Digital Technologies | Latur, Maharashtra</title>
  <meta
    name="description"
    content="Learn about RUVIGZA Digital Technologies, our founder, vision and transparent approach to digital marketing and business technology solutions."
  />
  <link rel="canonical" href="https://ruvigza.in/about/" />
  <meta name="robots" content="index, follow" />
</Helmet>

    <section className="founder-section section-shell"><div className="founder-photo-wrap"><img className="founder-photo" src={founder} alt="Founder portrait for RUVIGZA Digital Technologies" /><span className="photo-caption">VIVEK GATHUDE</span><span className="photo-caption">FOUNDER · RUVIGZA DIGITAL TECHNOLOGIES</span></div><div className="founder-copy"><span className="section-label">A NOTE FROM THE FOUNDER</span><h2>Hi, I’m <em>Vivek Gathude.</em></h2>
<p>founder of RUVIGZA Digital Technologies. I come from a software development background, and at some point I realised it was time to build something of my own. RUVIGZA is the path where I put all my coding skills to work.</p>
<p>Digital marketing is changing fast, and today it needs real technology and programming behind it. Too often, marketing and coding live in separate worlds. RUVIGZA exists to bring them together..</p>
<p>Our vision: to help small businesses build a strong online presence and grow with the right business management solution.</p>
<p>Our mission: Your growth our focus.</p>
<a className="text-link" href="/contact/">Start a conversation <Arrow /></a></div></section>

    <section className="values-section section-shell"><div className="section-heading"><span className="section-label">WHAT GUIDES US</span><h2>Our vision, principles and promise</h2><p>Trust is built through clear expectations and consistent communication—not big claims.</p></div><div className="feature-grid">

      
<article className="feature-card">
  <span className="feature-number">
    <Eye size={28} strokeWidth={1.8} />
  </span>
  <h3>Our Vision</h3>
  <p>
    To grow RUVIGZA into a dependable partner for digital growth
    and practical business technology, making useful solutions
    easier for businesses to understand and access.
  </p>
</article>

<article className="feature-card">
  <span className="feature-number">
    <Compass size={28} strokeWidth={1.8} />
  </span>
  <h3>Our Approach</h3>
  <p>
  
    Start by listening. Understand the goal, identify suitable
    options, explain the work clearly and keep the process
    collaborative from the first conversation.
  </p>
</article>

<article className="feature-card">
  <span className="feature-number">
    <ShieldCheck size={28} strokeWidth={1.8} />
  </span>
  <h3>Trust Through Transparency</h3>
  <p>
    One system to manage your leads, clients, operations, inventory, team attendance, salary, accounts and billing invoices, so one person can run the whole business from a single dashboard.
  </p>
</article>

    </div></section><CTA title="Let’s understand your goals." text="Share what your business is trying to achieve and we’ll explore the next step together." /></main>;

}

function Blog() {

  return <main className="blog-page blog-bg"><PageHero eyebrow="RUVIGZA INSIGHTS" title="Ideas for your" accent="digital growth." intro="Practical, beginner-friendly notes on digital marketing and technology for growing businesses." />
<Helmet>
  <title>Digital Marketing Blog & Tips for Businesses | RUVIGZA</title>
  <meta
    name="description"
    content="Explore practical digital marketing, SEO, website and business technology tips for small businesses from RUVIGZA Digital Technologies."
  />
  <link rel="canonical" href="https://ruvigza.in/blog/" />
  <meta name="robots" content="index, follow" />
</Helmet>

    <section className="blog-layout section-shell"><article className="blog-article"><div className="article-meta"><span className="article-pill">DIGITAL MARKETING</span><span>Sample article · 5 minute read</span></div><h2>Digital Marketing for Small Businesses: Start with the Basics</h2>
<p className="article-lead">You do not need to do everything at once. A clear audience, a useful website and a simple plan can make your first digital marketing steps more focused.</p><br></br>
<p className="article-lead">Digital Marketing Tips for Small Businesses</p><div className="article-body">

      <h3>1. Know who you want to reach</h3><p>Before choosing an ad platform, describe your ideal customer. Think about their needs, location, questions and what might help them trust your business. This makes your messages more relevant.</p>

      <h3>2. Build a clear online home</h3><p>Your website or landing page should quickly explain what you offer, who it helps and how someone can contact you. Keep the page easy to navigate, mobile-friendly and consistent with your business information.</p>

      <h3>3. Choose channels with a purpose</h3><p>Google Ads can help you reach people actively searching for a solution. Meta Ads can help introduce your offer to relevant audiences. SEO supports visibility in organic search over time. Choose based on your audience, budget and goals rather than trying every channel immediately.</p>

      <h3>4. Measure useful actions</h3><p>Track enquiries, qualified leads, calls or purchases—not only likes and clicks. Make sure tracking is configured correctly, then review what is working and improve one thing at a time.</p>

      <h3>5. Be consistent and realistic</h3><p>Results depend on the offer, market, competition, budget and execution. Set a sensible test period, learn from the data and avoid guarantees that cannot be supported.</p>

      <div className="article-note"><strong>RUVIGZA takeaway:</strong> Begin with one clear business goal, one well-defined audience and a simple way to measure progress. This is a sample educational article, not a promise of specific results.</div>

    </div></article><aside className="blog-sidebar"><span className="section-label">NEED A PLAN?</span><h3>Make your next digital step clearer.</h3><p>Tell us about your business and we can discuss which marketing services may fit your goals.</p><a className="button-primary" href="/contact/">Talk to RUVIGZA <Arrow /></a><div className="sidebar-links"><span>EXPLORE</span><a href="/marketing/">Marketing Services <Arrow /></a><a href="/tech/">Tech Solutions <Arrow /></a></div></aside></section></main>;

}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    requirement: "Marketing Service",
    message: "",
  });

  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function sendToWhatsApp(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.whatsapp.trim() ||
      !form.requirement
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (!form.termsAccepted) {
      setError("Please read and accept the Terms & Privacy notice.");
      return;
    }

    const message = [
      "Hello RUVIGZA, I would like to make an enquiry.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp Number: ${form.whatsapp}`,
      `Requirement: ${form.requirement}`,
      `Additional Details: ${form.message || "Not provided"}`,
    ].join("\n");

    window.location.href =
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  useEffect(() => {
    if (!showTerms) return;

    function handleEscape(e) {
      if (e.key === "Escape") setShowTerms(false);
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showTerms]);

  return (
    <main className="contact-page contact-bg">
    <Helmet>
  <title>Contact RUVIGZA Digital Technologies | Get in Touch</title>
  <meta
    name="description"
    content="Contact RUVIGZA Digital Technologies in Latur, Maharashtra, for digital marketing, website development, CRM + ERP software and custom technology enquiries."
  />
  <link rel="canonical" href="https://ruvigza.in/contact/" />
  <meta name="robots" content="index, follow" />
</Helmet>
      <PageHero
        eyebrow="CONTACT RUVIGZA"
        title="Tell us what you"
        accent="want to build."
        intro="Share a few details about your requirement. Your enquiry will be prepared in WhatsApp so you can review and send it to our team."
      />

      <section className="contact-layout section-shell">
        <div className="contact-info">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let’s start with a conversation.</h2>

          <p>
            Contact Digital Marketing & Digital technology products in Latur
          </p>

          <p>
            Choose the type of support you’re exploring and tell us a
            little about your goal. We’ll use that information to
            understand your enquiry.
          </p>

          <a
            className="contact-method"
            href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">✉</span>
            <span>
              <small>EMAIL US</small>
              <strong>{EMAIL}</strong>
              <em>Opens a new Gmail compose window ↗</em>
            </span>
          </a>

          <a
            className="contact-method"
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">◉</span>
            <span>
              <small>WHATSAPP</small>
              <strong>+91 8080193896</strong>
              <em>Message our team ↗</em>
            </span>
          </a>

          <div className="contact-location">
            <small>LOCATION</small>
            <strong>Latur, Maharashtra, India</strong>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendToWhatsApp}>
          <div className="form-heading">
            <span className="section-label">ENQUIRY FORM</span>
            <h2>How can we help?</h2>
            <p>Required fields are marked with an asterisk.</p>
          </div>

          <label htmlFor="name">
            Full name <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">
            Email address <span>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="whatsapp">
            WhatsApp number <span>*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={update}
            placeholder="+91 98765 43210"
            required
          />

          <label htmlFor="requirement">
            Requirement <span>*</span>
          </label>
          <select
            id="requirement"
            name="requirement"
            value={form.requirement}
            onChange={update}
            required
          >
            <option>Marketing Service</option>
            <option>Tech Solution</option>
          </select>

          <label htmlFor="message">
            Additional details <small>(optional)</small>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={update}
            placeholder="Tell us briefly about your goals or project."
          />

          <div className="contact-terms-consent">
  <p className="terms-consent-text">
    I have read and understood the Terms & Privacy notice.
  </p>

  <div className="terms-checkbox-row">
    <input
      id="termsAccepted"
      type="checkbox"
      checked={!!form.termsAccepted}
      onChange={(e) =>
        setForm({ ...form, termsAccepted: e.target.checked })
      }
    />

    <label htmlFor="termsAccepted">
      I agree to the Terms & Privacy notice
    </label>

    <button
      type="button"
      className="terms-inline-link"
      onClick={() => setShowTerms(true)}
    >
      Read Terms
    </button>
  </div>
</div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="button-primary submit-button"
            type="submit"
          >
            Send enquiry on WhatsApp <Arrow />
          </button>

          <p className="form-privacy">
            WhatsApp will open with your enquiry details. Please review
            the message before sending it.
          </p>
        </form>
      </section>

      {showTerms && (
        <div
          className="terms-modal-overlay"
          onClick={() => setShowTerms(false)}
        >
          <section
            className="terms-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="terms-modal-header">
              <div>
                <span className="section-label">
                  RUVIGZA DIGITAL TECHNOLOGIES
                </span>
                <h2 id="terms-modal-title">Terms &amp; Privacy</h2>
                <p>Your enquiry and personal information</p>
              </div>

              <button
                type="button"
                className="terms-modal-close"
                aria-label="Close Terms and Privacy"
                onClick={() => setShowTerms(false)}
              >
                ×
              </button>
            </div>

            <div className="terms-modal-body">
              <h3>1. Information we collect</h3>
              <p>
                When you submit an enquiry, we may collect your name,
                email address, WhatsApp number, selected service and
                any additional details you choose to provide.
              </p>

              <h3>2. How we use your information</h3>
              <p>
                We use these details to understand your requirements,
                respond to your enquiry, discuss our services and
                follow up on your request.
              </p>

              <h3>3. WhatsApp and third-party services</h3>
              <p>
                When you click the enquiry button, WhatsApp opens with
                your details prepared as a message. You can review,
                edit or cancel it before sending. Your information is
                shared with WhatsApp only if you proceed with the
                message. WhatsApp's own privacy terms apply to its
                services.
              </p>

              <h3>4. Data security</h3>
              <p>
                We aim to handle enquiry information responsibly and
                use reasonable safeguards appropriate to the way it
                is handled. However, no online transmission or
                electronic storage method can be guaranteed to be
                completely secure.
              </p>

              <h3>5. Sharing and retention</h3>
              <p>
                We do not intend to sell your personal information.
                Information may be shared where necessary to respond
                to your request, operate relevant services, or meet
                legal obligations. We should retain it only for as
                long as reasonably needed for those purposes or as
                required by law.
              </p>

              <h3>6. Your choices and requests</h3>
              <p>
                You may choose not to submit the form. You can contact
                us to request access to, correction of, or deletion
                of your enquiry information, subject to applicable
                legal requirements and any information we must retain.
              </p>

              <h3>7. Please do not share sensitive information</h3>
              <p>
                Do not submit passwords, bank details, payment
                credentials, government identification numbers or
                other sensitive information through this enquiry form.
              </p>

              <h3>8. Contact us</h3>
              <p>
                For privacy-related questions or requests, email{" "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or contact us
                through WhatsApp at +91 8080193896.
              </p>

              <p className="terms-last-updated">
                This notice describes the intended handling of
                enquiries submitted through this website. Please
                ensure it reflects your actual data practices before
                publishing.
              </p>
            </div>

            <div className="terms-modal-footer">
              <button
                type="button"
                className="button-primary"
                onClick={() => setShowTerms(false)}
              >
                I Understand
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

const marketingServices = [
  {
    icon: Target,
    title: "Google Ads",
    tag: "SEARCH & INTENT",
    desc: "Reach people actively searching for products or services like yours with a focused campaign structure and clear conversion goals.",
    points: ["Campaign planning", "Keyword and audience research", "Performance review"]
  },
  {
    icon: Users,
    title: "Meta Ads",
    tag: "FACEBOOK & INSTAGRAM",
    desc: "Build awareness and generate enquiries through creative-led campaigns designed around your audience and business objective.",
    points: ["Audience planning", "Ad creative direction", "Lead-focused campaigns"]
  },
  {
    icon: Search,
    title: "SEO Services",
    tag: "ORGANIC VISIBILITY",
    desc: "Make your website easier for search engines and potential customers to understand with practical on-page and technical improvements.",
    points: ["On-page SEO basics", "Content and keyword planning", "Technical checks"]
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    tag: "YOUR DIGITAL HOME",
    desc: "Create a professional, responsive website that explains your offer clearly and makes it simple for visitors to take the next step.",
    points: ["Responsive layouts", "Clear service pages", "Contact and enquiry paths"]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    tag: "ENQUIRY WORKFLOWS",
    desc: "Explore ways to streamline enquiry handling and follow-ups. The exact workflow and integrations depend on your requirements and available platform access.",
    points: ["Workflow discovery", "Enquiry routing concepts", "Integration planning"]
  }
];

const portfolioProjects = [

  // Website Templates
    {
      title: "Real Estate Website",
      category: "Website Templates",
      image: realEstate,
    },
    {
      title: "Restaurant Website",
      category: "Website Templates",
      image: restaurant,
    },
    {
      title: "Fashion Brand Website",
      category: "Website Templates",
      image: fashion,
    },
    {
      title: "Clinic Website",
      category: "Website Templates",
      image: clinic,
    },
    {
      title: "Tech Institute Website",
      category: "Website Templates",
      image: itech,
    },

    // Creative Templates
  {
    id: 1,
    title: "Restaurant",
    category: "Creatives",
    description: "A sample creative concept for digital marketing.",
    image: creative1,
  },
  {
    id: 2,
    title: "Gym",
    category: "Creatives",
    description: "A sample creative concept for digital marketing.",
    image: creative2,
  },
  {
    id: 3,
    title: "Clinic",
    category: "Creatives",
    description: "A sample creative concept for digital marketing.",
    image: creative3,
  },
  {
    id: 4,
    title: "Educational Institute",
    category: "Creatives",
    description: "A sample creative concept for digital marketing.",
    image: creative4,
  },
  {
    id: 5,
    title: "Real Estate Sector",
    category: "Creatives",
    description: "A sample creative concept for digital marketing.",
    image: creative5,
  },

    
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Website Templates",
    "Creatives",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );


        console.log("Moon image URL:", moonBg);
  return (
  
    
  <main
  className="portfolio-page"
  style={{
    backgroundImage: `url("${moonBg}")`,
    backgroundColor: "#071226",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <Helmet>
  <title>Website Design & Creative Samples | RUVIGZA Portfolio</title>
  <meta
    name="description"
    content="Explore RUVIGZA's sample website designs, real estate and restaurant website concepts, and digital marketing creative samples."
  />
  <link
    rel="canonical"
    href="https://ruvigza.in/marketing/portfolio/"
  />
  <meta name="robots" content="index, follow" />
</Helmet>
      <section className="portfolio-hero section-shell">
        <span className="section-label">
          RUVIGZA · SELECTED CONCEPTS
        </span>

        <h1>
          Ideas made <em>visible.</em>
        </h1>

        <p>
          Explore website template concepts and creative samples
          developed to demonstrate our design direction and ideas.
        </p>

        <span className="portfolio-note">Website Design Portfolio & Creatives designs portfolio</span>
        

        <span className="portfolio-note">
          These are sample concepts, not representations of completed
          client projects.
        </span>
        
          
      </section>

      <section className="portfolio-work section-shell">
        <div className="portfolio-heading">
          <div>
            <span className="section-label">OUR WORK SAMPLES</span>
            <h2>Explore the collection</h2>
          </div>

          <span className="portfolio-count">
            {filteredProjects.length} samples
          </span>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category ? "selected" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article className="portfolio-card" key={project.id}>
              <div className="portfolio-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="portfolio-placeholder">
                    <span>
                      {project.category === "Creatives"
                        ? "CREATIVE SAMPLE"
                        : "WEBSITE CONCEPT"}
                    </span>
                    <strong>{project.title}</strong>
                    <small>Image coming soon</small>
                  </div>
                )}
              </div>

              <div className="portfolio-card-copy">
                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-cta section-shell">
        <div>
          <span className="section-label">HAVE AN IDEA?</span>
          <h2>Let’s create something for your business.</h2>
          <p>
            Tell us what you need and we can discuss a suitable
            website or creative concept.
          </p>
        </div>

        <a className="button-primary" href="/contact/">
          Discuss Your Project <Arrow />
        </a>
      </section>
    </main>
  );
}

function Marketing() {
  return (
    <main className="marketing-page marketing-bg">
    <Helmet>
  <title>Digital Marketing Services in Latur | RUVIGZA</title>
  <meta
    name="description"
    content="Explore Google Ads, Meta Ads, SEO, website development and WhatsApp automation services from RUVIGZA Digital Technologies."
  />
  <link rel="canonical" href="https://ruvigza.in/marketing/" />
  <meta name="robots" content="index, follow" />
</Helmet>
      <PageHero
        eyebrow="RUVIGZA · MARKETING"
        title="Get seen by the"
        accent="right audience."
        intro="Digital marketing services in Latur, focused on visibility, useful enquiries and a clearer path from discovery to conversation."
      />

      <section className="service-grid section-shell">
  {marketingServices.map((s) => {
    const ServiceIcon = s.icon;

    return (
      <article
        className="service-card marketing-service"
        key={s.title}
      >
        <div className="service-icon">
          <ServiceIcon size={28} strokeWidth={1.8} />
        </div>
            <div className="service-top">
              <span>{s.n}</span>
              <small>{s.tag}</small>
            </div>

            <h2>{s.title}</h2>
            <p>{s.desc}</p>

            <ul>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <a className="text-link" href="/contact/">
              Discuss this service <Arrow />
            </a>

            <div className="service-glow"></div>
          </article>
         );
      })}
      </section>

      <section className="process-strip section-shell">
        <span className="section-label">A CLEAR PROCESS</span>

        <div className="process-steps">
          <div>
            <b><Target size={28} /></b>
            <strong>Understand</strong>
            <p>Goals, audience and needs</p>
          </div>
          <div>
            <b><ClipboardList size={28} /></b>
            <strong>Plan</strong>
            <p>Scope, channel and priorities</p>
          </div>
          <div>
            <b><ChartNoAxesCombined size={28} /></b>
            <strong>Improve</strong>
            <p>Review and learn from data</p>
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section className="portfolio-promo section-shell">
        <div>
          <span className="section-label">OUR DESIGN SAMPLES</span>
          <h2>See what we can create.</h2>
          <p>
            Explore website template concepts and creative samples
            from RUVIGZA.
          </p>
        </div>

        <a
          className="button-primary"
          href="/marketing/portfolio/"
        >
          Explore Portfolio <Arrow />
        </a>
      </section>

      <CTA
        title="Ready to discuss marketing?"
        text="Tell us about your business, audience and goals. We’ll help you explore a practical starting point."
      />
    </main>
  );
}

function Tech() {

  return <main className="tech-page tech-bg"><PageHero tone="green" eyebrow="RUVIGZA · TECHNOLOGY" title="Technology for" accent="smarter work." intro="Explore software concepts and development services designed around your business processes. We’ll clarify the scope before recommending a solution." />

<Helmet>
  <title>CRM + ERP Software & Custom Development | RUVIGZA</title>
  <meta
    name="description"
    content="Explore RuvigzaFlow CRM + ERP demo concepts, custom software development and white-label software enquiries from RUVIGZA Digital Technologies."
  />
  <link rel="canonical" href="https://ruvigza.in/tech/" />
  <meta name="robots" content="index, follow" />
</Helmet>
  
 

    <section className="tech-feature-grid section-shell">
 

      <article className="tech-feature featured-product" id="ruvigzaflow"><span className="product-kicker">PRODUCT CONCEPT · DEMO</span><figure className="flow-dashboard-preview"><img src={flowDashboard} alt="RuvigzaFlow CRM dashboard preview showing lead pipeline and team overview" loading="lazy" width="1790" height="900" /><figcaption>Dashboard concept preview · Sample interface</figcaption></figure><h2>RuvigzaFlow <span>CRM + ERP</span></h2><p>One Platform. Connected Business Workflows.
RuvigzaFlow brings CRM and ERP capabilities together to help businesses manage customer relationships and business operations more efficiently. Enquire for a demo, customisation, or white-label solutions.</p><div className="product-tags"><span>CRM concept</span><span>ERP workflows</span><span>Free Demo</span></div><p className="disclaimer">RuvigzaFlow is an evolving CRM + ERP concept. Explore the proposed solution and enquire about potential customisation, white-label options, and integrations.</p> <br></br><p>CRM ERP Software and Custom Development</p><a className="button-green" href="/contact/">Book Free Demo session<Arrow /></a></article>

      <article className="tech-feature"><span className="service-index">02 / DEVELOPMENT</span><div className="tech-icon">⌘</div><h2>Custom Software</h2><p>Software development shaped around a specific workflow, internal process or business problem instead of forcing your team into a one-size-fits-all tool.</p><ul><li>Requirement discovery</li><li>Workflow and feature planning</li><li>Web-based software concepts</li></ul><a className="text-link green-link" href="/contact/">Discuss your project <Arrow /></a></article>

      <article className="tech-feature"><span className="service-index">03 / FLEXIBLE BRANDING</span><div className="tech-icon">◇</div><h2>White Label Software</h2><p>Explore software solutions that may be branded for a partner or business, depending on licensing, technical scope and the chosen platform.</p><ul><li>Use-case discussion</li><li>Branding and customization scope</li><li>Licensing and integration review</li></ul><a className="text-link green-link" href="/contact/">Explore white label options <Arrow /></a></article>

    </section>

    <CTA title="Have a workflow in mind?" text="Describe the problem you want to solve. We’ll discuss the requirements before proposing a technical direction." /></main>;

}



const chatbotKnowledge = [

  // 1. GREETINGS
  {
    keys: ["hello", "hi", "hey", "namaste", "नमस्कार", "हॅलो"],
    answer: "Hello! Welcome to RUVIGZA Digital Technologies. I can help you explore our digital marketing services, technology solutions, RuvigzaFlow CRM + ERP software, custom software development, white-label solutions, and contact details."
  },
  {
    keys: ["thank you", "thanks", "धन्यवाद", "thankyou"],
    answer: "You're welcome! Thank you for your interest in RUVIGZA Digital Technologies. For service enquiries or a RuvigzaFlow software demo, contact hello@ruvigza.in or WhatsApp +91 8080193896."
  },
  {
    keys: ["help", "what can you do", "what can i ask", "help me", "मदत"],
    answer: "I can answer questions about RUVIGZA, digital marketing, website development, SEO, Google Ads, Meta Ads, RuvigzaFlow CRM + ERP software, custom software, white-label solutions, demo enquiries, pricing enquiries, and contact information."
  },

  // 2. ABOUT RUVIGZA
  {
    keys: ["ruvigza", "about ruvigza", "about company", "who are you", "company information", "कंपनी"],
    answer: "RUVIGZA Digital Technologies is an early-stage digital and technology venture based in Latur, Maharashtra, India. We focus on digital marketing, website development, CRM + ERP software solutions, custom software development, and white-label software opportunities. Our approach emphasizes clear communication and practical business requirements."
  },
  {
    keys: ["what do you do", "what does ruvigza do", "tumhi kay karta", "तुम्ही काय करता"],
    answer: "RUVIGZA Digital Technologies works across digital marketing and technology solutions. Our service areas include SEO, Google Ads, Meta Ads, website development, WhatsApp workflow planning, custom software, and RuvigzaFlow CRM + ERP. Contact us to discuss your business requirements."
  },
  {
    keys: ["why choose ruvigza", "why work with you", "why should i choose you", "tumhala ka nivdave"],
    answer: "RUVIGZA focuses on understanding your requirements, discussing practical solutions, and setting clear expectations. Whether you need digital marketing, a custom software solution, or a RuvigzaFlow demo, we encourage you to discuss your goals with our team."
  },
  {
    keys: ["founder", "vivek", "vivek gathude", "founder of ruvigza"],
    answer: "RUVIGZA was founded by Vivek Gathude, whose educational background is in Computer Science and Engineering. The vision is to bring digital growth and practical technology solutions within reach of businesses."
  },
  {
    keys: ["location", "where are you located", "latur", "address", "office location"],
    answer: "RUVIGZA Digital Technologies is based in Latur, Maharashtra, India. Contact us to discuss your project and the available options for working together remotely."
  },

  // 3. DIGITAL MARKETING SERVICES
  {
    keys: ["services", "what services do you offer", "marketing services", "digital services", "मार्केटिंग"],
    answer: "Our service areas include Google Ads, Meta Ads, SEO, website development, and WhatsApp workflow planning. We also explore CRM + ERP, custom software development, and white-label software solutions. Contact us to discuss which solution suits your business."
  },
  {
    keys: ["digital marketing", "what is digital marketing", "digital marketing meaning", "digital marketing kay ahe"],
    answer: "Digital marketing promotes businesses through online channels such as search engines, websites, social media, and paid advertising. The right approach depends on your audience, goals, industry, and budget."
  },
  {
    keys: ["google ads", "google advertising", "google ads service"],
    answer: "Google Ads can help businesses reach people searching for relevant products and services. Campaigns can focus on enquiries, calls, website visits, or other suitable goals. Budget, campaign scope, and service availability should be discussed with our team."
  },
  {
    keys: ["google ads cost", "google ads pricing", "google ads budget"],
    answer: "Google Ads costs depend on your industry, competition, audience, campaign objectives, and advertising budget. Advertising spend is separate from any agreed service fee. Contact us to discuss a suitable campaign scope."
  },
  {
    keys: ["meta ads", "facebook ads", "instagram ads", "facebook advertising"],
    answer: "Meta Ads can help businesses reach relevant audiences across eligible Facebook and Instagram placements. Campaigns may focus on awareness, engagement, enquiries, or sales. The right strategy depends on your business goals and budget."
  },
  {
    keys: ["meta ads cost", "facebook ads pricing", "instagram ads budget"],
    answer: "Meta Ads costs depend on audience selection, campaign objectives, competition, creative quality, and budget. Advertising spend is separate from any agreed management fee. Contact us to discuss your requirements."
  },
  {
    keys: ["seo", "what is seo", "seo meaning", "seo kay ahe"],
    answer: "SEO stands for Search Engine Optimization. It involves improving a website's search visibility through useful content, technical improvements, relevant keywords, and a better user experience. SEO results are not guaranteed and usually take time."
  },
  {
    keys: ["social media marketing", "social media management", "instagram marketing"],
    answer: "Social media marketing can include content planning, creative direction, captions, publishing schedules, and performance reviews. The exact deliverables and posting frequency depend on your requirements and the agreed scope."
  },
  {
    keys: ["guaranteed leads", "guaranteed sales", "guaranteed ranking", "100 percent results"],
    answer: "We do not promise guaranteed leads, sales, or search rankings. Results depend on factors such as market demand, competition, budget, offer, website experience, and campaign execution. We believe in realistic expectations and measurable progress."
  },

  // 4. WEBSITE DEVELOPMENT
  {
    keys: ["website development", "need a website", "create a website", "website banvaychi", "वेबसाइट"],
    answer: "We can discuss business websites, service websites, landing pages, portfolio websites, and other website requirements. The project scope depends on your goals, design preferences, features, content, and integrations. Contact us to discuss your website."
  },
  {
    keys: ["website cost", "website price", "website charges", "website pricing", "website chi kimmat"],
    answer: "Website pricing depends on the number of pages, design, functionality, integrations, content, and maintenance requirements. Contact RUVIGZA with your requirements to discuss the scope and estimate."
  },
  {
    keys: ["ecommerce", "ecommerce website", "online store", "sell products online"],
    answer: "An e-commerce website may include product pages, shopping cart, checkout, payment integration, and order management. Requirements, implementation, and pricing depend on the products and features you need. Contact us to discuss your online store."
  },
  {
    keys: ["landing page", "lead generation page", "advertising landing page"],
    answer: "A landing page focuses on a specific goal, such as collecting enquiries, registrations, or product interest. It may include a clear headline, benefits, relevant content, and a call to action. Contact us to discuss your campaign requirements."
  },
  {
    keys: ["website redesign", "improve my website", "website maintenance", "website support"],
    answer: "Website improvements may include design updates, mobile responsiveness, content changes, technical fixes, and usability improvements. Maintenance and support depend on your website and the agreed scope."
  },

  // 5. RUVIGZAFLOW - CORE PRODUCT POSITIONING
  {
    keys: ["ruvigzaflow", "ruvigza flow", "what is ruvigzaflow", "ruvigzaflow software", "ruvigzaflow product", "ruvigzaflow kay ahe", "रुविग्झाफ्लो"],
    answer: "RuvigzaFlow is RUVIGZA Digital Technologies' CRM + ERP business management software product. It is designed to bring customer relationship management and business operations together in a more organized workflow. Businesses interested in using, customizing, or exploring a white-label solution can contact us to enquire about a software demo and available options. Visit /tech/ to learn more."
  },
  {
    keys: ["ruvigzaflow crm erp", "ruvigzaflow crm", "ruvigzaflow erp", "crm erp software", "crm + erp software"],
    answer: "RuvigzaFlow combines the CRM + ERP software concept under one product identity. CRM focuses on customer relationships, leads, and follow-ups, while ERP supports business processes and operations. Contact RUVIGZA to enquire about a demo and confirm the features available for your requirements."
  },
  {
    keys: ["ruvigzaflow benefits", "why use ruvigzaflow", "benefits of ruvigzaflow", "why ruvigzaflow"],
    answer: "RuvigzaFlow aims to help businesses organize customer information, lead management, follow-ups, and business workflows through a CRM + ERP approach. The benefits for your organization depend on your needs and the features available in the selected solution. Contact us to discuss your use case and request a demo."
  },
  {
    keys: ["ruvigzaflow features", "features of ruvigzaflow", "ruvigzaflow modules", "ruvigzaflow madhe kay ahe"],
    answer: "RuvigzaFlow is focused on CRM + ERP business workflows. Possible requirement areas include customer management, lead tracking, follow-up workflows, and operational processes. Please enquire for a demo to review the currently available modules and confirm which features suit your business."
  },
  {
    keys: ["ruvigzaflow dashboard", "ruvigzaflow interface", "ruvigzaflow panel", "software dashboard"],
    answer: "RuvigzaFlow is positioned as a CRM + ERP business software product. To explore its dashboard, interface, and available workflows, contact RUVIGZA Digital Technologies to enquire about a demo."
  },
  {
    keys: ["who can use ruvigzaflow", "ruvigzaflow for business", "ruvigzaflow users", "ruvigzaflow kon vapru shakto"],
    answer: "RuvigzaFlow may be suitable for businesses that want to organize customer relationships and business operations using CRM + ERP workflows. The right configuration depends on your industry, processes, team, and requirements. Contact us to discuss your use case and request a demo."
  },
  {
    keys: ["ruvigzaflow industries", "which businesses can use ruvigzaflow", "ruvigzaflow for companies"],
    answer: "Businesses across different industries may have CRM and ERP requirements, but the right fit depends on their workflows and the software capabilities required. Share your industry and business needs with our team to explore RuvigzaFlow's suitability."
  },

  // 6. RUVIGZAFLOW DEMO AND ENQUIRIES
  {
    keys: ["ruvigzaflow demo", "demo of ruvigzaflow", "request demo", "book a demo", "software demo", "demo pahije", "डेमो"],
    answer: "Interested in RuvigzaFlow? You can enquire about a CRM + ERP software demo with RUVIGZA Digital Technologies. Contact us at hello@ruvigza.in or WhatsApp +91 8080193896. Tell us about your business and the workflows you want to explore so our team can discuss demo availability."
  },
  {
    keys: ["how to get ruvigzaflow demo", "how can i see demo", "ruvigzaflow demo enquiry"],
    answer: "To enquire about a RuvigzaFlow demo, email hello@ruvigza.in or WhatsApp +91 8080193896. Please share your company or business name, industry, and the CRM + ERP features you would like to explore. Our team can discuss the next steps and current demo availability."
  },
  {
    keys: ["ruvigzaflow login", "ruvigzaflow sign in", "ruvigzaflow access", "ruvigzaflow url"],
    answer: "For RuvigzaFlow access and login information, please contact RUVIGZA Digital Technologies at hello@ruvigza.in or WhatsApp +91 8080193896. Our team can confirm the appropriate access options and availability."
  },
  {
    keys: ["ruvigzaflow available", "is ruvigzaflow launched", "ruvigzaflow launch date", "when can i use ruvigzaflow"],
    answer: "For the latest RuvigzaFlow availability, demo access, and onboarding information, please contact RUVIGZA Digital Technologies. We can discuss your requirements and confirm the current product access options."
  },

  // 7. CUSTOM SOFTWARE
  {
    keys: ["custom software", "custom software development", "custom crm", "custom erp", "software for my business"],
    answer: "RUVIGZA can discuss custom software requirements based on your business workflows. This may include CRM, ERP, internal dashboards, workflow tools, or other business software concepts. Contact us with your requirements so we can discuss feasibility, scope, and next steps."
  },
  {
    keys: ["customize ruvigzaflow", "ruvigzaflow customization", "customize crm erp", "modify ruvigzaflow"],
    answer: "RuvigzaFlow customization enquiries are welcome. Share your business process, required modules, user roles, reports, and integrations. Our team can review the requirements and confirm which customizations are feasible and available."
  },
  {
    keys: ["custom software cost", "software development price", "custom crm cost", "custom erp cost"],
    answer: "Custom software pricing depends on the required features, number of users, integrations, design, security, deployment, and support. Contact us with your requirements to discuss scope and a suitable estimate."
  },
  {
    keys: ["can you build software for my company", "need business software", "software solution for company"],
    answer: "We can discuss your company's software requirements and explore a suitable approach. Please share the problem you want to solve, the users involved, required features, and any existing tools. Our team can then discuss the potential solution."
  },

  // 8. WHITE-LABEL SOFTWARE
  {
    keys: ["white label", "white label software", "white label crm", "white label erp", "white label ruvigzaflow"],
    answer: "RUVIGZA welcomes enquiries about white-label CRM + ERP software solutions. A white-label arrangement may allow a software solution to be offered under your business brand, subject to technical feasibility, licensing, and agreed terms. Contact us to discuss branding, customization, deployment, and demo options."
  },
  {
    keys: ["sell software under my brand", "my own software brand", "own brand crm", "own brand erp"],
    answer: "If you want to offer CRM + ERP software under your own brand, contact RUVIGZA to discuss white-label possibilities. We can review your branding needs, target customers, required features, and business model before confirming what can be offered."
  },
  {
    keys: ["white label pricing", "white label cost", "white label charges", "white label plans"],
    answer: "White-label pricing depends on licensing terms, branding, customization, deployment, integrations, support, and the commercial arrangement. Contact us to discuss your business model and request information about available options."
  },
  {
    keys: ["white label demo", "white label software demo", "white label enquiry"],
    answer: "To explore white-label CRM + ERP opportunities with RUVIGZA, contact hello@ruvigza.in or WhatsApp +91 8080193896. Please share your business name, target market, branding requirements, and the features you want to offer. Our team can discuss demo availability and potential options."
  },
  {
    keys: ["white label rights", "software reseller", "resell ruvigzaflow", "become a software partner"],
    answer: "Reseller and white-label partnership possibilities depend on the product, licensing, commercial terms, and support arrangements. Contact RUVIGZA Digital Technologies to discuss your partnership proposal and the options that may be available."
  },

  // 9. CRM AND ERP EDUCATION
  {
    keys: ["what is crm", "crm meaning", "crm software meaning", "crm kay ahe"],
    answer: "CRM stands for Customer Relationship Management. CRM software helps businesses organize customer details, leads, communication, and follow-up activities. RuvigzaFlow is positioned as a CRM + ERP product. Contact us to enquire about a demo."
  },
  {
    keys: ["what is erp", "erp meaning", "erp software meaning", "erp kay ahe"],
    answer: "ERP stands for Enterprise Resource Planning. ERP software can help coordinate business processes such as operations, inventory, purchasing, and other workflows, depending on the system. Contact RUVIGZA to discuss your ERP requirements and RuvigzaFlow demo options."
  },
  {
    keys: ["difference between crm and erp", "crm vs erp", "crm or erp"],
    answer: "CRM primarily focuses on customer relationships, leads, sales, and follow-ups. ERP focuses on coordinating internal business processes and operations. RuvigzaFlow is positioned around the combined CRM + ERP approach. Enquire for a demo to discuss the features relevant to your business."
  },
  {
    keys: ["why does my business need crm", "need crm software", "manage customer data"],
    answer: "CRM software can help businesses organize customer records, track leads, maintain follow-up processes, and improve visibility into customer interactions. Whether it is right for you depends on your workflow. Contact us to discuss your requirements."
  },
  {
    keys: ["need erp software", "manage business operations", "business management system"],
    answer: "ERP software may help organize business operations and bring related processes into a coordinated workflow. The right solution depends on your business size, processes, and required modules. Contact RUVIGZA to discuss your needs."
  },

  // 10. PRICING AND COMMERCIAL ENQUIRIES
  {
    keys: ["price", "pricing", "cost", "budget", "charges", "किंमत"],
    answer: "Pricing depends on the solution, scope, features, integrations, timeline, and support requirements. For RuvigzaFlow, custom software, white-label options, or digital marketing services, contact RUVIGZA to discuss your requirements and receive information about available options."
  },
  {
    keys: ["ruvigzaflow subscription", "monthly price", "annual price", "software subscription"],
    answer: "RuvigzaFlow subscription options and pricing should be confirmed directly with RUVIGZA Digital Technologies. Contact hello@ruvigza.in or WhatsApp +91 8080193896 to discuss availability, requirements, and commercial terms."
  },
  {
    keys: ["quotation", "request a quote", "get a quote", "estimate", "quotation pahije"],
    answer: "To discuss a quotation, please share your business type, required solution, important features, number of users, integrations, budget range, and preferred timeline. Contact RUVIGZA by email or WhatsApp to discuss the next steps."
  },

  // 11. PROJECT PROCESS AND TRUST
  {
    keys: ["how do you start a project", "project process", "working process", "how to work with ruvigza"],
    answer: "A typical project discussion begins with understanding your business goals, gathering requirements, reviewing possible solutions, defining deliverables, discussing pricing and timelines, and agreeing on next steps."
  },
  {
    keys: ["portfolio", "past projects", "work samples", "show me your work"],
    answer: "RUVIGZA is an early-stage venture. We aim to present our capabilities honestly through available concept work, product information, and demonstrations. We do not invent client projects, testimonials, or results."
  },
  {
    keys: ["client testimonials", "reviews", "customer feedback", "client results"],
    answer: "We believe in transparent communication and genuine customer feedback. We do not invent testimonials or claim results that cannot be substantiated. Contact us to discuss your requirements and the work relevant to your project."
  },
  {
    keys: ["privacy", "my data", "personal information", "data security"],
    answer: "Please share only the information necessary for your enquiry. Do not send passwords, payment credentials, or other sensitive information through the chatbot. Questions about software data handling, security, access controls, and privacy should be confirmed with our team before deployment."
  },

  // 12. BLOG AND LEARNING
  {
    keys: ["blog", "articles", "digital marketing blog", "read blog"],
    answer: "Our blog can help businesses explore digital marketing, SEO, websites, business technology, and CRM + ERP concepts. Visit /blog/ to explore the available articles."
  },
  {
    keys: ["blog ideas", "write a blog", "blog writing", "content writing"],
    answer: "Useful business blog topics include practical how-to guides, common customer questions, industry explainers, comparisons, and checklists. Good content should answer a real reader question and avoid unsupported claims."
  },
  {
    keys: ["how to grow my business online", "get more customers", "online business growth"],
    answer: "Start by defining your target audience, explaining your offer clearly, creating a useful online presence, selecting suitable marketing channels, and tracking enquiries or sales. SEO, advertising, social media, and software tools may help depending on your goals."
  },

  // 13. CONTACT DETAILS
  {
    keys: ["contact", "contact ruvigza", "email", "email address", "phone", "phone number", "reach you"],
    answer: "You can contact RUVIGZA Digital Technologies at hello@ruvigza.in or WhatsApp +91 8080193896. You can enquire about digital marketing, website development, RuvigzaFlow CRM + ERP, custom software, white-label solutions, or a product demo."
  },
  {
    keys: ["whatsapp", "whatsapp number", "chat on whatsapp", "whatsapp contact"],
    answer: "Contact RUVIGZA on WhatsApp at +91 8080193896. Briefly describe your business and whether you are interested in digital marketing, custom software, RuvigzaFlow CRM + ERP, white-label solutions, or a demo."
  },
  {
    keys: ["email ruvigza", "send an email", "ruvigza email"],
    answer: "You can email hello@ruvigza.in with your business details, requirements, and preferred next steps. For RuvigzaFlow enquiries, mention whether you need a demo, customization, or white-label software information."
  },
  {
    keys: ["business hours", "office timing", "working hours", "when are you available"],
    answer: "Please contact RUVIGZA by email or WhatsApp to confirm current availability and arrange a suitable time to discuss your project or RuvigzaFlow demo enquiry."
  },

  // 14. LANGUAGE SUPPORT
  {
    keys: ["marathi", "मराठी", "marathi madhe", "मराठीत सांगा"],
    answer: "हो नक्की! तुम्ही RUVIGZA च्या services, website development, digital marketing किंवा RuvigzaFlow CRM + ERP software बद्दल मराठीत प्रश्न विचारू शकता. RuvigzaFlow चा demo, customisation किंवा white-label software बद्दल चौकशी करण्यासाठी hello@ruvigza.in किंवा +91 8080193896 वर संपर्क करा."
  },
  {
    keys: ["hindi", "हिंदी", "hindi mein"],
    answer: "आप RUVIGZA की digital marketing services, website development, RuvigzaFlow CRM + ERP software, custom software और white-label solutions के बारे में पूछ सकते हैं। RuvigzaFlow के demo या उपलब्ध विकल्पों की जानकारी के लिए hello@ruvigza.in या WhatsApp +91 8080193896 पर संपर्क करें।"
  }

];

function getChatbotAnswer(userMessage) {
  const message = userMessage
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]/g, " ")
    .replace(/\s+/g, " ");

  const found = chatbotKnowledge.find(item =>
    item.keys.some(key => {
      const normalizedKey = key
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

      return message.includes(normalizedKey);
    })
  );

  if (found) {
    return found.answer;
  }

  return "Thank you for contacting RUVIGZA Digital Technologies. I can help with our digital marketing services, website development, RuvigzaFlow CRM + ERP software, custom software, and white-label solutions. For a specific enquiry, contact hello@ruvigza.in or WhatsApp +91 8080193896.";
}

function getBotAnswer(input) {

  const q = input.toLowerCase().trim();

  const normalized = q.replace(/[?!.,]/g, " ");

  const ranked = chatbotKnowledge.map(item => ({

    item,

    score: item.keys.reduce((best, key) => normalized.includes(key.toLowerCase()) ? Math.max(best, key.length + (key.includes(" ") ? 4 : 0)) : best, 0)

  })).filter(result => result.score > 0).sort((a, b) => b.score - a.score);

  const found = ranked[0]?.item;

  if (found) return found.answer;

  if (/^(what|how|can|do|does|is|are|tell|explain|which|where|who|when)\b/.test(normalized)) {

    return "Thanks for your question. I can currently answer common questions about RUVIGZA, our founder, marketing services, tech solutions, the RuvigzaFlow demo, pricing approach and contact details. I don't want to guess if your question needs a specific answer. Please use the Contact page or email hello@ruvigza.in and our team can follow up.";

  }

  return "I may not have a specific answer for that yet. Try asking about Google Ads, SEO, website development, custom software, RuvigzaFlow CRM + ERP, pricing, our founder, or contact details. For a personal response, visit Contact or email hello@ruvigza.in.";

}

function WebsiteChatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 I’m the RUVIGZA assistant. Ask me about our services, technology solutions, or how to contact us."
    }
  ]);
  const messagesEndRef = useRef(null);
  const suggestions = [
    "What services do you offer?",
    "Tell me about RuvigzaFlow",
    "How can I contact you?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  function ask(text) {
    const value = text.trim();
    if (!value) return;

    setMessages(old => [...old, { from: "user", text: value }, { from: "bot", text: getBotAnswer(value) }]);
    setQuestion("");
  }

  return <div className="chatbot-root">
    {open && <section className="chat-window" aria-label="RUVIGZA website assistant">
      <div className="chat-header">
        <div className="chat-avatar">R</div>
        <div className="chat-title"><strong>RUVIGZA Assistant</strong><span><i></i> Here to help · Instant answers</span></div>
        <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
      </div>

      <div className="chat-messages" aria-live="polite">
        {messages.map((m, i) => <div key={i}>
          <div className={`chat-message ${m.from}`}>{m.text}</div>
          {m.from === "bot" && <div className="chat-suggestions">
            {suggestions.map((s, index) => <button type="button" key={`${s}-${index}`} onClick={() => ask(s)}>{s} <span>↗</span></button>)}
          </div>}
        </div>)}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-row" onSubmit={e => { e.preventDefault(); ask(question); }}>
        <input aria-label="Ask RUVIGZA a question" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask about RUVIGZA…" maxLength={500} />
        <button type="submit" aria-label="Send question" disabled={!question.trim()}>➤</button>
      </form>
      <p className="chat-disclaimer">Automated FAQ assistant · For detailed advice, contact our team.</p>
    </section>}

    <button
      className={`chat-launcher ${open ? "is-open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close RUVIGZA chat" : "Open RUVIGZA chat"}
      aria-expanded={open}
      title={open ? "Close chat" : "Chat with RUVIGZA"}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: "64px", height: "64px", minWidth: "64px", minHeight: "64px",
        padding: 0, borderRadius: "50%", gap: 0, overflow: "visible",
        lineHeight: 1, textAlign: "center"
      }}
    >
      {open ? (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }}>
          <path d="M20.5 11.5a8.2 8.2 0 0 1-8.5 8.1 9.4 9.4 0 0 1-3.7-.8L3 20l1.3-4.2A7.8 7.8 0 0 1 3.5 11.5 8.2 8.2 0 0 1 12 3.4a8.2 8.2 0 0 1 8.5 8.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="11.5" r="1" fill="currentColor" />
          <circle cx="12" cy="11.5" r="1" fill="currentColor" />
          <circle cx="16" cy="11.5" r="1" fill="currentColor" />
        </svg>
      )}
    </button>
  </div>;
}


function NotFound() { return <main className="not-found section-shell"><span className="section-label">PAGE NOT FOUND</span><h1>Let’s get you <em>back on track.</em></h1><p>The page you’re looking for may have moved.</p><a className="button-primary" href="/">Back to Home <Arrow /></a></main>; }



export default function App() {

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  let page = <NotFound />;

  if (path === "/") page = <Home />;

  else if (path === "/about") page = <About />;

  else if (path === "/blog") page = <Blog />;

  else if (path === "/contact") page = <Contact />;

else if (path === "/marketing/portfolio") page = <Portfolio />;
else if (path === "/marketing" || path.startsWith("/marketing/")) page = <Marketing />;

  else if (path === "/tech" || path.startsWith("/tech/")) page = <Tech />;

  return <><Navbar />{page}<Footer /><WebsiteChatbot /></>;

}