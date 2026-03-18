export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Amol Chavan
        </p>
        <p className="text-sm text-text-muted">
          Built with Next.js &middot; Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
