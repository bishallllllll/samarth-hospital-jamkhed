# Design System & UI/UX Specification — Samarth Hospital Jamkhed

**Version:** 1.0.0  
**Owner:** UX/UI Design & Brand Specialist (Agent 4)  
**Status:** Approved for Implementation  
**Audience:** Hospital Management, Development Team, and Patients

---

## 1. Brand Philosophy & Design Vision

Samarth Hospital is a crucial healthcare anchor in **Jamkhed, Ahilyanagar (Ahmednagar) District, Maharashtra**, providing acute emergency, ICU, surgical, and general medical care to a regional population that spans semi-urban and rural areas.

The design identity must project:
1. **Clinical Competence & Dignity:** A quiet, steady medical authority that inspires immediate calm and confidence during family health emergencies.
2. **Accessible Clarity:** Immediate legibility on low-cost Android smartphones and patchy 4G connections. High text contrast, large touch targets (minimum 48x48px), and zero ambiguous iconography.
3. **Local Respect & Bilingual Warmth:** Balancing professional healthcare standards with Marathi cultural resonance and straightforward language.
4. **Honesty & Transparency:** Zero decorative deception — no fake 5-star badges, no pseudo-accreditations, no exaggerated claims.

---

## 2. Color Palette & Semantic Tokens

| Token Name | Hex Code | Tailwind Equivalent | Usage Context |
| :--- | :--- | :--- | :--- |
| **Brand Primary (Deep Navy)** | `#0f2b48` | `navy-900` | Header backgrounds, primary headlines, authoritative containers |
| **Brand Primary Light** | `#1b4965` | `navy-700` | Section headers, card titles, interactive active states |
| **Medical Blue (Accent)** | `#0284c7` | `sky-600` | Primary buttons, link highlights, badges, icons |
| **Brand Secondary (Teal)** | `#0d9488` | `teal-600` | Success indicators, OPD badges, compassionate accents, highlights |
| **Secondary Soft Teal** | `#f0fdfa` | `teal-50` | Badge backgrounds, highlight card backgrounds |
| **Emergency Red (Alert)** | `#dc2626` | `red-600` | 24/7 Emergency badges, ambulance calls, urgent notices only |
| **Background Neutral Light**| `#f8fafc` | `slate-50` | Alternate section background, cards, table alternate rows |
| **Surface Pure White** | `#ffffff` | `white` | Main body, card backgrounds, modal backdrops |
| **Border Neutral** | `#e2e8f0` | `slate-200` | Subtle card dividers, input borders, structural separators |
| **Text Primary** | `#0f172a` | `slate-900` | Headings, high-contrast paragraph text |
| **Text Muted** | `#475569` | `slate-600` | Secondary copy, metadata, timestamps, captions |

---

## 3. Typography Scale & Readability

Using a robust modern sans-serif system stack:  
`font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans Devanagari', sans-serif;`

- **Display (Hero Headline):** `text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight`
- **Section Heading (H2):** `text-2xl md:text-3xl font-bold text-slate-900 tracking-normal`
- **Sub-section Heading (H3):** `text-xl font-semibold text-slate-800`
- **Body Large (Intro text):** `text-lg md:text-xl text-slate-700 leading-relaxed`
- **Body Normal (General copy):** `text-base text-slate-600 leading-relaxed`
- **Caption / Metadata:** `text-sm text-slate-500 font-medium`
- **Buttons / Actions:** `text-base font-semibold tracking-wide uppercase-none`

---

## 4. Component Design Patterns

### 4.1 Provisional Logo & Wordmark
In the absence of an official vector SVG logo from the hospital administration, we implement a clean, dignified typographical mark:
- **Icon:** A medical cross encircled with a subtle heart rhythm pulse in Medical Blue / Teal (`Activity` / `Cross` icon).
- **Text:** **SAMARTH HOSPITAL** in bold geometric uppercase, with sub-line *"ICU & Trauma Centre • Jamkhed"* in teal small caps.
- **Marathi Variant:** **समर्थ हॉस्पिटल** *"आयसीयू आणि ट्रॉमा सेंटर • जामखेड"*.

### 4.2 Interactive Action Ribbons (Quick Contacts)
A persistent top utility bar featuring:
- **Emergency Helpline:** High-contrast red/blue click-to-call.
- **OPD Timings:** "Open 24 Hours for Emergency • OPD: 9:00 AM – 8:00 PM".
- **Location Pin:** "Beed Road, Near Vishvkranti Chowk, Jamkhed".
- **Language Switcher:** English / मराठी toggle.

### 4.3 Cards & Content Containers
- Border: `border border-slate-200/80`
- Corner Radius: `rounded-xl`
- Shadow: `shadow-sm hover:shadow-md transition-shadow duration-200`
- Padding: `p-6 md:p-8`
- Background: `bg-white`

### 4.4 Form Inputs & Validation
- Form Fields: High-contrast borders (`border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200`), explicit labels, clear error states.
- Demo Submission Banner: Clear notice informing patients that submissions in this prototype trigger simulated confirmations without storing sensitive data.

---

## 5. Information Architecture & Page Views

1. **Homepage (`/`):**
   - Emergency banner & Language toggle
   - Sticky Navigation Bar
   - Hero Section with quick OPD booking & direct emergency dial
   - Quick Action Cards (Emergency, OPD Appointment, Find Doctor, Directions)
   - Key Medical Specialities (ICU, Trauma, General Medicine, Surgery, Maternity, Diagnostics)
   - Leadership & Doctor Spotlight (Dr. Bharat Darkunde & team)
   - Facilities & Infrastructure (Operation Theatre, Inpatient Wards, 24/7 Pharmacy)
   - Patient Information & FAQ (Insurance queries, visiting hours, ambulance)
   - Interactive Jamkhed Location & Directions Guide
   - Comprehensive Footer with regulatory disclosures and management contact

2. **About Us (`/about`):**
   - Vision & Mission for rural and taluka healthcare
   - Founders' story & Dr. Bharat Darkunde's clinical dedication to Jamkhed
   - Hospital milestones, ethics, and patient safety standards

3. **Departments & Services (`/departments`):**
   - Detailed breakdown of Trauma/ICU, General Medicine, Laparoscopy & Surgery, Gynaecology/Obstetrics, Orthopaedics, Pediatrics
   - Equipment and clinical capabilities

4. **Doctors (`/doctors`):**
   - Verified profile for Dr. Bharat Darkunde (Director)
   - Profile for Dr. Sonali Darkunde
   - Visiting specialists roster (Clearly annotated: *Visiting Consultants by Prior Appointment*)

5. **Facilities (`/facilities`):**
   - Intensive Care Unit (ICU) overview
   - Major & Minor Operation Theatres
   - Emergency & Ambulance support
   - Pathology lab and in-house pharmacy
   - Patient amenities (Generators backup, clean waiting rooms, wheelchair access)

6. **Contact & Directions (`/contact`):**
   - Interactive route guidance from Jamkhed Bus Stand, Ashti, Beed, Karjat, and Ahmednagar
   - Direct phone dialers, enquiry submission form, and location map

7. **Book Appointment Modal / Section (`#appointment`):**
   - Streamlined 4-field request form (Name, Phone, Department, Preferred Date)
   - Instant verification feedback and demo handling notice
