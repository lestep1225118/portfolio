import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "mumble",
    name: "Mumble",
    shortDescription:
      "Match songs in your Spotify playlist by key and BPM. Drop a CSV, pick a reference track, get harmonically compatible results.",
    longDescription:
      "Export a playlist via Exportify, drop the CSV, filter by same/relative/parallel key and BPM. React + Vite.",
    githubUrl: "https://github.com/lestep1225118/Mumble",
    liveUrl: "https://mumble-delta.vercel.app",
    techStack: ["React", "Vite", "JavaScript"],
    highlighted: true,
    category: "web",
  },
  {
    slug: "echo-app",
    name: "Echo-App",
    shortDescription:
      "Python app with Google Cloud Speech transcription and login. Run locally with gcloud auth.",
    longDescription:
      "Speech-to-text and auth. Python, Google Cloud CLI, pip install.",
    githubUrl: "https://github.com/lestep1225118/Echo-App",
    techStack: ["Python", "Google Cloud", "Speech API"],
    highlighted: false,
    category: "fullstack",
  },
  {
    slug: "moonpay",
    name: "MoonPay",
    shortDescription:
      "Classroom currency for professors and students. Award MoonBucks, manage classes, marketplace and redemption.",
    longDescription:
      "React + Vite frontend, Node/Express + MongoDB. JWT auth, class codes, student balances.",
    githubUrl: "https://github.com/lestep1225118/MoonPay",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlighted: true,
    category: "fullstack",
  },
  {
    slug: "faceify",
    name: "Faceify",
    shortDescription:
      "Upload a face photo; get a Spotify playlist based on detected emotion. OpenCV + DeepFace, Flask backend.",
    longDescription:
      "Face detection, emotion analysis, then playlist generation via Spotify API. Hackathon project with collaborators.",
    githubUrl: "https://github.com/lestep1225118/Faceify",
    techStack: ["Python", "Flask", "OpenCV", "DeepFace", "Spotify API"],
    highlighted: true,
    category: "ml",
  },
  {
    slug: "rnn-music-genre",
    name: "RNN for Music Genre Classification",
    shortDescription:
      "Jazz vs. electronic from MIDI files using an RNN. Research on explainability; paper and presentation in repo.",
    longDescription:
      "MIDI (notes only) → genre label. TensorFlow/Keras, dataset and trained model included.",
    githubUrl: "https://github.com/lestep1225118/RNN-for-Music-Genre-Classification",
    techStack: ["Python", "TensorFlow/Keras", "RNN", "MIDI"],
    highlighted: true,
    category: "ml",
  },
];
