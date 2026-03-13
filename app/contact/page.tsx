export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">Contact</h1>

      <p className="text-slate-400 leading-relaxed mb-8">
        Email or DM works. Links below.
      </p>

      <ul className="space-y-4">
        <li>
          <a
            href="mailto:lestepbusiness@gmail.com"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            lestepbusiness@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lestep1225118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            GitHub — lestep1225118
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leanderstephen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
