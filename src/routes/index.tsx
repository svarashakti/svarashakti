import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rishikesh-river.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Svarashakti — The Power of Sound" },
      { name: "description", content: "Sound healing, Naad Yoga and handpan learning in Rishikesh, Uttarakhand." },
      { property: "og:title", content: "Svarashakti — The Power of Sound" },
      { property: "og:description", content: "Sound healing, Naad Yoga and handpan learning in Rishikesh, Uttarakhand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const features = [
    ["✦", "Learn by Experience", "Hands-on training with real instruments so you feel the work, not just study it."],
    ["◈", "Designed for Practice", "Programs structured to help you confidently begin sessions, workshops or a personal practice."],
    ["◎", "Small Batches", "Deep guidance, feedback and personal attention rather than a mass-learning experience."],
    ["✧", "Carry It Forward", "Tools and techniques designed to remain useful beyond the course — personally and professionally."],
  ];
  const courses = [
    { visual: "sound", badges: ["7 DAYS", "MOST POPULAR"], note: "BOWLS · GONG · CHIMES · HANDPAN", label: "INTENSIVE CERTIFICATION", title: "Sound Healing Initiation", text: "A seven-day immersion in sound healing, Naad Yoga, instruments, intention and practical session work.", bullets: ["Modern + traditional sound healing", "Chakra work & individual session design", "Instrument practice & guided meditation", "Certification upon completion"], link: "Explore the program" },
    { visual: "handpan", badges: ["FLEXIBLE"], note: "SOUND · STILLNESS · FLOW", label: "ALL LEVELS", title: "Handpan Classes", text: "Learn to listen, play and build a natural relationship with the handpan in the serene atmosphere of Rishikesh.", bullets: ["Single, 3-class & 7-day packages", "75–90 minute sessions", "Technique, rhythm & guided play", "Care, tuning & subtle sensitivity"], link: "Explore handpan classes" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <a className="brand" href="#top"><span>Svarashakti</span><small>EST. 2010</small></a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Book Now</a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="top">
          <img src={heroImage} alt="The Ganges flowing through the Himalayan foothills at sunrise" width={1920} height={1080} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow">NAAD — NATURE IN MOTION</div><div className="symbol">◌</div>
            <h1>Svarashakti</h1><p className="hero-tag">The Power of Sound</p>
            <p className="location">Rishikesh, Uttarakhand · India</p>
            <div className="hero-actions"><Button asChild variant="gold" size="hero"><a href="#courses">Explore Courses</a></Button><Button asChild variant="glass" size="hero"><a href="#experience">Meet the Facilitator</a></Button></div>
          </div>
          <a className="scroll-cue" href="#intro">SCROLL TO EXPLORE <ArrowDown /></a>
        </section>

        <section className="section intro" id="intro">
          <div className="section-kicker">WHY SVARASHAKTI</div><h2>A Heritage of Healing</h2>
          <p className="lead">A grounded approach to sound, vibration and conscious listening — combining traditional Naad Yoga with practical sound-healing techniques and real instrument practice.</p>
          <div className="feature-grid">{features.map(([icon, title, text]) => <article className="feature" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="section section-tint" id="courses">
          <div className="section-kicker">TRAINING PROGRAMS</div><h2>Courses &amp; Certifications</h2>
          <p className="lead">Immerse yourself in Naad Yog, sound healing and the handpan, guided by an experienced sound-healing practitioner, musician and audio engineer.</p>
          <div className="course-grid">{courses.map((course) => <article className="course-card" key={course.title}>
            <div className={`course-visual ${course.visual}`}><div>{course.badges.map((badge, i) => <span className={i ? "badge blue" : "badge"} key={badge}>{badge}</span>)}</div><span className="instrument-mark">{course.visual === "sound" ? "◉" : "⌁"}</span><div className="visual-note">{course.note}</div></div>
            <div className="course-body"><div className="mini-label">{course.label}</div><h3>{course.title}</h3><p>{course.text}</p><ul>{course.bullets.map(b => <li key={b}><Check />{b}</li>)}</ul><a className="text-link" href="#contact">{course.link}<ArrowRight /></a></div>
          </article>)}</div>
        </section>

        <section className="section experience" id="experience"><div className="split"><div className="experience-copy"><div className="section-kicker">THE RISHIKESH EXPERIENCE</div><h2>Learn where the river teaches you to listen.</h2><p>Set in the spiritual heart of Rishikesh, Svarashakti brings together the stillness of the Himalayas, the presence of the Ganges and the living practice of sound.</p><blockquote>“Naad is not only something we hear. It is something we learn to notice.”</blockquote><Button asChild variant="gold" size="hero"><a href="#contact">Meet Tushar</a></Button></div><div className="river-art"><img src={heroImage} alt="Morning light over the river at Rishikesh" width={1920} height={1080} loading="lazy"/><span>RISHIKESH<small>UTTARAKHAND · INDIA</small></span></div></div></section>

        <section className="section cta" id="contact"><div className="cta-inner"><div className="section-kicker">BEGIN YOUR JOURNEY</div><h2>Come to the sound.</h2><p>Whether you are beginning your healing practice, deepening your relationship with sound, or learning the handpan — start with a conversation.</p><Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088">Enquire on WhatsApp</a></Button></div></section>
      </main>
      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="#top">Home</a><a href="#experience">About</a><a href="#courses">Courses</a><a href="#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
