export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">About</h1>

      <p className="text-slate-400 leading-relaxed mb-8">
        I work on web apps and side projects around music and ML — harmonic matching for playlists, emotion-to-playlist from photos, and MIDI genre classification. Mostly React/Node and Python.
      </p>

      <h2 className="text-lg font-semibold text-slate-300 mb-3">Tech</h2>
      <ul className="text-slate-400 space-y-1.5 list-disc list-inside text-sm">
        <li>React, Next.js, TypeScript, Tailwind, Vite</li>
        <li>Node, Express, Python, Flask</li>
        <li>TensorFlow/Keras, OpenCV, DeepFace</li>
        <li>Spotify API, Google Cloud, MongoDB</li>
      </ul>
    </div>
  );
}
