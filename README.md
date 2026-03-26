<div align="center">
  <h1>✨ AI Creator</h1>
  <p><strong>A Next-Generation AI Content Creation Platform</strong></p>
  
  <p>
    <a href="https://ai-creater.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live_Website-Available-success?style=for-the-badge&logo=vercel" alt="Live Preview" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Convex-Backend-FF5A5F?style=flat-square&logo=convex" alt="Convex" />
    <img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square&logo=clerk" alt="Clerk" />
    <img src="https://img.shields.io/badge/Gemini-AI-4E8BF0?style=flat-square&logo=google" alt="Google Gemini" />
  </p>
</div>

---

## 🚀 Overview

**AI Creator** is a powerful and intuitive SaaS application designed to help users generate high-quality content effortlessly. Leveraging the power of **Google's Gemini AI**, this platform provides a seamless experience for dynamic content creation, complete with rich text editing, secure authentication, and real-time data synchronization.

🔗 **[Live Demo](https://ai-creater.vercel.app/)**

---

## 🌟 Key Features

- **🤖 Advanced AI Generation:** Deep integration with Google Gemini AI (`@google/generative-ai`) for creating text, articles, and various content formats.
- **🔐 Secure Authentication:** Enterprise-grade user authentication and management powered by **Clerk**.
- **⚡ Real-time Backend:** Lightning-fast, reactive database queries and mutations using **Convex**.
- **🎨 Modern UI/UX:** A highly responsive, accessible, and beautiful interface built with **Tailwind CSS v4**, **Radix UI**, and **Framer Motion**.
- **🖼️ Image Management:** Seamless image uploading and content delivery via **ImageKit**.
- **📊 Analytics Dashboard:** Interactive data visualizations and content statistics using **Chart.js**.
- **✍️ Rich Text Editing:** Built-in powerful text editor (`react-quill-new`) to format and refine AI-generated content.
- **🛡️ Type-Safety & Validation:** Robust form handling and schema validation using **React Hook Form** and **Zod**.
- **🌓 Dark Mode:** Fully supported light and dark themes via `next-themes`.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) (shadcn/ui inspired)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts:** [Chart.js](https://www.chartjs.org/) + `react-chartjs-2`

### Backend & AI
- **Database / API:** [Convex](https://www.convex.dev/)
- **Authentication:** [Clerk](https://clerk.com/)
- **AI Engine:** [Google Gemini AI](https://ai.google.dev/)
- **Image Hosting:** [ImageKit](https://imagekit.io/)

---

## 💻 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-creater.git
cd ai-creater
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root of your project and add the following keys. You will need to obtain these from their respective dashboards.

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Convex Database
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# ImageKit
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

### 4. Initialize Convex
Run the following command to initialize your Convex backend:
```bash
npx convex dev
```

### 5. Start the Development Server
In a new terminal tab, start the Next.js development server using Turbopack:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```text
ai-creater/
├── app/               # Next.js 15 App Router pages, layouts, and API routes
├── components/        # Reusable React & UI components (Radix/Tailwind)
├── convex/            # Backend database schemas, queries, and mutations
├── hooks/             # Custom React hooks
├── lib/               # Utility functions, configs, and helpers
├── public/            # Static assets like images and icons
├── package.json       # Project dependencies and scripts
└── ...
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

---
<div align="center">
  <i>Made with ❤️by Muzahir ali </i>
</div>
