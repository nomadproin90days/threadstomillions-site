import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Threads to Millions",
  description:
    "Get in touch with Threads to Millions. Reach out to Lexie via Threads DM or email for questions about our courses and community.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl uppercase mb-2 ttm-gradient-text">
          Contact Us
        </h1>
        <p className="text-muted-foreground mb-12">
          We&apos;d love to hear from you.
        </p>

        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-[hsl(var(--card))] p-8">
            <h2 className="font-display text-xl uppercase text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have a question about Threads to Millions, our community, or our
              courses? The best way to reach us is through a direct message on
              Threads or by email. We typically respond within 24-48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:hello@threadstomillions.com"
                    className="text-primary hover:underline"
                  >
                    hello@threadstomillions.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    For general inquiries, support, and refund requests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Threads DM
                  </h3>
                  <a
                    href="https://www.threads.net/@getdigitalwithlexie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @getdigitalwithlexie
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Send a direct message to Lexie on Threads for a quick
                    response.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-[hsl(var(--card))] p-8">
            <h2 className="font-display text-xl uppercase text-foreground mb-4">
              Frequently Asked
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground/90 mb-1">
                  How do I access the community after purchasing?
                </h3>
                <p>
                  You will receive an email with access instructions immediately
                  after your purchase is confirmed. Check your spam folder if you
                  don&apos;t see it within a few minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/90 mb-1">
                  What is your refund policy?
                </h3>
                <p>
                  We offer a 30-day money-back guarantee. If you&apos;re not
                  satisfied, email us within 30 days of purchase for a full
                  refund. See our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  for full details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/90 mb-1">
                  I&apos;m having technical issues. Who do I contact?
                </h3>
                <p>
                  Send us an email at{" "}
                  <a
                    href="mailto:hello@threadstomillions.com"
                    className="text-primary hover:underline"
                  >
                    hello@threadstomillions.com
                  </a>{" "}
                  with a description of the issue and we&apos;ll help you out as
                  quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
