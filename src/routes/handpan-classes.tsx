import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import handpanImage from "@/assets/handpan-classes.png.asset.json";

export const Route = createFileRoute("/handpan-classes")({
  head: () => ({
    meta: [
      { title: "Handpan Classes — An Introduction to Sound, Stillness & Flow | Svarashakti" },
      { name: "description", content: "Seven transformative days with the handpan in Rishikesh — listening, rhythm, melody and flow. Flexible single, 3-class and 7-day packages for all levels." },
      { property: "og:title", content: "Handpan Classes — An Introduction to Sound, Stillness & Flow | Svarashakti" },
      { property: "og:description", content: "Seven transformative days with the handpan in Rishikesh — listening, rhythm, melody and flow. Flexible packages for all levels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HandpanCourse,
});

const experience = [
  {
    days: "Days 1–2",
    title: "First Touch & Listening",
    items: [
      "Introduction to the handpan — history, philosophy & sacred geometry",
      "Learning to listen: developing sensitivity to tone and resonance",
      "Basic striking techniques and finding your natural rhythm",
      "Guided meditation with handpan sound",
    ],
  },
  {
    days: "Days 3–4",
    title: "Exploring the Scale",
    items: [
      "Understanding the notes and scale of your handpan",
      "Intuitive melody creation — allowing music to unfold naturally",
      "Simple patterns, grooves & rhythmic foundations",
      "Playing by the Ganges — connecting sound with nature",
    ],
  },
  {
    days: "Days 5–6",
    title: "Flow & Expression",
    items: [
      "Combining rhythm and melody into flowing sequences",
      "Dynamics, texture & emotional expression through touch",
      "Mindful practice techniques for daily consistency",
      "Group jam sessions and collaborative sound exploration",
    ],
  },
  {
    days: "Day 7",
    title: "Integration & Continuation",
    items: [
      "Instrument care, tuning basics & the subtle sensitivity it carries",
      "Building your personal practice routine",
      "Guidance for continuing your handpan journey",
    ],
  },
];

const classOptions = [
  { name: "Single Class", meta: "75–90 minutes", price: "₹1,500", usd: "approx. $18 USD" },
  { name: "3-Class Package", meta: "3 Classes", price: "₹4,000", usd: "approx. $48 USD" },
  { name: "7-Day Intensive", meta: "7 Classes", price: "₹8,000", usd: "approx. $96 USD" },
];

function HandpanCourse() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground course-page">
      <header className={`site-header header-light${menuOpen ? " nav-open" : ""}`}>
        <Link className="brand" to="/"><span>Svarashakti</span><small>EST. 2010</small></Link>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <a className="active" href="/#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Book Now</a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="course-hero">
          <img src={handpanImage.url} alt="Students playing handpans together in a sunlit pavilion overlooking the river in Rishikesh" />
          <div className="course-hero-overlay" />
          <div className="course-hero-content">
            <div className="section-kicker">ALL LEVELS · FLEXIBLE PACKAGES</div>
            <h1>Handpan Classes</h1>
            <p className="course-hero-sub">An Introduction to Sound, Stillness &amp; Flow</p>
          </div>
        </section>

        <section className="course-overview">
          <h2>About This Course</h2>
          <p>Set in the serene atmosphere of Rishikesh, this immersive experience invites you to gently enter the world of the handpan — not as an instrument to master, but as a space to feel, listen, and connect.</p>
          <p>Over seven transformative days, you'll develop an intuitive relationship with the handpan through mindful practice, guided exploration, and the peaceful energy of the Himalayas and the sacred Ganges.</p>
          <div className="course-facts">
            <div className="course-fact"><span>DURATION</span><b>Flexible</b></div>
            <div className="course-fact"><span>LEVEL</span><b>All Levels</b></div>
            <div className="course-fact"><span>LOCATION</span><b>Rishikesh</b></div>
            <div className="course-fact"><span>CLASS TIME</span><b>75–90 Min</b></div>
          </div>
        </section>

        <section className="course-curriculum">
          <h2>What You'll Experience</h2>
          <div className="day-list">
            {experience.map((group) => (
              <article className="day-card" key={group.days}>
                <div className="day-head"><span className="day-badge">{group.days}</span><h3>{group.title}</h3></div>
                <ul className="day-bullets">{group.items.map((item) => <li key={item}>✦ {item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="course-included">
          <h2>What's Included</h2>
          <div className="included-grid">
            <div>✦ 7 days of guided handpan training</div>
            <div>✦ Handpan provided during the course</div>
            <div>✦ Lifetime access to alumni community</div>
            <div>✦ Guided meditation session</div>
          </div>
        </section>

        <section className="course-included class-details">
          <h2>Class Details</h2>
          <div className="class-options">
            {classOptions.map((option) => (
              <div className="class-option" key={option.name}>
                <h3>{option.name}</h3>
                <div className="class-option-meta">{option.meta}</div>
                <div className="class-option-price">{option.price} <small>{option.usd}</small></div>
              </div>
            ))}
          </div>
          <p className="class-note">Each class is around 75–90 minutes, allowing enough time for technique, rhythm practice, composition basics, and guided play. If you are visiting Rishikesh for a few days, the 3-class or 7-day intensive works beautifully to build a strong foundation. Let us know your dates and experience level, and we can plan your sessions accordingly.</p>
        </section>

        <section className="course-cta">
          <div className="section-kicker">RESERVE YOUR PLACE</div>
          <h2>Come to the sound.</h2>
          <p>Small groups and personal attention — share your dates and experience level, and we'll plan your sessions.</p>
          <div className="about-connect-actions">
            <Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088?text=Hi%20Svarashakti%2C%20I%27d%20like%20to%20enquire%20about%20handpan%20classes.">Enquire on WhatsApp</a></Button>
            <Button asChild variant="outline" size="hero"><a href="mailto:svarashakti.963@gmail.com">Email Us</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="/#top">Home</a><Link to="/about">About</Link><a href="/#courses">Courses</a><a href="/#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
