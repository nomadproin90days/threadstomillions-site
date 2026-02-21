"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 bg-card/50 mb-6">
          <span className="text-3xl text-primary">!</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl uppercase mb-4 text-foreground">
          Something Went <span className="ttm-gradient-text">Wrong</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          We hit an unexpected error. Please try again, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#5f8f93] hover:bg-[#6a9fa3] text-white rounded-full font-bold transition-all shadow-lg shadow-[#5f8f93]/20"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
