# 🚀 My Portfolio - Continuous Deployment with GitHub Actions

Welcome to my **Next.js** portfolio! 🎨 I built this website to showcase my skills, projects, and experience while automating the deployment process using **GitHub Actions** and **GitHub Pages**.

---

## 🌟 Features
✅ **Built with Next.js** - A fast, React-based framework  
✅ **Fully Static Export** - Optimized for GitHub Pages hosting  
✅ **Continuous Deployment (CD)** - Automated deployment via GitHub Actions  
✅ **Bootstrap Integration** - Responsive and modern UI  
✅ **Custom Domain Support** - Easily configured for a personal domain  

---

## 🛠️ Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/) (Static Export Mode)
- **Styling:** Bootstrap
- **Hosting:** [GitHub Pages](https://pages.github.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## ⚙️ Deployment Pipeline (CI/CD)

This project uses **GitHub Actions** to automatically deploy my portfolio whenever I push changes to the `master` branch.

### **Workflow Steps**
1. **Trigger:** The workflow runs on every push to `master`
2. **Install Dependencies:** Uses `npm` or `yarn`
3. **Build the Static Site:** Next.js generates an `out/` folder
4. **Deploy to GitHub Pages:** Uploads the static files

### **GitHub Actions Workflow (`.github/workflows/nextjs.yml`)**
```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install Dependencies
        run: npm install
      - name: Build Next.js App
        run: npm run build
      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4

```
## 🚀 Running Locally

To run this Next.js portfolio on your local machine, follow these steps:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YagmurGULEC/YagmurGULEC.github.io.git
cd YagmurGULEC.github.io
npm install  # or yarn install
npm run dev  # or yarn dev
```

