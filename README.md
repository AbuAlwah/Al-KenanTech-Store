# Alkenan Tech - E-Commerce Frontend Store 💻🛒

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> ⚠️ **Note:** This website is currently **under active development** (Work in Progress). More pages, features, and enhancements are being added progressively.

---

## 🚀 About The Project

**Alkenan Tech** is a responsive e-commerce website tailored for gamers and tech enthusiasts. The design features a cohesive visual identity, combining warm orange accents with deep grays and soft off-whites to deliver an engaging and user-friendly experience.
---

## ✨ Features

* **Tailored UI/UX:** Eye-friendly layouts optimized for product presentation with clean spacing and clear typography.
* **Modern Tech Color Palette:** A striking color scheme that reflects the futuristic and energetic nature of gaming hardware.
* **Interactive Components:** Features a native review/rating system, functional technical specification tabs, dynamic quantity counters, and an interactive wishlist.
* **Secure Auth Flows:** User-friendly login and registration interfaces, complete with dual-factor verification (OTP) layouts for Email and WhatsApp.

---

## 📸 Interface Tour (Screenshots)

### 1. Home Page & Footer (Four Layout Views)
* Features quick categories navigation, featured products, and an FAQ section.
* Dedicated "Talk to Customer Support" conversion section.
* Professional footer containing quick links, contact details for Sana'a, Yemen, and developer credits.

| | |
| :-: | :-: |
| <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/home_hero.png" alt="Home Page Hero Section" width="100%" /> <br> <sub><b>1. Hero & Navigation Bar</b></sub> | <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/home_categories.png" alt="Home Categories Section" width="100%" /> <br> <sub><b>2. Categories & Offers</b></sub> |
| <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/home_questions.png" alt="Home questions Section" width="100%" /> <br> <sub><b>3. FAQs</b></sub> | <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/home_footer.png" alt="Home Support & Footer" width="100%" /> <br> <sub><b>4. Customer Support & Footer</b></sub> |

---

### 2. Product Details Page
* Interactive display of product images, key specifications, and pricing.
* Intuitive quantity selectors and "Add to Cart" actions.

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/product_details.png" alt="Product Details Main" width="85%" />
</p>

* **Technical Specifications Tab:** A clean, structured grid system highlighting hardware specifications (CPU, GPU, RAM, SSD, Screen).

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/technical_specs.png" alt="Technical Specifications Tab" width="85%" />
</p>

* **Reviews & Ratings Tab:** An interactive breakdown of review stars alongside verified purchaser reviews.

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/user_reviews.png" alt="Reviews and Ratings Tab" width="85%" />
</p>

* **Suggested Accessories Section:** Boosts conversion rates by showcasing recommended matching gaming gears (keyboards, mice).

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/suggested_accessories.png" alt="Suggested Accessories" width="85%" />
</p>

### 3. Wishlist Page
* A clean layout where users can manage their saved products.
* Smart status indicators showing "In Stock" or "Out of Stock" with "Notify Me" trigger options.
* Category-based sidebar navigation for fluid catalog filtering.

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/wishlist_page.png" alt="Wishlist Page" width="85%" />
</p>

### 4. Authentication & Verification Flows
* Dual login capabilities (Email or Phone options) and interactive registration screens.
* Cohesive Multi-Step Verification (OTP) layouts specifically optimized for Email and WhatsApp integrations.

<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_login_email.png" alt="Email Login Screen" width="30%" />
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_login_phone.png" alt="Phone Login Screen" width="30%" />
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_register.png" alt="Register Screen" width="30%" />
</p>
<p align="center">
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_forgot_password.png" alt="Forgot Password Screen" width="30%" />
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_verify_email.png" alt="Email Verification" width="30%" />
  <img src="https://github.com/AbuAlwah/Al-KenanTech-Store/blob/main/src/screenshots/auth_verify_whatsapp.png" alt="WhatsApp Verification" width="30%" />
</p>

---

## 🛠️ Tech Stack

Built strictly with pure web essentials to ensure blazing-fast performance and clean codebase structures:
* **HTML5:** Semantic architecture to construct accessible web pages.
* **CSS3:** Advanced layouts (Flexbox/Grid), custom animations, and responsive stylesheets.
* **JavaScript (ES6+):** Vanilla script files managing UI interactions, tab switching, and local state.

---

## 📂 Project Structure

The project directory is highly organized, using modular subdirectories for each core page/feature to facilitate scalability:

```text
AL-KENANTECH-STORE/
│
├── .vscode/
│
└── src/
    ├── favorite_page/              # Wishlist Module
    │   ├── css/
    │   │   └── wishlist.css
    │   ├── html/
    │   │   └── index.html
    │   └── js/
    │       └── wishlist.js
    │
    ├── img/                        # Project Asset Images & Icons
    │
    ├── screenshots/                # Project Screenshots
    │
    ├── login_page/                 # Authentication & OTP Module
    │   ├── css/
    │   │   ├── auth_buttons.css
    │   │   ├── auth_feature.css
    │   │   ├── auth_global.css
    │   │   ├── auth_inputs.css
    │   │   ├── auth_layout.css
    │   │   ├── auth_elements.css
    │   │   ├── reset_password.css
    │   │   └── verify_code_global.css
    │   ├── html/
    │   │   ├── forgot_password.html
    │   │   ├── index.html
    │   │   ├── reset_password.html
    │   │   └── verify_code.html
    │   └── js/
    │       ├── forgot-password.js
    │       ├── login.js
    │       ├── reset_password.js
    │       └── verify_code.js
    │
    ├── main_page/                  # Landing & Home Module
    │   ├── css/
    │   │   ├── categories_section.css
    │   │   ├── faq.css
    │   │   ├── footer.css
    │   │   ├── global.css
    │   │   ├── hero.css
    │   │   ├── logo.css
    │   │   ├── nav_bar.css
    │   │   ├── recently_added_section.css
    │   │   ├── search.css
    │   │   ├── support_section.css
    │   │   └── user_buttons.css
    │   └── html/
    │       └── index.html
    │
    └── product_details_page/       # Product Details & Specs Module
        ├── css/
        │   ├── global.css
        │   ├── product_hero.css
        │   ├── related_cards.css
        │   └── tabs_reviews.css
        ├── html/
        │   └── index.html
        └── js/
            └── product_details.js