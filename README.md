# BetaApp

**BetaApp** is a responsive web application built with **React**, **Vite**, **Tailwind CSS**, and **Ant Design**, providing an interactive platform for uploading and analyzing videos using AI. It includes secure user authentication, intuitive file management, and professional UI for all screen sizes.

## 🚀 Features

- 🔐 **User Authentication** (Login & Signup)
- 📤 **Video Upload & Processing**
- 📂 **Analysis File Management & Downloads**
- 📺 **Video Streaming**
- ⚙️ **Responsive Sidebar Navigation**
- 🎨 **Tailored UI with Tailwind CSS + Ant Design**
- 🧠 AI-ready endpoints for future expansion

## 🛠 Tech Stack

- **React 18 + Vite** — Fast development and bundling
- **Tailwind CSS 4** — Utility-first styling
- **Ant Design 5** — Elegant UI components
- **FastAPI backend (assumed)** — For handling auth, video processing, file storage
- **Axios** — For all HTTP requests
- **React Router DOM 7** — Routing and navigation

## 📁 Project Structure

```bash
src/
├── App.jsx                 # Main layout and routes
├── HomeScreen.jsx         # Recent video display
├── UploadScreen.jsx       # File selection and upload
├── AnalysisFilesScreen.jsx# JSON/video file download
├── LoginScreen.jsx        # User login
├── SignUpScreen.jsx       # User signup
├── index.css              # Tailwind CSS entry
├── main.jsx               # Entry point
