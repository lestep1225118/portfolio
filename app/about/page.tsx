export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">About</h1>

      <div className="prose prose-invert prose-slate max-w-none">
        <p className="text-slate-400 leading-relaxed mb-6">
          I build web applications and explore the intersection of music, computer
          vision, and machine learning. From harmonic matching for DJ sets to
          emotion-driven playlists and genre classification from MIDI, I like
          shipping practical tools and experimenting with ML.
        </p>

        <h2 className="text-xl font-semibold text-slate-200 mt-8 mb-4">
          Skills & tools
        </h2>
        <ul className="text-slate-400 space-y-2 list-disc list-inside">
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS, Vite</li>
          <li>Backend: Node.js, Express, Python, Flask</li>
          <li>Data & ML: Python, TensorFlow/Keras, OpenCV, DeepFace</li>
          <li>APIs & services: Spotify API, Google Cloud (Speech, etc.)</li>
          <li>Databases: MongoDB, SQL</li>
        </ul>
      </div>
    </div>
  );
}
