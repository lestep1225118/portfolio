import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "mumble",
    name: "Mumble",
    shortDescription:
      "Web app that finds harmonically compatible songs in your Spotify playlist by key and BPM.",
    longDescription:
      "Mumble lets you export a playlist via Exportify, drop the CSV, and filter by same key, relative key, or parallel key with adjustable BPM tolerance. Built with React and Vite.",
    githubUrl: "https://github.com/lestep1225118/Mumble",
    liveUrl: "https://mumble-six.vercel.app",
    techStack: ["React", "Vite", "JavaScript"],
    highlighted: true,
    category: "web",
  },
  {
    slug: "echo-app",
    name: "Echo-App",
    shortDescription:
      "Speech and Google Cloud–driven application with transcription and auth.",
    longDescription:
      "Python app using Google Cloud Speech for transcription, with a login flow and backend services. Demonstrates integration with Google Cloud CLI and speech APIs.",
    githubUrl: "https://github.com/lestep1225118/Echo-App",
    techStack: ["Python", "Google Cloud", "Speech API"],
    highlighted: false,
    category: "fullstack",
  },
  {
    slug: "moonpay",
    name: "MoonPay",
    shortDescription:
      "Full-stack classroom currency app for professors to reward students with MoonBucks.",
    longDescription:
      "React + Vite frontend and Node/Express backend with MongoDB. Professor dashboard for awarding MoonBucks and managing students; student portal for balances and marketplace. JWT auth.",
    githubUrl: "https://github.com/lestep1225118/MoonPay",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlighted: true,
    category: "fullstack",
  },
  {
    slug: "faceify",
    name: "Faceify",
    shortDescription:
      "Analyzes facial expressions in images and generates personalized Spotify playlists from detected emotions.",
    longDescription:
      "Uses OpenCV and DeepFace for face detection and emotion analysis (happy, sad, angry, etc.), then maps emotions to musical features and creates playlists via the Spotify API. Built with Flask.",
    githubUrl: "https://github.com/lestep1225118/Faceify",
    techStack: ["Python", "Flask", "OpenCV", "DeepFace", "Spotify API"],
    highlighted: true,
    category: "ml",
  },
  {
    slug: "rnn-music-genre",
    name: "RNN for Music Genre Classification",
    shortDescription:
      "Recurrent neural network that classifies jazz vs. electronic genre from MIDI files, with explainability exploration.",
    longDescription:
      "Implements an RNN to recognize jazz and electronic genres from MIDI (note events only). Includes research on model explainability. Python with typical ML stack.",
    githubUrl: "https://github.com/lestep1225118/RNN-for-Music-Genre-Classification",
    techStack: ["Python", "TensorFlow/Keras", "RNN", "MIDI"],
    highlighted: true,
    category: "ml",
  },
];
