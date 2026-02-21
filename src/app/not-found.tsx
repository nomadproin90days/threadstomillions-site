import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-7xl md:text-9xl uppercase mb-2 ttm-gradient-text">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl uppercase mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          This page doesn&apos;t exist. Let&apos;s get you back to growing your Threads audience.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#5f8f93] hover:bg-[#6a9fa3] text-white rounded-full font-bold transition-all shadow-lg shadow-[#5f8f93]/20"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
