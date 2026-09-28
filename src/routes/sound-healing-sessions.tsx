import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sound-healing-sessions")({
  head: () => ({
    meta: [
      { title: "Sound Healing Sessions in Rishikesh | Svarashakti" },
      { name: "description", content: "Private, group, chakra and sound massage sessions in Rishikesh—a supportive space to slow down, listen and reconnect." },
      { property: "og:title", content: "Sound Healing Sessions in Rishikesh | Svarashakti" },
      { property: "og:description", content: "A personalized sound experience using vibration, breath, silence and mindful listening to support relaxation and self-awareness." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SoundHealingSessions,
});

const practices = [
  "Singing bowls",
  "Crystal bowls",
  "Gong",
  "Handpan",
  "Chimes",
  "Voice and vibration",
  "Breath awareness",
  "Guided meditation",
  "Silence and deep listening",
  "Chakra-focused practices",
];

const sessionTypes = [
  {
    name: "Private Sound Healing",
    text: "A one-to-one experience created around your individual needs. The session allows you to completely relax into the experience without having to follow anyone else's pace.",
    detail: "Deep relaxation · Mental stillness · Grounding · Emotional awareness · Inner listening · Personal reflection",
  },
  {
    name: "Private Group Session",
    text: "A shared sound experience designed for couples, families, friends, retreats, or small private groups. The instruments, duration, and flow can be adapted according to the group and the intention of the session.",
  },
  {
    name: "Chakra Sound Session",
    text: "A sound-based practice exploring the relationship between sound, attention, breath, and the chakra system. Using bowls, voice, mantra, and other instruments, the session moves through different areas of awareness associated with the chakra system.",
    detail: "Rather than treating chakras as a medical diagnosis, this is a contemplative exploration of balance, awareness, sensation, and connection within the body.",
  },
  {
    name: "Sound Massage",
    text: "A deeply immersive experience where sound and vibration become the focus. Singing bowls and other instruments are used in and around the body's space to create resonance, relaxation, and deep listening.",
  },
];

const support = [
  "Slowing down",
  "Calming an overstimulated mind",
  "Releasing physical and mental tension",
  "Deepening relaxation",
  "Becoming more aware of your breath and body",
  "Creating space for emotional processing",
  "Improving your ability to pause and listen",
  "Experiencing stillness and inner quiet",
  "Reconnecting with yourself",
];

const experience = [
  ["ARRIVE", "Leave the outside world behind and settle into the space."],
  ["LISTEN", "Allow yourself to become aware of sound, vibration and breath."],
  ["RELEASE", "Let the body gradually soften and the mind become quieter."],
  ["REST", "Enter a deeper state of relaxation and presence."],
  ["RECONNECT", "Return with greater awareness of yourself and your surroundings."],
];

function SoundHealingSessions() {
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
        <section className="course-hero sessions-hero">
          <div className="sessions-photo-placeholder" role="img" aria-label="Reserved space for a sound healing session photo" />
          <div className="course-hero-overlay" />
          <div className="course-hero-content">
            <div className="section-kicker">PRIVATE · GROUP · CHAKRA</div>
            <h1>Sound Healing Sessions</h1>
            <p className="course-hero-sub">A Space to Slow Down, Listen &amp; Reconnect</p>
          </div>
        </section>

        <section className="course-overview sessions-intro">
          <h2>A Space to Slow Down</h2>
          <p>Sound healing is not about forcing something to change.</p>
          <p>It is about creating a space where you can <strong>slow down, become quiet, listen inward, and experience yourself differently.</strong></p>
          <p>Every session is an invitation to step away from the constant activity of everyday life and enter a deeper state of relaxation and awareness. Through sound, vibration, breath, silence, and mindful listening, the body and mind are given space to settle.</p>
        </section>

        <section className="sessions-band">
          <div className="sessions-content">
            <div className="section-kicker">A SESSION DESIGNED FOR YOU</div>
            <h2>Your Needs. Your Moment.</h2>
            <p>No two people arrive with the same experience. Your session can be designed around <strong>your needs, your current state, your personal history, and what you are experiencing at that moment.</strong></p>
            <p>Before the session, we take time to understand what you are looking for—whether it is relaxation, emotional release, mental stillness, grounding, deeper self-awareness, or simply a need to pause.</p>
            <div className="practice-grid">{practices.map((practice) => <div key={practice}>✦ {practice}</div>)}</div>
            <p>The intention is not to follow a fixed formula, but to create an experience that is appropriate for <strong>you and the space you are in.</strong></p>
          </div>
        </section>

        <section className="course-curriculum sessions-types">
          <div className="section-kicker">WAYS TO EXPERIENCE SOUND</div>
          <h2>Types of Sound Healing Sessions</h2>
          <div className="session-type-grid">
            {sessionTypes.map((session) => (
              <article className="session-type" key={session.name}>
                <h3>{session.name}</h3>
                <p>{session.text}</p>
                {session.detail && <p className="session-detail">{session.detail}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="course-included sessions-support">
          <div className="section-kicker">SUPPORTIVE WELLNESS PRACTICE</div>
          <h2>What a Sound Healing Session Can Support</h2>
          <p>Sound healing is not a replacement for medical or psychological treatment, and it does not claim to cure a disease or condition. Instead, it can be used as a <strong>supportive wellness practice</strong> that may help create the conditions for relaxation, rest, and greater self-awareness.</p>
          <div className="included-grid">{support.map((item) => <div key={item}>✦ {item}</div>)}</div>
          <blockquote><strong>The sound does not do the healing for you.</strong> It creates the space in which you can rest, listen, reconnect, and allow your own healing processes to unfold.</blockquote>
        </section>

        <section className="sessions-stillness">
          <div className="sessions-content">
            <div className="section-kicker">FROM SOUND TO STILLNESS</div>
            <h2>There Is Nothing You Have to Force.</h2>
            <p>A session may begin with sound. Then gradually, the sound becomes softer. The breath becomes more noticeable. The mind begins to slow down.</p>
            <p>There may be moments where you feel deeply relaxed, spacious, or absorbed in the experience—sometimes approaching a <strong>trance-like state of deep relaxation and focused awareness.</strong></p>
            <p>There is no particular state you have to reach. Sometimes the most powerful part of a sound healing session is simply <strong>being still.</strong></p>
          </div>
        </section>

        <section className="course-curriculum sessions-journey">
          <div className="section-kicker">THE EXPERIENCE</div>
          <h2>A Gentle Journey Inward</h2>
          <div className="experience-steps">
            {experience.map(([title, text], index) => (
              <div className="experience-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="course-cta sessions-closing">
          <div className="section-kicker">YOUR SESSION, YOUR EXPERIENCE</div>
          <h2>Come as you are.</h2>
          <p>Every session is different. You don't need to know anything about sound healing. Simply arrive, become comfortable, and allow yourself to experience.</p>
          <blockquote>Listen. Feel. Slow down.<br />Let the sound create the space.</blockquote>
          <div className="about-connect-actions">
            <Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088">Enquire on WhatsApp</a></Button>
            <Button asChild variant="outline" size="hero"><a href="mailto:svarashakti.963@gmail.com">Email Us</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="/#top">Home</a><Link to="/about">About</Link><a href="/#courses">Courses</a><a href="/#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}