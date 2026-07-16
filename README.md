# 🌐 Website Meta Tag Scraper

A modern web application built with **Next.js**, **TypeScript**, **TanStack Query**, **Zustand**, and **Tailwind CSS** that extracts website metadata, allows editing, provides a live preview, and generates Open Graph & Twitter meta tags.

## ✨ Features

* 🔗 Extract website metadata from a URL
* ✅ URL validation using Yup & React Hook Form
* ⚡ Data fetching with TanStack Query
* 🗂️ Global state management using Zustand
* ✏️ Edit metadata in real time
* 👀 Live preview with platform tabs

  * Facebook
  * Twitter
  * Discord
  * Instagram
* 🏷️ Generate Open Graph & Twitter meta tags
* 📋 Copy generated meta tags to clipboard
* 📱 Fully responsive UI
* 🎨 Modern interface built with Tailwind CSS

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Data Fetching:** TanStack Query
* **HTTP Client:** Axios
* **Form Handling:** React Hook Form
* **Validation:** Yup
* **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/akshukisku/website-meta-tag-scraper.git
```

### 2. Navigate to the Project

```bash
cd website-meta-tag-scraper
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn
```

Or using pnpm:

```bash
pnpm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_JSONLINK_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your API key.

---

## ▶️ Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 📖 How to Use

1. Enter a valid website URL.
2. Click **Check Website**.
3. The application extracts the website metadata.
4. Edit the metadata if needed.
5. View the live preview.
6. Copy the generated Open Graph & Twitter meta tags.

---

## 📋 Available Scripts

Start the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

---

## 📸 Screenshots

You can add screenshots after deployment, such as:

* Home Page
* Metadata Editor
* Live Preview
* Generated Meta Tags

---

## 🚀 Deployment

This project can be deployed using **Vercel**.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.

---

## 📌 Future Improvements

* Enhanced platform-specific preview styles
* Metadata history
* Export generated meta tags as HTML
* Dark mode support
* Drag & drop image replacement
* SEO analysis and validation

---

## 👨‍💻 Author

**Akshay Kisku**

* GitHub: https://github.com/akshukisku

---

## 📄 License

This project is licensed under the MIT License.
