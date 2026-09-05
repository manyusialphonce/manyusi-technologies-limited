# Manyusi Technologies Limited

> **Powering Businesses Through Technology**

Official website and digital presence for **Manyusi Technologies Limited (MTL)** — a Tanzanian technology company delivering practical ICT, software, networking, cybersecurity, cloud, design, digital marketing, and technology training solutions.

---

## 📌 Overview

Manyusi Technologies Limited is a technology and ICT solutions company focused on helping businesses, institutions, organizations, and individuals use technology to work smarter, operate securely, and grow digitally.

This repository contains the source code for the Manyusi Technologies Limited corporate website.

The website is designed to present MTL's:

* ICT and technology services
* Software development capabilities
* Networking and infrastructure solutions
* Cybersecurity services
* Cloud computing solutions
* CCTV and surveillance services
* Graphic design and branding
* Digital marketing services
* ICT training programs
* Projects and portfolio
* Company information
* Blog and technology insights
* Customer contact and quotation requests

---

## 🚀 Technology Stack

The project is built using modern web technologies:

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| **Next.js 16**       | React framework and application architecture |
| **React 19**         | User interface development                   |
| **TypeScript 5.7**   | Type-safe application development            |
| **Tailwind CSS 4**   | Styling and responsive UI                    |
| **Lucide React**     | Icons                                        |
| **Vercel Analytics** | Website analytics                            |
| **PostCSS**          | CSS processing                               |
| **pnpm**             | Package management                           |

---

## 🏗️ Project Structure

```text
manyusi-technologies-limited/
│
├── app/
│   ├── blog/
│   │   └── page.tsx
│   │
│   ├── company-profile/
│   │   └── page.tsx
│   │
│   ├── training/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── button.tsx
│   │
│   ├── mtl-site.tsx
│   └── profile-download.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   ├── mtl-hero.png
│   ├── mtl-projects.png
│   └── ...
│
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## ✨ Website Features

### 🏠 Corporate Homepage

The homepage provides an overview of Manyusi Technologies Limited, its capabilities, services, projects, and contact information.

### 💻 Technology Services

The website presents MTL's core technology services, including:

1. **Web & Mobile App Development**
2. **Networking Solutions**
3. **Cybersecurity Services**
4. **Cloud Computing**
5. **CCTV & Surveillance**
6. **Graphic Design**
7. **Digital Marketing**
8. **ICT Training**

Each service includes additional information and an interactive service-details interface.

### 📂 Portfolio

The portfolio section showcases technology projects and allows visitors to filter projects by category.

Available categories include:

* Web Development
* Networking
* ICT Training
* Brand & Design
* CCTV & Security
* Cloud

### 📝 Blog

The website includes a blog section for publishing technology, cybersecurity, business technology, and digital-growth content.

### 🎓 Training

MTL provides ICT and technology training programs designed to help individuals, organizations, and teams develop practical digital skills.

### 🏢 Company Profile

The website provides access to company information and the MTL company profile.

### 📩 Contact & Quote Request

Visitors can submit their details and service requirements through the contact interface to initiate a conversation with MTL.

### 🌍 Responsive Design

The website is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

### 🌐 Language Support

The interface includes English/Swahili language switching functionality.

---

# ⚙️ Getting Started

## Prerequisites

Before running the project, make sure you have installed:

* Node.js
* pnpm
* Git

You can verify your installations with:

```bash
node --version
pnpm --version
git --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/manyusi-technologies-limited.git
```

Enter the project directory:

```bash
cd manyusi-technologies-limited
```

Install dependencies:

```bash
pnpm install
```

---

## 🧑‍💻 Development

Start the development server:

```bash
pnpm dev
```

The application will normally be available at:

```text
http://localhost:3000
```

Open the address in your browser.

---

## 🏭 Production Build

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 📦 Package Manager

This project uses **pnpm**.

Recommended commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
```

Avoid mixing package managers unnecessarily.

---

# 🔐 Environment Variables

Environment variables should **never be committed to GitHub**.

