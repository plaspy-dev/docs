# Plaspy Documentation Center

Official documentation and knowledge base for the **Plaspy** platform.

Plaspy is a cloud platform for GPS fleet tracking, telematics, and IoT monitoring.
This repository contains the user guides, tutorials, and technical documentation used by customers, installers, and integration partners.

---

## 📚 What you will find here

* Getting started guides
* Platform user manual
* Alerts and notifications
* API and integrations
* Troubleshooting articles

The documentation is built as a static website and can be deployed publicly.

---

## 🧰 Requirements

Before running the project locally, install:

* Node.js 18 or newer
* npm (comes with Node.js)

Check your installation:

```
node -v
npm -v
```

---

## 🚀 Running locally

1. Clone the repository

```
git clone https://github.com/PlaspyHQ/Help.git
cd Help
```

2. Install dependencies

```
npm install
```

3. Start the local documentation server

```
npm run start
```

After starting, open your browser at:

```
http://localhost:3000
```

The documentation site will automatically reload when you edit files.

---

## 🏗 Build your site

Build your site for production:

```bash
npm run build
```

The static files are generated in the `build` folder.

---

## 🚀 Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at http://localhost:3000/.

---

## � Internationalization (i18n)

To create or update the translation files for a specific locale (e.g., Spanish):

```bash
npm run write-translations -- --locale es
```

To start the local documentation server with the Spanish locale:

```bash
npm run start -- --locale es
```

The translation files will be generated in the `i18n` directory.

---

## �🌐 Deployment

This documentation is intended to be published at:

https://docs.trackservers.net

---

## 🤝 Contributing

We welcome improvements and corrections.

If you find an error or want to suggest improvements:

1. Fork the repository
2. Create a branch
3. Submit a Pull Request

---

## 📬 Contact

Website: https://www.plaspy.com

---

© 2026 Plaspy. All rights reserved.
