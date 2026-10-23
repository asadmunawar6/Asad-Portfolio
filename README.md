# Asad Munawar | Executive Portfolio

A luxury, editorial-grade personal portfolio website for **Asad Munawar**, Business Development Manager specializing in B2B client acquisition, technology sales, LinkedIn outreach, email marketing, Upwork, Fiverr, and growth leadership.

Designed with the **Executive Noir** aesthetic philosophy (*Strategy Meets Sophistication*), featuring champagne-gold architectural hairlines, fine typography pairings, motion design, and complete static deployability on **GitHub Pages**.

---

## 🏛 Visual & Architectural Philosophy

- **Art Direction**: Executive Noir — Midnight Ink (`#0B1017`), Dark Graphite (`#20252B`), and Champagne Gold (`#C7A773`).
- **Typography**: Cormorant Garamond (editorial accents) paired with Plus Jakarta Sans (interface and body).
- **Zero-AI-Slop & Anti-Pill Discipline**: Unboxed metadata with clean typographic separators (`·`), deliberate vertical rhythm, and authentic resume-backed initiatives.
- **Client-Side Only**: 100% static, zero server dependencies, fully compatible with GitHub Pages hosting.

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/                     # Static public assets (resume PDF, images)
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx            # Narrative & core competency pillars
│   │   ├── AcquisitionChannels.tsx     # Upwork, Fiverr, LinkedIn, Email workflows
│   │   ├── BusinessApproach.tsx        # 6-phase consultative strategy timeline
│   │   ├── ContactSection.tsx          # Direct email & functional copy-to-clipboard
│   │   ├── CoreCapabilities.tsx        # 6 core B2B capability panels
│   │   ├── CustomCursor.tsx            # Desktop precision pointer ring
│   │   ├── EducationSection.tsx        # BS in Computer Science (Univ. of South Asia)
│   │   ├── ExperienceTimeline.tsx      # Exact career history with overlap handling
│   │   ├── Footer.tsx                  # Monogram, dynamic year, back-to-top
│   │   ├── FreelanceProfilesSection.tsx # Managed Upwork & Freelancer.com profiles with screenshots & links
│   │   ├── Hero.tsx                    # Typographic hero & architectural portrait frame
│   │   ├── Navbar.tsx                  # 3-zone contract fixed navigation
│   │   ├── Preloader.tsx               # Minimal luxury monogram entrance
│   │   ├── ProfessionalHighlights.tsx  # 4.5+ years, 5 BDs led, AI & Cloud focus
│   │   ├── ProjectShowcase.tsx         # Documented email & LinkedIn initiatives
│   │   ├── ScrollProgress.tsx          # Top subtle gold reading bar
│   │   ├── SectionHeader.tsx           # Reusable luxury section header
│   │   └── ToolkitSection.tsx          # Prospecting, outreach, freelance, and CRM tools
│   ├── data/
│   │   └── portfolioData.ts    # Centralized single source of truth for all content
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html                  # SEO, OpenGraph, JSON-LD structured data, fonts
├── package.json
├── tsconfig.json
└── vite.config.ts              # Base path configured for GitHub Pages
```

---

## ⚡ Quickstart & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
The static production assets will be output to the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization & Updating Content

All biographical information, career history, contact details, and external links are centralized in a single file:

👉 **`src/data/portfolioData.ts`**

### 1. Replacing the Portrait Frame with a Real Photo
1. Place your photograph (e.g., `portrait.jpg`) in the `public/` directory.
2. Open `src/data/portfolioData.ts` and update:
   ```ts
   links: {
     portraitImageUrl: "./portrait.jpg", // or your uploaded image path
     // ...
   }
   ```
If left empty `""`, the site renders a high-end architectural monogram portrait placeholder.

### 2. Adding Verified Profile URLs (LinkedIn, Upwork, Fiverr)
Per the Master Prompt guidelines, external profile buttons only appear when a real URL is provided (no `#` or broken links):
```ts
links: {
  linkedInUrl: "https://www.linkedin.com/in/your-verified-handle",
  upworkUrl: "https://www.upwork.com/freelancers/~your-id",
  fiverrUrl: "https://www.fiverr.com/your-username",
  // ...
}
```

### 3. Adding Freelancing Profile Screenshots & Links (Upwork, Freelancer.com, Fiverr)
In `src/data/portfolioData.ts`, navigate to `freelanceProfiles`. You can customize each account:
```ts
{
  id: "upwork-visionerds",
  title: "Enterprise Technology & AI Bidding Profile",
  platform: "Upwork", // "Upwork" | "Freelancer.com" | "Fiverr"
  platformIconKey: "upwork",
  accountName: "Visionerds Enterprise Acquisition",
  role: "Business Developer Manager",
  category: "AI/ML Solutions, Cloud Modernization & Full-Stack",
  profileUrl: "https://www.upwork.com/freelancers/~your-direct-link", // Direct profile link
  screenshotUrl: "./assets/profiles/upwork-screenshot.png", // Drop your image into public/assets/
  screenshotCaption: "High-ticket RFP identification, tailored technical bidding, and consultative client onboarding.",
  description: "...",
  highlights: [...],
  skillsAndServices: [...],
  metricsNote: "..."
}
```
- **Live Profile Redirect**: Users clicking *"Visit Live Profile"* will be redirected immediately in a secure new tab.
- **High-Res Lightbox**: Clicking the screenshot viewport opens the full-screen interactive lightbox viewer.
- **Default State**: If `screenshotUrl` is empty `""`, an architectural Executive Noir wireframe preview is displayed with live account details.

### 4. Adding a Downloadable Resume PDF
1. Place your resume PDF in `public/resume.pdf`.
2. Update `resumePdfUrl`:
   ```ts
   links: {
     resumePdfUrl: "./resume.pdf",
   }
   ```
When populated, the "Download Resume (PDF)" button appears automatically.

---

## 🚀 Deploying to GitHub Pages

This repository includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Option A: Standard Repository Subpath (Most Common)
Example URL: `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

1. The `vite.config.ts` file is pre-configured with `base: process.env.VITE_BASE_PATH || './'`.
   By defaulting to relative paths (`./`), your assets will load seamlessly under any repository subfolder without 404 errors!
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Asad Munawar Executive Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
3. Enable GitHub Pages in your repository:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The deployment workflow will trigger automatically upon push to `main`!

### Option B: Custom Domain
If using a custom domain (e.g., `asadmunawar.com`):
- Set your custom domain in GitHub Pages settings.
- The relative base `./` ensures all assets continue resolving without adjustments.

---

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy (`h1` through `h4`), `<main>`, `<header>`, `<footer>`, `<section>`.
- **OpenGraph & Twitter Card**: Pre-configured in `index.html` for rich link previews across LinkedIn, Slack, Twitter/X, and messaging apps.
- **Schema.org Structured Data**: Valid JSON-LD `Person` markup detailing professional positioning, employer, alumni status, and core competencies.
- **Accessibility**: Visible focus states, screen-reader skip link, WCAG AA contrast compliance, and full adherence to `prefers-reduced-motion`.
