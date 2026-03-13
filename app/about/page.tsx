export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">About</h1>

      <p className="text-slate-400 leading-relaxed mb-6">
        I’m a third-year Computer Science student at the University of Georgia (Franklin College of Arts & Sciences), graduating December 2026. I focus on full-stack development, machine learning, and turning research into production-ready tools — from harmonic playlist matching and emotion-to-playlist apps to RNN-based genre classification and child vocalization detection.
      </p>

      <h2 className="text-lg font-semibold text-slate-300 mb-3">Experience</h2>
      <ul className="text-slate-400 space-y-4 mb-8 text-sm">
        <li>
          <span className="font-medium text-slate-200">Software Developer Intern, Bravura Technologies</span> (Roswell, GA) — June 2025–Aug 2025. Built an automated email-matching system integrating HubSpot CRM with Hunter.io; built an AI-powered web scraping pipeline (Python, BeautifulSoup/Selenium) for 600+ US trade show events, aggregating 1,000+ leads and cutting manual research time by ~70%.
        </li>
        <li>
          <span className="font-medium text-slate-200">Software Developer Intern, Bravura Technologies</span> (Roswell, GA) — May 2024–Aug 2024. Produced an AI-based PDF-to-SVG floorplan processing system that detected booth boundaries and labels, cutting manual layout time by ~90%; collaborated with Prof. Vasant Dhar and cross-functional teams to turn research AI models into production-ready prototypes.
        </li>
        <li>
          <span className="font-medium text-slate-200">Student Researcher, UGA CURO</span> (Athens, GA) — June 2025–Present. Performance analysis of deep-learning models for child vocalization detection on naturalistic audio; extending Python training and evaluation pipelines, hyperparameter tuning, and benchmarking against human-labeled data.
        </li>
        <li>
          <span className="font-medium text-slate-200">Student Research Intern, KSU</span> (Marietta, GA) — Jan 2023–May 2023. Designed and trained an RNN in TensorFlow for music genre classification (&gt;90% accuracy); worked on interpretability and helped develop materials for undergraduate AI coursework.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-slate-300 mb-3">Technical skills</h2>
      <ul className="text-slate-400 space-y-1.5 list-disc list-inside text-sm mb-6">
        <li><strong className="text-slate-300">Languages:</strong> C, C++, Java, Python, TypeScript, JavaScript, SQL</li>
        <li><strong className="text-slate-300">Web & app:</strong> React, Next.js, Vite, Flask, HTML, CSS, Tailwind</li>
        <li><strong className="text-slate-300">Infrastructure & tools:</strong> PostgreSQL, MongoDB, Docker, Git, Linux/Unix</li>
        <li><strong className="text-slate-300">ML & data:</strong> PyTorch, TensorFlow, Keras, Hugging Face, RNNs, computer vision, exploratory data analysis</li>
      </ul>

      <h2 className="text-lg font-semibold text-slate-300 mb-3">Education</h2>
      <p className="text-slate-400 text-sm leading-relaxed">
        B.S. in Computer Science, University of Georgia — GPA 3.82/4.00. Relevant coursework: Data Structures & Algorithms, Systems Programming, Software Development, Software Engineering, Computer Architecture, Artificial Intelligence, Combinatorics, Applied Linear Algebra, Discrete Math, Computing Ethics.
      </p>
    </div>
  );
}
