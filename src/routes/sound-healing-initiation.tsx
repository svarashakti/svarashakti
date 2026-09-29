import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import initiationImage from "@/assets/sound-healing-initiation.png.asset.json";

export const Route = createFileRoute("/sound-healing-initiation")({
  head: () => ({
    meta: [
      { title: "Sound Healing Initiation — 7-Day Certification | Svarashakti" },
      { name: "description", content: "A 7-day immersive sound healing certification in Rishikesh — theory, practice and Naad Yoga, from the nature of sound to healing others. All levels welcome." },
      { property: "og:title", content: "Sound Healing Initiation — 7-Day Certification | Svarashakti" },
      { property: "og:description", content: "A 7-day immersive sound healing certification in Rishikesh — theory, practice and Naad Yoga, from the nature of sound to healing others." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CourseDetail,
});

const curriculum = [
  {
    day: "Day 1",
    title: "Understanding the Nature of Sound",
    sections: [
      { label: "THEORY", items: ["What is sound, vibration, and frequency?", "How sound travels through body & environment", "Conscious & subconscious perception", "Types of sound waves", "Frequency vs amplitude | Pitch vs loudness", "Project preview"] },
      { label: "NAAD YOGA PRACTICE", items: ["Breath & Sound Awareness — observing natural body vibrations and subtle internal sounds"] },
    ],
  },
  {
    day: "Day 2",
    title: "Sacred Sound & Scientific Insight",
    sections: [
      { label: "THEORY", items: ["Frequency ranges (audible, inaudible, therapeutic)", "Harmonics, resonance & energy fields", "How sound represents the fundamental laws of nature", "Sound & brain waves", "Natural vs artificial sound use to change brain waves"] },
      { label: "PRACTICE", items: ["Deep listening — bowls and gong"] },
      { label: "NAAD YOGA PRACTICE", items: ["Antar Mouna (Inner Listening) — developing sensitivity to inner silence and subtle sound"] },
    ],
  },
  {
    day: "Day 3",
    title: "Sound Healing — Origins and Instruments",
    sections: [
      { label: "THEORY", items: ["History of Naad Yoga and Sound Healing", "Healing frequencies & sacred intention", "Instruments: bowls, handpan, chimes, gongs, etc."] },
      { label: "PRACTICE", items: ["Guided meditation", "Instrument exploration"] },
      { label: "NAAD YOGA PRACTICE", items: ["AUM Resonance Practice — using voice to feel vibration moving through the body"] },
    ],
  },
  {
    day: "Day 4",
    title: "Vibration & Healing the Human System",
    sections: [
      { label: "THEORY", items: ["Sound's effect on body, mind, emotions", "Anatomy & physiology", "Brain–heart coherence", "Binaural beats, Solfeggio, Isochronic tones"] },
      { label: "PRACTICE", items: ["Creating sound atmospheres", "Emotional release"] },
      { label: "NAAD YOGA PRACTICE", items: ["Nadi Activation through Sound — using humming & vibration to activate energy channels"] },
    ],
  },
  {
    day: "Day 5",
    title: "Chakra Healing with Sound",
    sections: [
      { label: "THEORY", items: ["Chakra system", "Frequencies & imbalances", "Project preview", "Learn how to design sound therapy for individuals based on their energy patterns"] },
      { label: "PRACTICE", items: ["Chakra balancing with bowls and voice", "Daily sadhana"] },
      { label: "NAAD YOGA PRACTICE", items: ["Beej Mantra Chanting — activating each chakra through its seed sound"] },
    ],
  },
  {
    day: "Day 6",
    title: "Healing Others + Intention-Based Sound Work",
    sections: [
      { label: "THEORY", items: ["Holding space & neutrality", "Power of intention", "Session structure", "Ethics & safety"] },
      { label: "PRACTICE", items: ["1:1 healing sessions"] },
      { label: "NAAD YOGA PRACTICE", items: ["Sound & Silence Balance — learning when to play and when to pause for deeper impact"] },
    ],
  },
  {
    day: "Day 7",
    title: "Integration, Silence & Certification",
    sections: [
      { label: "THEORY", items: ["Role of silence", "Emotional balance & non-doing", "Session integration"] },
      { label: "PRACTICE", items: ["Full sound healing session", "Sharing & certification"] },
      { label: "NAAD YOGA PRACTICE", items: ["Anahata Naad Meditation — experiencing inner sound in deep stillness"] },
    ],
  },
];

function CourseDetail() {
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
          <img src={initiationImage.url} alt="Tibetan singing bowls, crystal bowls, gong, chimes and a handpan arranged on wood" />
          <div className="course-hero-overlay" />
          <div className="course-hero-content">
            <div className="section-kicker">7-DAY INTENSIVE CERTIFICATION</div>
            <h1>Sound Healing Initiation</h1>
            <p>Begin your journey into the transformative world of sound healing on the sacred banks of the Ganges in Rishikesh.</p>
          </div>
        </section>

        <section className="course-overview">
          <h2>Course Overview</h2>
          <p>The Sound Healing Initiation is a 7-day immersive program designed for all levels — from complete beginners to advanced practitioners. This comprehensive course covers the full spectrum of sound therapy, blending ancient wisdom with modern techniques. Set in the spiritual heart of Rishikesh, every session is enriched by the energy of the Himalayas and the sacred Ganges.</p>
          <p>Upon completion, participants receive a certification recognizing their complete training in sound healing, enabling them to practice with confidence.</p>
          <div className="course-facts">
            <div className="course-fact"><span>DURATION</span><b>7 Days</b></div>
            <div className="course-fact"><span>LEVEL</span><b>All</b></div>
            <div className="course-fact"><span>CERTIFICATION</span><b>Yes</b></div>
            <div className="course-fact"><span>PRICE</span><b><s>₹70,000</s> ₹45,000 <small>(~$530)</small></b></div>
          </div>
        </section>

        <section className="course-curriculum">
          <h2>Curriculum</h2>
          <div className="day-list">
            {curriculum.map((day) => (
              <article className="day-card" key={day.day}>
                <div className="day-head"><span className="day-badge">{day.day}</span><h3>{day.title}</h3></div>
                {day.sections.map((section) => (
                  <div className="day-section" key={section.label}>
                    <div className="day-label">{section.label}</div>
                    <ul>{section.items.map((item) => <li key={item}>✦ {item}</li>)}</ul>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <article className="day-card highlights-card">
            <div className="day-head"><span className="day-leaf">🌿</span><h3>Additional Highlights (Rishikesh Experience)</h3></div>
            <ul className="day-bullets">
              <li>✦ Himalayan natural energy</li>
              <li>✦ Ideal for yoga teachers, therapists &amp; seekers</li>
              <li>✦ No musical background required</li>
              <li>✦ Small groups for deeper learning</li>
            </ul>
          </article>
        </section>

        <section className="course-included">
          <h2>What's Included</h2>
          <div className="included-grid">
            <div>✦ 7 days of expert-led training</div>
            <div>✦ All course materials &amp; handouts</div>
            <div>✦ Certification upon completion</div>
            <div>✦ Access to instruments during the course</div>
          </div>
        </section>

        <section className="course-cta">
          <div className="section-kicker">RESERVE YOUR PLACE</div>
          <h2>Come to the sound.</h2>
          <p>Small groups and personal attention — start with a conversation to book your place in the next batch.</p>
          <div className="about-connect-actions">
            <Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088?text=Hi%20Svarashakti%2C%20I%27d%20like%20to%20enquire%20about%20the%20Sound%20Healing%20Initiation%20course.">Enquire on WhatsApp</a></Button>
            <Button asChild variant="outline" size="hero"><a href="mailto:svarashakti.963@gmail.com">Email Us</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="/#top">Home</a><Link to="/about">About</Link><a href="/#courses">Courses</a><a href="/#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
