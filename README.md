# Voice Transcription and Translation App

This project is a comprehensive voice transcription and translation application, leveraging cutting-edge machine learning models to deliver accurate and multilingual transcription services. The app provides a user-friendly interface for voice recording and translation, all accessible via a React-based web interface.

## Features

### 🎤 Voice Transcription
- **Model:** `openai/whisper-tiny.en`
- **Description:** Transcribe spoken English into text using Hugging Face’s Speech-to-Text transformer. The model is lightweight yet powerful, making it suitable for real-time transcription needs.

### 🌐 Multilingual Translation
- **Model:** `Xenova/nllb-200-distilled-600M`
- **Description:** Translate the transcribed text into over 200 languages. This multilingual model is optimized for diverse and accurate translations, enabling communication across global languages.

### ⚛️ React-Based Interface
- **Description:** The app features a modern and responsive React-based interface, providing users with a seamless experience for recording, transcribing, and translating voice input.

### 🚀 Deployment
- **Platform:** Vercel
- **Description:** The app is deployed on Vercel, offering fast, reliable, and scalable hosting, with continuous integration for easy updates.

## Installation and Setup

To run this application locally using Vite, follow the steps below.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** (version 7 or higher) or **yarn** (optional)

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/voice-transcription-translation-app.git

cd voice-transcription-translation-app

npm install

npm run dev

npm run build
