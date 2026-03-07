"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

interface EmailCaptureFormProps {
  buttonText?: string;
  successMessage?: string;
  successSubtext?: string;
  source?: string;
  className?: string;
}

export default function EmailCaptureForm({
  buttonText = "Get Free Access",
  successMessage = "Check your inbox!",
  successSubtext = "Your free guide is on the way.",
  className = "",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 ${className}`}>
        <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0" />
        <div>
          <p className="font-bold text-[var(--foreground)]">{successMessage}</p>
          <p className="text-sm text-[var(--muted-foreground)]">{successSubtext}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-14 px-5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-colors"
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary h-14 px-8 flex items-center justify-center gap-2 text-[16px] whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:col-span-2">{errorMsg}</p>
      )}
    </form>
  );
}
