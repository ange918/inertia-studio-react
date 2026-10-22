import { motion } from 'framer-motion'

export default function App() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">©2026</div>
        <div className="nav-menu">MENU</div>
      </nav>

      <section className="hero">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          INERTIA
        </motion.h1>
        <img 
          className="hero-img" 
          src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80" 
          alt="Astronaut" 
        />
        <p className="hero-sub">
          We design a bold{' '}
          <img className="inline-icon" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="" />
          {' '}range of<br />
          creative digital projects that<br />
          elevate{' '}
          <img className="inline-icon" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" />
          {' '}strong brand visuals
        </p>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          <div className="marquee-text">WE CRAFT DIGITAL <span>STORIES</span> THAT INSPIRE WORLD&nbsp;&nbsp;&nbsp;</div>
          <div className="marquee-text">WE CRAFT DIGITAL <span>STORIES</span> THAT INSPIRE WORLD&nbsp;&nbsp;&nbsp;</div>
        </div>
      </section>

      <section className="unleash">
        <h2>UNLEASH</h2>
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80" alt="VR" />
      </section>

      <section className="horizon">
        <div className="shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <h2>HORIZON</h2>
      </section>

      <section className="lumix">
        <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba6851?w=1600&q=80" alt="Athlete" />
        <h2>LUMIX</h2>
      </section>

      <section className="projects">
        <div className="grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Alpine" />
            <div className="overlay">
              <div className="tag">CASE STUDY</div>
              <div className="title">ALPINE</div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80" alt="Echo" />
            <div className="overlay">
              <div className="tag">BRANDING</div>
              <div className="title">ECHO</div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Pulse" />
            <div className="overlay">
              <div className="tag">DIGITAL</div>
              <div className="title">PULSE</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2 className="studio">INERTIA <span>STUDIO</span> —</h2>
        <div className="footer-grid">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=600&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <a className="cta" href="#">VIEW ALL PROJECTS</a>
        </div>
        <div className="bottom">
          <div>© 2026 Inertia Studio. All rights reserved.</div>
          <div>Built with React + Vite</div>
        </div>
      </footer>
    </div>
  )
}
