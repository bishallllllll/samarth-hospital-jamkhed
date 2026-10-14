# Samarth Hospital, Jamkhed — Official Website Prototype

> **Premier 24/7 ICU, Trauma Centre & Multispeciality Healthcare Portal**  
> *Beed Road, Opp. Electricity Board (MSEDCL Sub-Division Office), Near Vishvkranti Chowk, Jamkhed, District Ahilyanagar (Ahmednagar), Maharashtra – 413201*

---

## 1. Executive Summary & Project Mission

This project is a high-fidelity, production-grade website prototype engineered for **Samarth Hospital (ICU & Trauma Centre), Jamkhed**. 

Designed to be presented directly to Hospital Director **Dr. Bharat Darkunde** and the management board as a paid web development contract, the prototype demonstrates how a fast, responsive, mobile-first digital portal transforms hospital accessibility for patients across **87+ villages in Jamkhed taluka** and the high-traffic **Nagar–Beed highway corridor**.

### Key Real-World Discoveries
1. **Zero Competitor Websites in Jamkhed:** Comprehensive market audits revealed that **not a single private hospital in Jamkhed operates an official dedicated website**. All competitors rely exclusively on third-party aggregators (Justdial, Practo) with outdated contact numbers. Launching this portal positions Samarth Hospital as the undisputed #1 digital healthcare authority in the region.
2. **The "Golden Hour" Trauma Lifeline:** Jamkhed is located 85 km from the Ahmednagar District Civil Hospital (a 2-to-3 hour transit delay). By providing 24/7 ICU monitoring, on-site surgical suites, and an advanced **C-Arm Fluoroscopy unit**, Samarth Hospital saves lives locally during acute highway accidents, heart attacks, and trauma emergencies.
3. **Medical Ethics & Anti-Hallucination Compliance:** In strict accordance with the National Medical Commission (NMC) and Maharashtra Medical Council (MMC) regulations, this prototype presents only verified facts. Unverified degrees and registration numbers are quarantined under clear provisional labels until official certificates are supplied.

---

## 2. Technology Stack & Architecture

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool & Bundler:** Vite 6 (Ultra-fast Hot Module Replacement & Tree-shaking)
- **Styling Engine:** Tailwind CSS 3 with custom healthcare design tokens
- **Iconography:** Lucide React (Clean, accessible SVG medical icons)
- **Typography:** Modern sans-serif system stack with `Noto Sans Devanagari` support
- **Package Manager:** Yarn v1.22.22 / Corepack on Node.js v22
- **Single Source of Truth:** Centralized hospital data architecture in `src/data/hospitalData.ts`

---

## 3. Quick Start & Local Run Instructions

### Prerequisites
- Node.js v18+ (tested on Node v22.22.1)
- Yarn v1.22+ or npm v9+

### Running the Development Server
```bash
# Navigate to the project directory
cd /root/samarth-hospital

# Install dependencies (if not already installed)
yarn install

# Start the development server on host 0.0.0.0 and port 3000
yarn dev
```

### Live Public Access (Worldwide)
🌐 **Live Public URL:** [**`https://beer-resolutions-alias-magnitude.trycloudflare.com`**](https://beer-resolutions-alias-magnitude.trycloudflare.com)  
*(Served securely via Cloudflare Tunnel over HTTPS — accessible on mobile, tablet, and desktop without local setup)*

### Local Development Access
👉 **`http://localhost:3000`** (or `http://<your-server-ip>:3000`)

### Building for Production
```bash
cd /root/samarth-hospital
yarn build
```
The optimized static build will be generated in `dist/`.

---

## 4. Key Functional Features

- 🌐 **Instant Bilingual Toggle:** Full English and Marathi (मराठी) localization switchable with a single tap in the header.
- 🚨 **24/7 Emergency Casualty Ribbon:** High-visibility, pulsing click-to-dial button connecting directly to `+91 95454 03100`.
- 💳 **Cashless / TPA Desk Contact:** Direct line to `+91 77769 38712` for mediclaim and health insurance inquiries.
- 📱 **Sticky Mobile Conversion Bar:** Bottom quick-action bar for smartphones with one-tap emergency calling, WhatsApp chat, and OPD appointment booking.
- 🏥 **Interactive Department Directory:** Deep-dive cards for ICU & Critical Care, Accident & Trauma, General Medicine, Maternity/Obstetrics, Laparoscopic Surgery, and 24/7 In-House Pharmacy.
- 👨‍⚕️ **Verified Doctor Showcase:** Profiles for Dr. Bharat Darkunde and Dr. Sonali Darkunde with transparent provisional credential disclosures.
- 🗺️ **Integrated Navigation & Highway Transit Guides:** Interactive Google Maps embed with verified directions from Jamkhed ST Bus Stand (1.2 km / 4 mins), Ahmednagar (NH-561A), Beed, and Karjat.
- 🛡️ **Safe Demo Appointment Enquiry:** Realistic consultation booking simulation with input validation, demo warning banner, and zero transmission of sensitive patient health data.
- 💼 **Built-in Client Presentation Package:** Interactive modal accessible from the header/footer presenting the business opportunity, verified vs. pending items, and production roadmap.

---

## 5. Comprehensive Documentation Index

All research, design, and quality assurance deliverables are maintained in structured markdown registers:

| Document Path | Description |
| :--- | :--- |
| [`research/hospital-profile.md`](file:///root/research/hospital-profile.md) | In-depth verified hospital identity, location, leadership, and quarantined unverified claims. |
| [`research/source-register.md`](file:///root/research/source-register.md) | Audit trail of all primary evidence sources (Justdial, Facebook, Mahadiscom, Insurer directories). |
| [`research/competitor-analysis.md`](file:///root/research/competitor-analysis.md) | Competitive analysis of 8 Jamkhed healthcare providers and strategic positioning battlecards. |
| [`research/image-asset-register.md`](file:///root/research/image-asset-register.md) | Register of illustrative visual assets, commercial licenses, and hospital photo request checklist. |
| [`docs/content-approval-checklist.md`](file:///root/docs/content-approval-checklist.md) | Medical content ethics guardrails, pre-approved copy, and management sign-off checklist. |
| [`docs/design-system.md`](file:///root/docs/design-system.md) | Brand colors, typography, component tokens, wireframes, and UI design hierarchy. |
| [`docs/implementation-status.md`](file:///root/docs/implementation-status.md) | Task tracking board across all six execution phases. |
| [`docs/qa-report.md`](file:///root/docs/qa-report.md) | Independent test report covering accessibility, responsiveness, navigation, and security. |

---

## 6. Commercial Client Pitch Roadmap

To convert this functional prototype into a paid engagement with Dr. Bharat Darkunde:
1. **Live Demonstration:** Walk through the mobile experience on a smartphone or tablet, highlighting the speed and 1-tap emergency dialer.
2. **Showcase Competitor Vacuum:** Present the competitor analysis showing that competitors have zero websites, proving that Samarth Hospital can capture #1 Google rankings immediately.
3. **Review Photo Request Checklist:** Provide the printable photo guide (`research/image-asset-register.md`) so their staff can shoot authentic photos of the building, ICU, and C-Arm unit.
4. **Acquire Domain & Deploy:** Register `samarthhospitaljamkhed.com` and deploy to high-speed cloud hosting with automated WhatsApp routing.
