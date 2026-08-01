# 🐄 CowCare AI – Community Service Project (CSP)

> An AI-assisted bilingual cattle healthcare platform designed to help farmers identify common diseases, access first-aid guidance, follow vaccination schedules, and receive preventive health tips in **English** and **Telugu**.

---

## 📖 Overview

CowCare AI is a community service web application developed to improve awareness of cattle healthcare among farmers. The platform provides an easy-to-use interface for identifying symptoms, understanding possible diseases, accessing emergency first-aid information, and maintaining vaccination schedules.

The application supports **English** and **Telugu**, making it accessible to a wider farming community.

---

## ✨ Features

- 🌐 Bilingual Interface (English & Telugu)
- 🤖 AI-based Symptom Checker
- 🩺 Disease Library
- 🚨 Emergency First Aid Guide
- 💉 Vaccination Schedule
- 🌱 Preventive Health Tips
- 📱 Responsive User Interface
- ⚡ Fast and Lightweight

---

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Chart.js
- React Chart.js 2
- Lucide React

### Backend
- Express.js
- Node.js

### Database
- SQL.js

### AI
- Google Generative AI SDK

---

## 📂 Project Structure

```
Csp-project-main/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── db/
│   ├── translations/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── assets/
├── server.ts
├── package.json
├── tsconfig.json
└── .env.example
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CowCare-AI.git
cd CowCare-AI
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
bun install
```

---

### 3. Configure Environment Variables

Create a `.env` file from `.env.example`.

Example:

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

---

### 4. Start Development Server

```bash
npm run dev
```

The application will start in development mode.

---

### 5. Build for Production

```bash
npm run build
```

---

### 6. Run Production Server

```bash
npm run start
```

---

## 📚 Modules

### 🏠 Home
Provides an introduction to the platform and its purpose.

### 🤖 Symptom Checker
Allows users to enter symptoms and receive AI-assisted guidance about possible cattle diseases.

### 📖 Disease Library
Contains information about common cattle diseases, symptoms, causes, prevention, and treatment recommendations.

### 🚨 Emergency Guide
Displays immediate first-aid measures that farmers can perform before consulting a veterinarian.

### 💉 Vaccination Schedule
Provides recommended vaccination timelines for major cattle diseases.

### 🌱 Health Tips
Offers daily preventive healthcare practices and livestock management advice.

---

## 🌍 Localization

Supported Languages:

- 🇬🇧 English
- 🇮🇳 Telugu

Translations are stored inside:

```
src/translations/
```

---

## 🎯 Project Objectives

- Improve awareness about cattle diseases.
- Promote preventive healthcare.
- Assist farmers with quick symptom identification.
- Encourage timely vaccination.
- Provide bilingual accessibility for rural communities.

---

## 📦 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production version |
| `npm run start` | Run production server |
| `npm run lint` | TypeScript type checking |

---

## 🔮 Future Enhancements

- AI image-based disease detection
- Nearby veterinary hospital locator
- Offline support (PWA)
- Farmer authentication
- Animal health record management
- Voice assistance in regional languages
- SMS reminders for vaccinations

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📜 License

This project is developed for educational and community service purposes.

---

## 👨‍💻 Authors

**CowCare AI Team**

Community Service Project (CSP)

Department of Computer Science & Engineering (AI & ML)

Lakireddy Balireddy College of Engineering

---

## ❤️ Acknowledgements

- Google Generative AI
- React
- Vite
- Express.js
- Tailwind CSS
- Open Source Community

---

### ⭐ If you found this project useful, consider giving it a Star on GitHub!
