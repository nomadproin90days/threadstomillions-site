import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Threads to Millions",
  description:
    "Privacy policy for Threads to Millions. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">
          Last updated: February 20, 2026
        </p>

        <div className="space-y-10 text-[hsl(var(--foreground)/0.85)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              When you visit Threads to Millions or purchase our products, we may
              collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
              <li>
                <span className="text-foreground/85">Personal information</span>{" "}
                such as your name, email address, and billing details when you
                make a purchase or join our community.
              </li>
              <li>
                <span className="text-foreground/85">Usage data</span> including
                pages visited, time spent on the site, browser type, and
                referring URLs.
              </li>
              <li>
                <span className="text-foreground/85">
                  Cookies and tracking data
                </span>{" "}
                to improve your browsing experience and analyze site traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
              <li>Process transactions and deliver digital products and community access.</li>
              <li>Send you updates, marketing communications, and course-related content (you can opt out at any time).</li>
              <li>Improve our website, products, and customer experience.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              3. Cookies
            </h2>
            <p>
              We use cookies and similar technologies to track activity on our
              website and hold certain information. Cookies help us analyze web
              traffic and improve our site. You can instruct your browser to
              refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, some parts of the site may
              not function properly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              We may use third-party services to operate our business, including
              but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
              <li>
                <span className="text-foreground/85">Payment processors</span>{" "}
                to handle transactions securely. We do not store your full
                payment card details.
              </li>
              <li>
                <span className="text-foreground/85">Analytics providers</span>{" "}
                (such as Vercel Analytics) to understand site usage and improve
                performance.
              </li>
              <li>
                <span className="text-foreground/85">Email marketing platforms</span>{" "}
                to send newsletters and product updates.
              </li>
            </ul>
            <p className="mt-3">
              These third parties have their own privacy policies and we
              encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              5. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information at any time. You may also opt out of marketing
              communications by clicking the unsubscribe link in any email we
              send. If you wish to exercise any of these rights, please contact
              us using the information below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please reach out
              to us at{" "}
              <a
                href="mailto:hello@threadstomillions.com"
                className="text-primary hover:underline"
              >
                hello@threadstomillions.com
              </a>{" "}
              or via DM on Threads{" "}
              <a
                href="https://www.threads.net/@getdigitalwithlexie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @getdigitalwithlexie
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
