🚀 AI Creator – Full-Stack AI Writing & Content Generation Platform

AI Creator is a modern, full-stack AI-powered writing platform designed to help users ideate, write, edit, and refine content effortlessly.
Built with a highly scalable architecture using Next.js 15, React 19, Convex, Clerk, and ImageKit, it delivers a smooth, real-time, cloud-connected writing experience optimized for speed and usability.


---

🎯 Why AI Creator?

Content creation is becoming more AI-driven, but most tools either feel too complex or lack real-time responsiveness.
AI Creator bridges this gap by offering:

A rich editing environment

Real-time AI-powered suggestions

Secure, frictionless authentication

Cloud-powered persistence and media support

Clean, accessible UI focused on productivity


This makes AI Creator a great fit for writers, students, marketers, and developers building AI workflows.


---

🧠 Core Features

✔ AI-Assisted Writing

Generate, edit, and improve text with context-aware AI prompts.

✔ Real-Time Auto-Save & Cloud Storage

Convex ensures your work is saved instantly without manual actions.

✔ Rich Text Editing

Bold, italic, underline

Headings, lists, code blocks

Inline images

Clean formatting tools powered by React Quill


✔ Image Uploads

Upload images directly into the editor using ImageKit, with automatic optimization.

✔ Authentication & User Management

Seamless login experience with Clerk supporting:

Email/Password

OAuth

Session management

User profile syncing


✔ Modern UI/UX

Built using Tailwind CSS

Beautiful, accessible components using shadcn/ui

Fast, fluid transitions

Mobile-responsive design


✔ Scalable Backend

Convex powers:

Database

Real-time data sync

Secure backend functions

Zero-config infrastructure



---

🏗 Architecture Overview

AI CREATOR
│
├── Next.js 15 App Router
│   ├── Client Components (UI)
│   ├── Server Actions
│   └── API routes (Convex functions)
│
├── Convex Backend
│   ├── Database (Documents)
│   ├── Mutations
│   ├── AI Integration Functions
│   └── Real-time Sync
│
├── Clerk Authentication
│   ├── User Sessions
│   ├── JWT Verification
│   └── Secure Route Protection
│
└── ImageKit
    ├── Media Optimization
    ├── Secure Upload Endpoint
    └── CDN Delivery

This stack ensures:

⚡ Instant load times

🔐 Secure user handling

🔄 Real-time syncing

📡 Global performance

📈 Scalable by design



---

📂 Project Folder Structure

/app
  ├── layout.tsx
  ├── page.tsx
  ├── editor/
  ├── dashboard/
  └── api/
/components
  ├── ui/
  ├── editor/
  └── shared/
/convex
  ├── schema.ts
  ├── functions/
  └── ai/
  
/lib
/utils


---

⚙ Installation & Setup

1. Clone the repository

git clone <your-repo-url>
cd ai-creator

2. Install dependencies

npm install

3. Environment Variables

Create a .env.local file:

NEXT_PUBLIC_CONVEX_URL=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=

4. Run locally

npm run dev

App runs on:
👉 http://localhost:3000


---





---

🌐 Deployment

Recommended: Vercel

Just connect your GitHub repo → add env vars → deploy.

Other supported platforms:

Netlify

Render

Any Node.js-compatible server


Convex automatically scales with your usage.


---

🧪 Future Improvements

Multi-language support

Real-time collaboration (multi-user editing)

Version history

Export to PDF, Markdown, DOCX

Custom AI prompt templates

AI image generation

Mobile app (React Native)



---

🤝 Contributing

Contributions, issues, and suggestions are welcome.

1. Fork the repo


2. Create a feature branch


3. Submit a PR




---

📜 License

Released under the MIT License — feel free to use and modify.


---

🧑‍💻 Author

Muzahir Ali
Full-Stack Developer • AI Enthusiast
Open to collaborations & opportunities.


---

