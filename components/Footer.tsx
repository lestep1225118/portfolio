import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Leander Stephen
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/lestep1225118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/contact"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
