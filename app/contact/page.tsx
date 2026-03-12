export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">Contact</h1>

      <p className="text-slate-400 leading-relaxed mb-8">
        I’d love to hear from you—whether it’s about a project, collaboration, or
        just saying hi. Reach out via the links below.
      </p>

      <ul className="space-y-4">
        <li>
          <a
            href="mailto:contact@example.com"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Email
          </a>
          <span className="text-slate-500 ml-2">— lestepbusiness@gmail.com</span>
        </li>
        <li>
          <a
            href="https://github.com/lestep1225118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            GitHub
          </a>
          <span className="text-slate-500 ml-2">— lestep1225118</span>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leander-stephen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            LinkedIn
          </a>
          <span className="text-slate-500 ml-2">— https://www.linkedin.com/in/leanderstephen/</span>
        </li>
      </ul>
    </div>
  );
}
