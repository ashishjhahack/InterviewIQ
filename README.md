<div align="center">

# 🎯 InterviewIQ

### Practice smarter. Prepare with purpose. Interview with confidence.

**An AI-powered interview preparation platform that helps candidates practice realistic interviews, receive personalized feedback, and improve with every session.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-6366F1?style=for-the-badge)](https://interview-iq-mu-one.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/aadarshyadav7439/InterviewIQ)

<br/>

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=google-gemini&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

<br/>

![Last Commit](https://img.shields.io/github/last-commit/aadarshyadav7439/InterviewIQ?style=flat-square&color=6366F1)
![Repo Size](https://img.shields.io/github/repo-size/aadarshyadav7439/InterviewIQ?style=flat-square&color=6366F1)
![Stars](https://img.shields.io/github/stars/aadarshyadav7439/InterviewIQ?style=flat-square&color=6366F1)

</div>

<br/>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">
</p>


<br/>

## 🚀 About

**InterviewIQ** is a full-stack AI-powered interview preparation platform built to make interview practice more structured and personalized.

Users can choose a target company and role, create AI-powered interviews, answer questions, receive feedback and scores, manage their profile and resume, and connect with other candidates through the community.

> 💡 **Less guessing. More preparation. Better interviews.**

<br/>

## 🔗 Live Demo

<div align="center">

### 👉 [**Try InterviewIQ Now**](https://interview-iq-mu-one.vercel.app) 👈

No setup needed — the app is live and ready to explore.

</div>

<br/>

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🤖 AI Interviews
- Select a **company** and **target role**
- Choose **Technical, Behavioral, or Mixed** interviews
- Select **Easy, Medium, or Hard** difficulty
- AI-generated, role-specific interview questions
- Question-wise scores and detailed feedback
- Overall interview score and final summary
- Full interview history tracking

</td>
<td width="50%" valign="top">

### 📄 Resume Support
- Upload PDF resumes
- Automatic PDF validation and text extraction
- Cloud-based resume storage via Cloudinary
- Resume metadata stored in MongoDB

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 👤 Profile & Personalization
- Manage education, skills, and career goals
- Set a target company and role
- Choose from custom InterviewIQ avatars
- Avatar integration across profile & community

</td>
<td width="50%" valign="top">

### 🌍 Community
- Create and share posts
- Like helpful posts
- Comment and join discussions
- Share real interview experiences with others

</td>
</tr>
</table>

<br/>

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React · Vite · React Router · Tailwind CSS · Axios · Lucide React |
| **Backend** | Node.js · Express.js · MongoDB · Mongoose · JWT · Multer |
| **AI & Cloud** | Google Gemini · Cloudinary · MongoDB Atlas |
| **Deployment** | Vercel (Frontend) |

<br/>

## 🧱 Architecture

```mermaid
flowchart LR
    A[👤 User] --> B[⚛️ React + Vite Frontend]
    B <--> |REST API| C[🚂 Express.js Backend]
    C --> D[(🍃 MongoDB Atlas)]
    C --> E[✨ Google Gemini AI]
    C --> F[☁️ Cloudinary]
```

<br/>

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/aadarshyadav7439/InterviewIQ.git
cd InterviewIQ
```

### 2️⃣ Set up the backend

```bash
cd server
npm install
```

Create a `server/.env` file:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:

```bash
npm run dev
```

### 3️⃣ Set up the frontend

Open a new terminal:

```bash
cd client
npm install
```

Create a `client/.env` file:

```env
VITE_API_URL=http://localhost:8000/api
```

Start the frontend:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

<br/>

## 🔐 Environment Variables

<details>
<summary><b>🖥️ Backend (server/.env)</b></summary>

<br/>

| Variable | Description |
|---|---|
| `PORT` | Express server port |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT authentication secret |
| `GEMINI_API_KEY` | Google Gemini API key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

</details>

<details>
<summary><b>💻 Frontend (client/.env)</b></summary>

<br/>

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

</details>

> ⚠️ **Never commit `.env` files or expose API keys publicly.**

<br/>

## 📁 Project Structure

```text
InterviewIQ/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

<br/>

## 🌱 Roadmap

- [ ] Advanced performance analytics
- [ ] Improved AI voice interview experience
- [ ] AI-powered resume scoring
- [ ] Real-time notifications
- [ ] More company-specific preparation features

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/aadarshyadav7439/InterviewIQ/issues) or open a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/>

## 👨‍💻 Author

<div align="center">

### **Aadarsh Yadav**
*Computer Science Engineering Student*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aadarshyadav7439)

</div>


<br/>

---

<div align="center">

### 🎯 Prepare with purpose. Practice with AI. Perform with confidence.

**Built with ❤️ using React, Node.js, Express, MongoDB, and AI**

⭐ **If you found this project useful, consider giving it a star!** ⭐

</div>
