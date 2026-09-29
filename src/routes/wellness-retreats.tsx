import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/handpan-masterclass.jpg";

export const Route = createFileRoute("/wellness-retreats")({
  head: () => ({
    meta: [
      { title: "Wellness Retreats & Programs | Svarashakti" },
      { name: "description", content: "Immersive sound and Nāda Yoga experiences for retreats, hotels, resorts, yoga schools and wellness spaces — designed around your program." },
      { property: "og:title", content: "Wellness Retreats & Programs | Svarashakti" },
      { property: "og:description", content: "Sound, silence and conscious experiences for retreats and wellness spaces — from a single sound healing session to a complete series of practices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WellnessRetreats,
});

const offers = [
  {
    name: "Sound Healing Experiences",
    text: "Immersive sessions using handpan, singing bowls, gong, chimes, tuning forks, and other sound instruments to create spaces for relaxation, deep listening, meditation, and inner awareness.",
  },
  {
    name: "Nāda Yoga Practices",
    text: "Traditional practices centred around the experience of sound, breath, listening, vibration, mantra, and inner silence. These can be integrated into yoga retreats, meditation programs, morning practices, or evening experiences.",
  },
  {
    name: "Custom Wellness Programs",
    text: "We can design a program around the theme, duration, group size, and intention of your retreat. Programs may combine sound healing, Nāda Yoga, guided meditation, breath awareness, and conscious listening.",
  },
  {
    name: "Retreat & Hospitality Collaborations",
    text: "Hotels, resorts, retreat centres, yoga schools, and wellness practitioners can invite Svarashakti to conduct individual experiences or become part of their larger retreat program.",
  },
];

const formats = [
  ["EVENING SOUND JOURNEY", "A 60-minute immersive session that settles your guests into deep rest."],
  ["MORNING NĀDA YOGA", "A gentle practice of sound, breath and listening to open the day."],
  ["MULTI-DAY IMMERSION", "A complete series of sound, meditation and Nāda Yoga practices."],
  ["BESPOKE PROGRAM", "A specially designed wellness program built around your retreat's intention."],
];

const partners = [
  "Wellness Hotels & Resorts",
  "Yoga & Meditation Retreats",
  "Retreat Organisers",
  "Wellness Centres",
  "Corporate Wellness Programs",
  "Private Groups",
  "Yoga Teacher Trainings",
  "Conscious Travel & Hospitality Experiences",
];

function WellnessRetreats() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground course-page sessions-page">
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
          <img src={heroImage} alt="Group sound circle with singing bowls beside the river in Rishikesh" width={1200} height={800} />
          <div className="course-hero-overlay" />
          <div className="course-hero-content">
            <div className="section-kicker">FOR RETREATS · HOTELS · WELLNESS SPACES</div>
            <h1>Wellness Retreats &amp; Programs</h1>
            <p className="course-hero-sub">Sound, Silence &amp; Conscious Experiences for Retreats and Wellness Spaces</p>
          </div>
        </section>

        <section className="course-overview">
          <h2>Sound for Your Space</h2>
          <p>Svarashakti offers immersive sound and Nāda Yoga experiences for wellness retreats, hotels, resorts, yoga schools, wellness centres, and private retreat groups.</p>
          <p>We collaborate with retreat organisers and hospitality spaces to create meaningful experiences that complement their existing wellness programs — <strong>from a single sound healing session to a complete series of sound, meditation, and Nāda Yoga practices.</strong></p>
        </section>

        <section className="course-curriculum">
          <div className="section-kicker">WHAT WE OFFER</div>
          <h2>Experiences We Bring</h2>
          <div className="session-type-grid">
            {offers.map((offer) => (
              <article className="session-type" key={offer.name}>
                <h3>{offer.name}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sessions-band">
          <div className="sessions-content">
            <div className="section-kicker">FLEXIBLE FORMATS</div>
            <h2>Designed Around Your Retreat</h2>
            <p>Every retreat has its own rhythm. We work with organisers to create experiences that fit naturally into the existing schedule — <strong>whether it is a 60-minute evening sound journey, a morning Nāda Yoga practice, a multi-day sound immersion, or a specially designed wellness program.</strong></p>
            <div className="retreat-formats">
              {formats.map(([title, text]) => (
                <div className="retreat-format" key={title}>
                  <span>{title}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="course-included">
          <div className="section-kicker">WHO WE WORK WITH</div>
          <h2>A Collaboration for Every Space</h2>
          <div className="included-grid">{partners.map((item) => <div key={item}>✦ {item}</div>)}</div>
          <blockquote className="retreat-quote">Every space holds sound differently. We shape each experience to fit the place, the people and the purpose of your program.</blockquote>
        </section>

        <section className="course-cta sessions-closing">
          <div className="section-kicker">BRING SOUND INTO YOUR RETREAT</div>
          <h2>Let's create something meaningful.</h2>
          <p>If you are organising a retreat, running a wellness space, or looking to introduce authentic sound and Nāda Yoga practices into your program, we would be happy to collaborate.</p>
          <blockquote><strong>Let's create a meaningful sound experience for your guests.</strong></blockquote>
          <div className="about-connect-actions">
            <Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088?text=Hi%20Svarashakti%2C%20I%27d%20like%20to%20enquire%20about%20sound%20experiences%20for%20our%20retreat%20or%20wellness%20space.">Enquire on WhatsApp</a></Button>
            <Button asChild variant="outline" size="hero"><a href="mailto:svarashakti.963@gmail.com?subject=Retreat%20%26%20Wellness%20Program%20Enquiry">Enquire for Retreat &amp; Wellness Programs</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="/#top">Home</a><Link to="/about">About</Link><a href="/#courses">Courses</a><a href="/#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
