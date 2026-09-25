import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import tusharImage from "@/assets/tushar-handpan.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet Tushar Nirankari — Svarashakti" },
      { name: "description", content: "The Facilitator — Tushar Nirankari aka Rasayana. From festival stages to the profound stillness of sound healing — a journey of transformation through sound." },
      { property: "og:title", content: "Meet Tushar Nirankari — Svarashakti" },
      { property: "og:description", content: "From the pulsating energy of festival stages to the profound stillness of sound healing — a journey of transformation through sound." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`site-header header-light${menuOpen ? " nav-open" : ""}`}>
        <Link className="brand" to="/"><span>Svarashakti</span><small>EST. 2010</small></Link>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a className="active" href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Book Now</a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="about-hero">
          <div className="section-kicker">THE FACILITATOR</div>
          <h1 className="about-title">Meet Tushar Nirankari</h1>
          <p className="about-aka">aka Rasayana</p>
          <p className="about-tagline">From the pulsating energy of festival stages to the profound stillness of sound healing — a journey of transformation through sound.</p>
          <div className="about-photo">
            <img src={tusharImage.url} alt="Tushar Nirankari playing the handpan during a sound healing session" />
          </div>
        </section>

        <section className="about-story">
          <h2 className="about-name">Tushar Nirankari</h2>
          <div className="section-kicker">FOUNDER &amp; LEAD FACILITATOR</div>

          <h3>The DJ Years</h3>
          <p>It all started with the feel of my first gig as a Disc Jockey in 2010. Little did I know that it would be the start of an incredible journey — performing at prestigious festivals like <strong>Sunburn</strong> and <strong>Supersonic</strong>, at Google events and open-air concerts across India, and sharing the stage with national and international artists like Nucleya, Bohemia, Nari Milani, Sound Avtar, NDS, Redmus, Hardcandys, Hardy Sandhu, and many more.</p>
          <p>Winning the <strong>War of DJs competition in 2015</strong> at Tihar Jail in Delhi was a highlight — a testament to years of hard work and dedication. But my passion for music always went beyond just performing.</p>

          <h3>The Technical Foundation</h3>
          <p>I completed a diploma in <strong>Audio Engineering and Music Production</strong> in 2017 and have since worked with several studios, assisting in recording sessions and releasing my own tracks on audio platforms. My musical journey took me across India — performing regular gigs in Kolkata, Goa, Delhi, Lucknow, Jaipur, and more.</p>
          <p>During my studies and performances, I developed a deeper interest in the science of sound — how it travels, different frequencies, and vibrations. This curiosity led me to realize the striking similarity between the <strong>Nature of Sound</strong> and the <strong>Law of Nature</strong>.</p>

          <h3>The Calling</h3>
          <p>After a decade of performing as a DJ, I felt a calling to explore the deeper side of sound. In <strong>2019</strong>, I took a break from my DJ career and embarked on a journey to learn about sound healing. I devoured documentaries, workshops, and research — eager to understand how sound could be used to heal and transform lives.</p>
          <p>I learned about different frequencies and how they affect our bodies and minds. I explored various instruments used in sound healing and took courses both online and offline. My perception of music expanded exponentially. Every sound has a frequency and a profound impact on us — I began to see music as a powerful tool for transformation and growth.</p>

          <div className="about-stats">
            <div className="about-stat"><b>14+</b><span>Years in Sound</span></div>
            <div className="about-stat"><b>DJ</b><span>&amp; Audio Engineer</span></div>
            <div className="about-stat"><b>Naad</b><span>Yog Practitioner</span></div>
          </div>
        </section>

        <section className="about-mission">
          <h2>The Mission</h2>
          <p>Have you ever stopped to consider that the universe is composed of vibrations, and that sound is the thread that weaves it all together? Researchers have long agreed that our universe is indeed made up of vibrations that can be perceived as sound.</p>
          <p>The hum of the earth, the rhythm of our breath, the vibrations of our thoughts and emotions — all are interconnected and interdependent. My mission is to draw attention to the incredible significance of sound and its behaviour, and to show how it holds the key to understanding the very laws of nature.</p>
          <p className="about-quote">"By tuning into the nature of sound, we can gain a deeper appreciation for the intricate web of life and our place within it."</p>
        </section>

        <section className="about-connect">
          <div className="section-kicker">BEGIN YOUR JOURNEY</div>
          <h2 className="about-connect-title">Connect with Tushar</h2>
          <p className="about-tagline">Questions about the courses, sessions or the handpan? Start with a conversation.</p>
          <div className="about-connect-actions">
            <Button asChild variant="gold" size="hero"><a href="https://wa.me/919891304088">WhatsApp Tushar</a></Button>
            <Button asChild variant="glass" size="hero"><a href="mailto:svarashakti.963@gmail.com">Email Tushar</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="footer-grid"><div><div className="footer-brand">Svarashakti</div><p><em>Naad — Nature in motion.</em><br/>Transforming lives through the power of sound.</p></div><div><h4>Quick Links</h4><a href="/#top">Home</a><a href="/about">About</a><a href="/#courses">Courses</a><a href="/#contact">Book Now</a></div><div><h4>Connect</h4><a href="mailto:svarashakti.963@gmail.com">svarashakti.963@gmail.com</a><a href="tel:+919891304088">+91 98913 04088</a><a href="https://instagram.com/svarashakti">@svarashakti</a></div></div><div className="footer-bottom">© 2026 Svarashakti Sound Healing School · Rishikesh, India</div></footer>
    </div>
  );
}
