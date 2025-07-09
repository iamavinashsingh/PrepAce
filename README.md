# PrepWise

PrepWise is an AI-powered platform for practicing mock job interviews and receiving instant, structured feedback. It helps users prepare for real-world interviews by simulating behavioral, technical, and mixed interview scenarios, leveraging advanced AI models for question generation and feedback.

---

## 🚀 Project Overview

- **Practice**: Take realistic mock interviews tailored to your role, level, and tech stack.
- **AI Feedback**: Receive detailed, category-based feedback and improvement suggestions.
- **Voice Experience**: Interact with an AI interviewer via real-time voice calls.
- **Dashboard**: Track your interview history and progress.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Firebase (Firestore, Auth)](https://firebase.google.com/)
- **AI/ML**: [Google Gemini](https://ai.google.dev/), [OpenAI GPT-4](https://openai.com/), [Vapi Voice AI](https://vapi.ai/)
- **Other**: TypeScript, Zod, Sonner (notifications), Day.js

---

## ✨ Features

- **Sign Up / Sign In**: Secure authentication with Firebase.
- **Interview Generation**: AI-generated interview questions based on your preferences.
- **Voice Interview**: Real-time, voice-based interview simulation.
- **Instant Feedback**: Structured, actionable feedback scored across multiple categories.
- **Interview History**: Dashboard to review past interviews and feedback.

---

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prepwise.git
   cd prepwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file and add your Firebase and API keys:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...
   FIREBASE_PROJECT_ID=...
   FIREBASE_CLIENT_EMAIL=...
   FIREBASE_PRIVATE_KEY=...
   NEXT_PUBLIC_VAPI_WEB_TOKEN=...
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=...
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 API Endpoints

### 1. **Generate Interview Questions**

**POST** `/api/vapi/generate`

**Request Body:**
```json
{
  "type": "Technical",
  "role": "Frontend Developer",
  "level": "Junior",
  "techstack": "React,TypeScript,Next.js",
  "amount": 5,
  "userid": "user123"
}
```

**Response:**
```json
{
  "success": true
}
```

**Description:**  
Generates a set of interview questions tailored to the provided role, level, and tech stack, and saves the interview to Firestore.

---

### 2. **Get Latest Interviews**

**Function:** `getLatestInterviews({ userId, limit })`

**Returns:**  
An array of the latest finalized interviews (excluding those by the current user).

**Example Response:**
```json
[
  {
    "id": "abc123",
    "userId": "user456",
    "role": "Backend Developer",
    "type": "Technical",
    "techstack": ["Node.js", "Express", "MongoDB"],
    "level": "Senior",
    "questions": ["Explain event loop in Node.js", "..."],
    "finalized": true,
    "createdAt": "2024-06-01T10:00:00Z"
  }
]
```

---

### 3. **Get Interviews by User**

**Function:** `getInterviewsByUserId(userId)`

**Returns:**  
All interviews created by the specified user.

---

### 4. **Get Feedback for Interview**

**Function:** `getFeedbackByInterviewId({ interviewId, userId })`

**Returns:**  
Structured feedback for a given interview and user.

**Example Response:**
```json
{
  "id": "feedback123",
  "interviewId": "abc123",
  "totalScore": 78,
  "categoryScores": [
    {
      "name": "Communication Skills",
      "score": 80,
      "comment": "Clear and concise answers."
    },
    {
      "name": "Technical Knowledge",
      "score": 75,
      "comment": "Good understanding of React."
    }
    // ...
  ],
  "strengths": ["Strong communication", "Good technical foundation"],
  "areasForImprovement": ["Deeper knowledge of advanced topics"],
  "finalAssessment": "Overall, a solid performance with room for growth.",
  "createdAt": "2024-06-01T10:05:00Z"
}
```

---

### 5. **Create Feedback**

**Function:** `createFeedback({ interviewId, userId, transcript, feedbackId? })`

**Description:**  
Analyzes the transcript of an interview and generates structured feedback using AI.

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vapi Voice AI](https://vapi.ai/)
- [Google Gemini](https://ai.google.dev/)

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 💡 Questions?

Feel free to open an issue or reach out!
