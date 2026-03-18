export function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Amol Chavan
        </p>
        <p className="text-xs text-text-muted/60">
          Next.js &middot; Tailwind &middot; Framer Motion
        </p>
      </div>
    </footer>
  );
}
