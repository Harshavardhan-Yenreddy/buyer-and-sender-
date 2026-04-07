# Lemici Franchise Platform

A pixel-perfect React + Tailwind CSS franchise platform with Buyer and Franchisor registration forms.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── LeftPanel.jsx       # Dark gradient left sidebar
│   ├── ToggleSwitch.jsx    # Buyer / Franchisor toggle
│   ├── FormInput.jsx       # Reusable labeled input wrapper
│   └── CheckboxGroup.jsx   # Reusable checkbox grid
├── pages/
│   ├── JoinPage.jsx        # Main page (combines all)
│   ├── BuyerForm.jsx       # Buyer registration form
│   └── FranchisorForm.jsx  # Franchisor listing form
├── App.jsx
├── main.jsx
└── index.css
```

## 🖼️ Adding Your Images

Place these files in the `public/` folder:

- `public/lemici-logo.png` — Your Lemici logo (shown in navbar, left side)
- `public/profile-avatar.png` — User profile photo (shown in navbar, right side)

Both have graceful fallbacks if the images are missing.

## ✅ Features

- **Toggle forms** — Buyer / Franchisor switch with useState (no routing)
- **Full validation** — Required fields, email format, phone format
- **File uploads** — Logo (single) and Visual Reference (multiple) with file name preview
- **Success screen** — Shown after valid form submission, with console.log of data
- **Responsive** — Desktop-first, clean mobile stacking

## 🛠️ Build for Production

```bash
npm run build
```
