# 🎧 Ripcloud

A full-stack music streaming and hosting platform, inspired by Spotify.  
Built with a modern tech stack and includes user authentication, admin control, and dynamic music playback.  
**This project is in active development** and currently running in demo mode.

🔗 Live Demo: [ripcloud.iqs8.org](https://ripcloud.iqs8.org)

---

## 🛠️ Features

- 🎵 Music playback with real-time UI updates
- 📁 Admin dashboard for managing songs and albums
- 🔐 Auth and role-based access control via Clerk
- 🧠 Global state managed with Zustand
- 🌙 Fully responsive dark UI (desktop-focused)
- 👥 Placeholder for upcoming "Friends" and "Messages" features

---

## ⚠️ Demo Mode Limitations

- **File uploads are currently disabled.** Attempting to upload will show a notification via toast.
- **Clerk is in development mode**, so you may see small banners or warnings.
- **Friends/messages pages** are visible but not functional — under construction.

These restrictions are in place to avoid cloud hosting/storage costs for public use.

---

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- TypeScript
- TailwindCSS
- Clerk for Auth
- Zustand (custom state management)

**Backend:**
- Node.js / Express
- MongoDB
- Cloudinary (media hosting)
- REST API

**DevOps:**
- Hosted on DigitalOcean
- Environment-managed secrets

---

## 🧪 Local Development

### 📦 Setup `.env` file in **backend** folder

```env
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...

CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

### 💻 Setup `.env` file in **frontend** folder

```env
VITE_CLERK_PUBLISHABLE_KEY=...
```

### 🚀 Installation & Running

Then run the following in each folder:

```bash
npm install
npm run dev
```