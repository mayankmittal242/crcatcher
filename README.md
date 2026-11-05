# CR Catcher — Website (Phase 1)

An informational one-page website for CR Catcher, built with React + Vite.
Sections: Home, What We Make, Quality (and order process), About Us, Contact (phone, WhatsApp, email, address, Facebook, Instagram).
No shop, no login.

## Update your details

Open **`src/siteConfig.js`** — every phone number, email, address, social link, product and quality point is there.
Lines marked `// TODO` still hold placeholder values and must be replaced before going live.

## Run on your computer

Needs Node.js 18 or newer.

```bash
npm install
npm run dev        # opens at http://localhost:5173
```

## Publish

```bash
npm run build      # creates the dist/ folder
```

Upload the contents of `dist/` to any static host — Netlify, Vercel, GitHub Pages, Hostinger, or your own server.

## Project layout

```
src/
  siteConfig.js        ← all text, contacts and links
  styles.css           ← colours and design (theme colours at the top)
  App.jsx
  components/
    Header.jsx  Hero.jsx  Products.jsx  Quality.jsx
    About.jsx   Contact.jsx  Footer.jsx  WhatsAppButton.jsx  Logo.jsx
```

## Phase 2 ideas

Product photos gallery, enquiry form, then e-commerce and login.