The project `.gitignore` excludes local environment files such as:

```text
.env*.local
```

If environment variables are introduced in future development, create the appropriate local environment file and keep sensitive credentials private.

Example:

```text
.env.local
```

Never commit:

```text
.env
.env.local
.env.production
```

when they contain secrets, API keys, passwords, tokens, or private credentials.

---

# 🧩 Configuration

The project uses:

```text
next.config.mjs
```

Current configuration includes:

* TypeScript build-error handling
* Unoptimized image configuration

Tailwind CSS and PostCSS configuration are also included in the project.

---

# 📊 Analytics

The application integrates **Vercel Analytics**.

Analytics are enabled during production execution.

---

# 🎨 Design System

The website follows a modern corporate technology aesthetic built around:

* Clean layouts
* Professional typography
* Responsive components
* Card-based content sections
* Blue technology-focused branding
* Accessible interactive elements
* Mobile-first responsive behavior

The interface uses **Tailwind CSS** for styling and **Lucide React** for interface icons.

---

# 🛠️ Development Guidelines

When contributing to the project:

### 1. Keep components reusable

Reusable UI and website sections should be placed inside:

```text
components/
```

### 2. Keep pages organized

Application routes should remain inside:

```text
app/
```

### 3. Keep static assets inside

```text
public/
```

### 4. Do not commit secrets

Never commit:

* Passwords
* API keys
* Access tokens
* Database credentials
* Private certificates
* Production secrets

### 5. Test before pushing

Before committing changes:

```bash
pnpm build
```

Make sure the production build completes successfully.

---

# 🌿 Git Workflow

For development, use feature branches rather than making every change directly on `main`.

Example:

```bash
git checkout -b feature/new-section
```

After completing the work:

```bash
git add .
git commit -m "Add new website section"
git push -u origin feature/new-section
```

Then create a Pull Request for review.

### Recommended branches

```text
main
develop
feature/*
fix/*
```

The `main` branch should contain stable, production-ready code.

---

# 🤝 Contributing

Contributions and improvements are welcome.

Recommended workflow:

1. Clone the repository.
2. Create a feature or fix branch.
3. Install dependencies.
4. Develop and test locally.
5. Run the production build.
6. Commit your changes with a clear message.
7. Push your branch.
8. Open a Pull Request.
9. Review and merge after approval.

---

# 🧪 Quality Checklist

Before submitting changes, verify:

```text
[ ] Application starts successfully
[ ] No broken routes
[ ] Responsive on mobile
[ ] Responsive on desktop
[ ] Images load correctly
[ ] Navigation works
[ ] Forms behave correctly
[ ] No sensitive information is committed
[ ] Production build succeeds
[ ] Changes are committed with a meaningful message
```

---

# 📈 Future Development

The website can be extended with additional capabilities such as:

* Full CMS-powered blog
* Backend-powered contact forms
* Customer relationship management
* Service quotation management
* Online service booking
* Client portal
* Project management
* Online ICT training platform
* Training registration
* Payment integration
* Newsletter subscriptions
* Advanced SEO
* Multilingual content management
* Business analytics dashboards
* Authentication and role-based access
* Integration with MTL business systems

---

# 🏢 About Manyusi Technologies Limited

**Manyusi Technologies Limited (MTL)** is a Tanzanian ICT and technology company focused on delivering practical, reliable, and innovative technology solutions.

Our areas of focus include:

**Software • ICT • Networking • Cybersecurity • Cloud • Digital Solutions • Design • Training**

We aim to help businesses and institutions transform their operations through technology.

---

## 📍 Location

**Dar es Salaam, Tanzania**

---

## 📄 License

This project is proprietary software belonging to **Manyusi Technologies Limited**, unless otherwise stated.

Unauthorized copying, redistribution, modification, or commercial use of proprietary project materials is not permitted without appropriate authorization from Manyusi Technologies Limited.

---

## © Copyright

**© 2026 Manyusi Technologies Limited. All Rights Reserved.**

Built with technology to help businesses move forward.
