import "./globals.css";

const PHONE_DISPLAY = "(809) 561-7590";
const PHONE_TEL = "tel:+18095617590";
const WHATSAPP = "https://wa.me/18095617590";
const EMAIL = "sonrisaslosrios03@hotmail.com";
const ADDRESS = "Calle A No. 50, Apartamento 101, Los Ríos, Santo Domingo, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Cl%C3%ADnica%20Odontol%C3%B3gica%20Sonrisas%2C%20Calle%20A%20No.%2050%2C%20Apartamento%20101%2C%20Los%20R%C3%ADos%2C%20Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana&output=embed";

const HERO_IMG = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "✨",
    title: "Limpieza dental",
    text: "Profilaxis profesional que elimina sarro y placa para encías y dientes sanos.",
  },
  {
    icon: "😁",
    title: "Ortodoncia",
    text: "Brackets y alineadores para corregir la alineación y lograr una sonrisa perfecta.",
  },
  {
    icon: "🦷",
    title: "Implantes dentales",
    text: "Reemplazo permanente de piezas perdidas, con aspecto y función natural.",
  },
  {
    icon: "🪥",
    title: "Prótesis dentales",
    text: "Prótesis parciales y totales cómodas y de aspecto natural.",
  },
  {
    icon: "💊",
    title: "Endodoncia",
    text: "Tratamientos de conducto para salvar piezas afectadas y aliviar el dolor.",
  },
  {
    icon: "🤍",
    title: "Odontología estética",
    text: "Blanqueamiento y carillas que realzan la belleza de tu sonrisa.",
  }
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">🦷</span>
            <span className="brand-name">
              Clínica Sonrisas
              <small>Clínica dental</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">🦷 Clínica dental en Los Ríos</span>
              <h1>
                Una sonrisa sana <span>cambia todo</span>
              </h1>
              <p className="lead">Odontología integral en Los Ríos, Santo Domingo. Limpieza, ortodoncia, implantes y más: cuidado dental profesional para toda la familia, con trato amable y precios accesibles.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Agendar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 (809) 561-7590
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Apartamento 101</strong>
                  Santo Domingo, D.N.
                </div>
                <div>
                  <strong>🕘 Agenda tu cita por WhatsApp</strong>
                  Escríbenos para reservar
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Necesitas una revisión dental?</h2>
              <p>Escríbenos por WhatsApp y agenda tu cita: la primera evaluación es el primer paso a una sonrisa sana.</p>
              <ul className="hours-list">
                              <li>
                <span>Horario</span>
                <span>Consúltalo por WhatsApp</span>
              </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Agendar mi cita
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Salud dental para toda la familia</h2>
              <p>Desde la prevención hasta tratamientos especializados, tu sonrisa en buenas manos.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Tu clínica dental en Los Ríos</h2>
              <p>La Clínica Odontológica Sonrisas está ubicada en la Calle A No. 50, Apartamento 101, sector Los Ríos, Santo Domingo, brindando atención odontológica integral a la comunidad.</p>
              <p>Sabemos que ir al dentista puede generar nervios: por eso ofrecemos un trato cercano y explicamos cada paso, para que vengas con confianza y salgas sonriendo.</p>
              <ul className="about-points">
                              <li>
                <span className="tick">✓</span>
                <span><strong>Atención familiar:</strong> odontología para niños y adultos.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Trato sin miedo:</strong> explicamos todo antes de empezar.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Cita por WhatsApp:</strong> agenda fácil y rápido.</span>
              </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Clínica dental Clínica Sonrisas" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="Clínica Odontológica Sonrisas — galería" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>Consúltalo por WhatsApp — agenda tu cita por WhatsApp al (809) 561-7590.</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en Calle A No. 50, Apartamento 101, Los Ríos. Abre el mapa para ver la ruta
                    desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Clínica Odontológica Sonrisas"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Agenda hoy mismo</h2>
              <p>
                Escríbenos por WhatsApp, llámanos o envíanos un correo: te
                atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">(809) 561-7590</div>
                <div className="hint">Agenda tu cita aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">(809) 561-7590</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <div className="label">Correo</div>
                <div className="value" style={{ fontSize: "0.95rem", wordBreak: "break-all" }}>{EMAIL}</div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Clínica Odontológica Sonrisas</strong>
              {ADDRESS}
              <br />
              Tel. (809) 561-7590
            </div>
            <div>
              <strong>Horario</strong>
              Consúltalo por WhatsApp
              <br />
              <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>{EMAIL}</a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los servicios mostrados son categorías generales y pueden ajustarse
            a la oferta real del negocio.
          </p>
        </div>
      </footer>
    </>
  );
}
