import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rishikesh-river.jpg";
import logoAsset from "@/assets/svarashakti-logo.png.asset.json";
import sessionsImage from "@/assets/sound-healing-sessions.jpg";
import retreatsImage from "@/assets/handpan-masterclass.jpg";
import initiationImage from "@/assets/sound-healing-initiation.png.asset.json";
import handpanImage from "@/assets/handpan-classes.png.asset.json";
import experienceImage from "@/assets/tushar-handpan.png.asset.json";

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
    { visual: "sound", photo: initiationImage.url, alt: "Tibetan singing bowls, crystal bowls, gong, chimes and a handpan arranged on wood", badges: ["7 DAYS", "MOST POPULAR"], note: "BOWLS · GONG · CHIMES · HANDPAN", label: "INTENSIVE CERTIFICATION", title: "Sound Healing Initiation", text: "A seven-day immersion in sound healing, Naad Yoga, instruments, intention and practical session work.", bullets: ["Modern + traditional sound healing", "Chakra work & individual session design", "Instrument practice & guided meditation", "Certification upon completion"], link: "Explore the program", to: "/sound-healing-initiation" },
    { visual: "handpan", photo: handpanImage.url, alt: "Students playing handpans together in a sunlit pavilion overlooking the river in Rishikesh", badges: ["FLEXIBLE"], note: "SOUND · STILLNESS · FLOW", label: "ALL LEVELS", title: "Handpan Classes", text: "Learn to listen, play and build a natural relationship with the handpan in the serene atmosphere of Rishikesh.", bullets: ["Single, 3-class & 7-day packages", "75–90 minute sessions", "Technique, rhythm & guided play", "Care, tuning & subtle sensitivity"], link: "Explore handpan classes", to: "/handpan-classes" },
    { visual: "sound", photo: sessionsImage, alt: "Sound healing session with crystal and Tibetan singing bowls", badges: ["PRIVATE & GROUP"], note: "BOWLS · GONG · CHIMES · HANDPAN", label: "Private & Group Bookings", title: "Sound Healing Sessions", text: "Deep, restorative sessions held one-to-one or in small groups in Rishikesh.", bullets: ["Deep vibrational immersion with gong, crystal & Tibetan singing bowls, chimes & handpan", "Release stress, restore balance & enter profound inner stillness", "Individual private sessions available — private group sessions for up to 8–10 people", "Occasional group workshops open to all — keep an eye out for upcoming dates"], link: "Explore sound healing sessions", to: "/sound-healing-sessions" },
    { visual: "sound", photo: retreatsImage, alt: "Group sound circle with singing bowls beside the river", badges: ["FOR RETREATS & SPACES"], note: "SOUND · NĀDA YOGA · STILLNESS", label: "Retreats & Wellness Spaces", title: "Wellness Retreats & Programs", text: "Immersive sound and Nāda Yoga experiences designed for retreats, hotels, resorts and wellness spaces.", bullets: ["Sound healing experiences for your guests", "Nāda Yoga, meditation & conscious listening", "Custom programs built around your retreat", "Hotels, resorts, yoga schools & private groups"], link: "Explore retreat programs", to: "/wellness-retreats" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <a className="brand" href="#top"><span>Svarashakti</span><small>EST. 2010</small></a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
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
            <div className="eyebrow">NAAD — NATURE IN MOTION</div>
            <div className="hero-logo-wrap"><img className="hero-logo" src={logoAsset.url} alt="Svarashakti owl emblem" /></div>
            <h1>Svarashakti</h1><p className="hero-tag">The Power of Sound</p>
            <p className="location">Rishikesh, Uttarakhand · India</p>
            <div className="hero-actions"><Button asChild variant="gold" size="hero"><a href="#courses">Explore Courses</a></Button><Button asChild variant="glass" size="hero"><Link to="/about">Meet the Facilitator</Link></Button></div>
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
            <div className={`course-visual ${course.visual}${course.photo ? " has-photo" : ""}`}>{course.photo && <img className="course-photo" src={course.photo} alt={course.alt} width={1200} height={800} loading="lazy" />}<div>{course.badges.map((badge, i) => <span className={i ? "badge blue" : "badge"} key={badge}>{badge}</span>)}</div>{!course.photo && <span className="instrument-mark">{course.visual === "sound" ? "◉" : "⌁"}</span>}<div className="visual-note">{course.note}</div></div>
            <div className="course-body"><div className="mini-label">{course.label}</div><h3>{course.title}</h3><p>{course.text}</p><ul>{course.bullets.map(b => <li key={b}><Check />{b}</li>)}</ul>{course.to ? <Link className="text-link" to={course.to}>{course.link}<ArrowRight /></Link> : <a className="text-link" href="#contact">{course.link}<ArrowRight /></a>}</div>
          </article>)}</div>
        </section>

        <section className="section experience" id="experience"><div className="split"><div className="experience-copy"><div className="section-kicker">THE RISHIKESH EXPERIENCE</div><h2>Learn where the river teaches you to listen.</h2><p>Set in the spiritual heart of Rishikesh, Svarashakti brings together the stillness of the Himalayas, the presence of the Ganges and the living practice of sound.</p><blockquote>“Naad is not only something we hear. It is something we learn to notice.”</blockquote><Button asChild variant="gold" size="hero"><Link to="/about">Meet Tushar</Link></Button></div><div className="river-art"><img src={experienceImage.url} alt="Tushar playing the handpan during a sound healing session" width={1060} height={1520} loading="lazy"/><span>RISHIKESH<small>UTTARAKHAND · INDIA</small></span></div></div></section>

        <section className="section cta" id="contact"><div className="cta-inner"><div className="section-kicker">BEGIN YOUR JOURNEY</div><h2>Come to the sound.</h2><p>Whether you are beginning your healing practice, deepening your relationship with sound, or learning the handpan — start with a conversation.</p><div className="about-connect-actions"><Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088?text=Hi%20Svarashakti%2C%20I%27d%20like%20to%20enquire%20about%20your%20courses%20and%20sessions.">Enquire on WhatsApp</a></Button><Button asChild variant="glass" size="hero"><a href="mailto:svarashakti.963@gmail.com?subject=Course%20%2F%20Session%20Enquiry%20from%20Website">Enquire by Email</a></Button></div></div></section>
      </main>
      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="#top">Home</a><Link to="/about">About</Link><a href="#courses">Courses</a><a href="#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
