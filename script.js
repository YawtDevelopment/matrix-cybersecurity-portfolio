/* Hannah Yawt — Matrix-inspired responsive portfolio
   Assignment concepts: Flexbox, CSS Grid, responsive media queries. */
:root {
  --bg: #050907;
  --panel: rgba(9, 20, 14, 0.92);
  --panel-light: rgba(12, 31, 19, 0.88);
  --green: #42ff8b;
  --green-bright: #a5ffbf;
  --green-dim: #1ba957;
  --text: #e0f5e7;
  --muted: #91aa99;
  --border: rgba(66, 255, 139, 0.25);
  --shadow: 0 0 28px rgba(25, 255, 110, 0.08);
  --radius: 14px;
  --content-width: 1120px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; min-height: 100vh; display: flex; flex-direction: column;
  background: radial-gradient(ellipse at top, #0a1b10 0%, var(--bg) 52%);
  color: var(--text); font-family: "Consolas", "SFMono-Regular", "Courier New", monospace;
  line-height: 1.65;
}
a { color: var(--green); text-decoration: none; }
a:hover, a:focus-visible { color: var(--green-bright); text-shadow: 0 0 10px rgba(66,255,139,.35); }
button, input { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
:focus-visible { outline: 2px solid var(--green-bright); outline-offset: 4px; }
.matrix-overlay { position: fixed; inset: 0; pointer-events: none; z-index: -1; opacity: .12; background-image: linear-gradient(rgba(66,255,139,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(66,255,139,.06) 1px, transparent 1px); background-size: 26px 26px; }
.site-header { width: min(100% - 2rem, var(--content-width)); margin: 0 auto; padding: 1.15rem 0; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-bottom: 1px solid var(--border); }
.brand { font-weight: 800; color: var(--green-bright); letter-spacing: -.04em; white-space: nowrap; }
.prompt { color: var(--green-dim); }
.cursor { color: var(--green); animation: blink 1.1s steps(2, start) infinite; }
@keyframes blink { to { visibility: hidden; } }
.primary-nav { display: flex; align-items: center; flex-wrap: wrap; gap: .4rem; }
.primary-nav a { padding: .55rem .75rem; color: var(--muted); border: 1px solid transparent; border-radius: 8px; font-size: .9rem; }
.primary-nav a:hover, .primary-nav a.active { color: var(--green-bright); border-color: var(--border); background: rgba(66,255,139,.06); }
.menu-toggle { display: none; background: transparent; color: var(--green); border: 1px solid var(--border); border-radius: 8px; padding: .45rem .65rem; cursor: pointer; }
.container { width: min(100% - 2rem, var(--content-width)); margin: 0 auto; flex: 1; }
.hero { margin-top: 2.2rem; padding: clamp(1.5rem, 5vw, 4rem); }
.panel { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); }
.eyebrow { color: var(--green); letter-spacing: .16em; font-size: .76rem; font-weight: 700; }
h1, h2, h3, p { margin-top: 0; }
h1 { font-size: clamp(2.1rem, 6vw, 4.1rem); line-height: 1.12; margin-bottom: 1rem; letter-spacing: -.055em; }
h2 { line-height: 1.25; font-size: clamp(1.45rem, 3vw, 2.1rem); }
h3 { color: var(--green-bright); }
.neon { color: var(--green-bright); text-shadow: 0 0 22px rgba(66,255,139,.23); }
.hero-copy { font-size: clamp(1.05rem, 2vw, 1.3rem); color: var(--green-bright); margin-bottom: .4rem; }
.muted { color: var(--muted); }
.hero-actions, .contact-links { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 1.5rem; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; background: var(--green); color: #041008; font-weight: 800; padding: .75rem 1rem; border: 1px solid var(--green); border-radius: 10px; }
.button:hover { color: #041008; transform: translateY(-2px); box-shadow: 0 0 22px rgba(66,255,139,.25); }
.button-ghost { color: var(--green); background: transparent; }
.button-ghost:hover { color: var(--green-bright); }
.terminal { margin-top: 1.25rem; overflow: hidden; background: rgba(4, 14, 10, 0.96); border: 1px solid rgba(66,255,139,.42); box-shadow: 0 0 0 1px rgba(66,255,139,.08), 0 0 25px rgba(66,255,139,.08), inset 0 0 24px rgba(66,255,139,.04); }
.terminal-bar { display: flex; align-items: center; gap: .8rem; padding: .8rem 1rem; background: rgba(66,255,139,.07); border-bottom: 1px solid var(--border); color: var(--muted); font-size: .82rem; text-transform: lowercase; }
.terminal-dots { display: flex; gap: .35rem; }
.terminal-dots i { display: block; width: .58rem; height: .58rem; border-radius: 50%; background: var(--green-dim); }
.terminal-dots i:nth-child(2) { opacity: .65; }.terminal-dots i:nth-child(3) { opacity: .35; }
.terminal-status { margin-left: auto; color: var(--green); font-size: .72rem; }
.terminal-body { padding: 1.1rem; }
.terminal-intro { color: var(--muted); }
.terminal-output { min-height: 2rem; max-height: 290px; overflow-y: auto; overflow-wrap: anywhere; padding-right: .35rem; }
.terminal-output p { margin: .35rem 0; color: var(--green-bright); font-size: .9rem; }
.terminal-output .system { color: #9fe7b6; }
.terminal-output .warning { color: #ffe18d; }
.terminal-output .error { color: #ff9c9c; }
.terminal-user { color: var(--green); font-weight: 700; }
code { color: var(--green-bright); background: rgba(66,255,139,.08); border-radius: 4px; padding: .1rem .3rem; }
.terminal-form { display: flex; align-items: center; gap: .6rem; border-top: 1px solid var(--border); padding-top: .9rem; margin-top: .9rem; }
.terminal-form input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); padding: .3rem; }
.terminal-form input::placeholder { color: #627e6b; }
.run-button { background: transparent; color: var(--green); border: 1px solid var(--border); border-radius: 6px; padding: .35rem .6rem; cursor: pointer; }
.run-button:hover { background: rgba(66,255,139,.1); }
.terminal-note, .small-text { color: #718c79; font-size: .75rem; margin: .9rem 0 0; }
.section-block { margin-top: 3.5rem; }
.section-heading { margin-bottom: 1rem; }
.section-heading h2 { margin-bottom: 0; }
.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.feature-card, .project-card { padding: 1.35rem; min-width: 0; }
.feature-card p, .project-card p, .content-panel p { color: var(--muted); }
.card-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; margin-bottom: 1rem; border: 1px solid var(--border); border-radius: 10px; color: var(--green-bright); background: rgba(66,255,139,.06); font-weight: 800; }
.callout { margin: 2.2rem 0 3rem; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; }
.callout h2 { margin-bottom: .5rem; }.callout p:last-child { margin-bottom: 0; }
.site-footer { width: min(100% - 2rem, var(--content-width)); margin: 2rem auto 0; padding: 1.25rem 0; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--border); }
.site-footer p { margin: 0; }.footer-divider { color: var(--green-dim); padding: 0 .35rem; }.footer-status { color: var(--green); }.status-dot { display: inline-block; width: .45rem; height: .45rem; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px rgba(66,255,139,.7); margin-right: .45rem; }
.page-content { padding-top: 2rem; }
.page-title { padding: clamp(1.3rem, 4vw, 2.4rem); margin-bottom: 1.2rem; }
.page-title h1 { font-size: clamp(2rem, 5vw, 3.2rem); margin-bottom: .5rem; }.page-title p:last-child { margin-bottom: 0; }
.about-layout, .contact-layout { display: grid; grid-template-columns: minmax(220px, .8fr) minmax(0, 1.5fr); gap: 1.2rem; align-items: stretch; }
.about-image-wrap { padding: 1rem; display: flex; align-items: center; justify-content: center; min-height: 280px; }
.profile-image { display: block; width: 100%; max-height: 420px; object-fit: cover; border-radius: 10px; border: 1px solid var(--border); }
.profile-placeholder { min-height: 220px; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; color: var(--green); font-size: 4rem; font-weight: 800; background: rgba(66,255,139,.06); border-radius: 10px; border: 1px solid var(--border); }
.profile-placeholder span { font-size: .75rem; color: var(--muted); font-weight: 400; }
.content-panel { padding: clamp(1.2rem, 3vw, 2rem); }.content-panel h2 { margin-bottom: .9rem; }.content-panel h3 { margin-top: 1.5rem; }
.text-link { display: inline-block; margin-top: .5rem; font-weight: 700; }
.project-topline { display: flex; justify-content: space-between; align-items: center; gap: .5rem; margin-bottom: 1rem; }
.project-type { color: var(--green); font-size: .7rem; letter-spacing: .1em; }.project-symbol { color: #41694e; font-size: 1.2rem; }
.project-card h2 { font-size: 1.35rem; }.project-grid { margin-bottom: 1rem; }
.tag-list { display: flex; flex-wrap: wrap; gap: .45rem; list-style: none; padding: 0; margin: 1rem 0; }
.tag-list li { color: var(--green-bright); border: 1px solid var(--border); border-radius: 5px; padding: .18rem .45rem; font-size: .72rem; }
.project-progress { margin-top: 1.2rem; }
.tiny-eyebrow { letter-spacing: .12em; font-size: .62rem; margin-bottom: .65rem; }
.snippet-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .6rem; }
.code-block { background: rgba(8, 17, 12, 0.8); border: 1px solid var(--border); border-radius: 8px; padding: .55rem .6rem; overflow: hidden; }
.code-block span { display: inline-block; color: var(--green-dim); font-size: .68rem; letter-spacing: .08em; margin-bottom: .35rem; }
.code-block pre { margin: 0; white-space: pre-wrap; word-break: break-word; font-size: .68rem; line-height: 1.5; color: var(--green-bright); }
.project-note { margin-top: 1rem; margin-bottom: 0; }
.edit-note { color: var(--muted); font-size: .8rem; }
.contact-layout { grid-template-columns: minmax(0, 1.5fr) minmax(220px, .8fr); }.contact-aside { padding: 1.4rem; }.contact-aside p { color: var(--muted); }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
@media (max-width: 760px) {
  .site-header { flex-wrap: wrap; }
  .menu-toggle { display: block; }
  .primary-nav { display: none; width: 100%; flex-direction: column; align-items: stretch; padding-top: .5rem; }
  .primary-nav.open { display: flex; }
  .primary-nav a { padding: .75rem; }
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-layout, .contact-layout { grid-template-columns: 1fr; }
  .about-image-wrap { min-height: 220px; }
  .profile-image { max-height: 360px; width: auto; max-width: 100%; }
  .callout { align-items: flex-start; flex-direction: column; }
  .snippet-row { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .container, .site-header, .site-footer { width: min(100% - 1.1rem, var(--content-width)); }
  .site-header { padding: .8rem 0; }
  .brand { font-size: .92rem; }
  .hero { margin-top: 1rem; padding: 1.2rem; }
  .card-grid { grid-template-columns: 1fr; }
  .terminal-bar { gap: .45rem; padding: .7rem; font-size: .7rem; }
  .terminal-form { flex-wrap: wrap; }
  .terminal-form input { flex-basis: 55%; }
  .run-button { margin-left: auto; }
  .hero-actions .button { width: 100%; }
  .site-footer { align-items: flex-start; flex-direction: column; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
