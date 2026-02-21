import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Threads to Millions",
  description:
    "Terms of service for Threads to Millions. Read our terms covering purchases, refunds, intellectual property, and more.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-12">
          Last updated: February 20, 2026
        </p>

        <div className="space-y-10 text-[hsl(var(--foreground)/0.85)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Threads to Millions website and
              purchasing any of our digital products, courses, or community
              memberships, you agree to be bound by these Terms of Service. If
              you do not agree with any part of these terms, please do not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              2. Products and Services
            </h2>
            <p>
              Threads to Millions provides digital courses, community access, and
              educational content related to growing and monetizing an audience on
              the Threads social media platform. All content is delivered
              digitally and access is granted upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              3. Purchases and Payment
            </h2>
            <p>
              All purchases are processed through our third-party payment
              provider. By making a purchase, you represent that the payment
              information you provide is accurate and that you are authorized to
              use the payment method. Prices are listed in USD unless otherwise
              stated and may be subject to change.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              4. Refund Policy
            </h2>
            <p>
              We offer a 30-day money-back guarantee on our digital products. If
              you are not satisfied with your purchase, you may request a full
              refund within 30 days of your purchase date by contacting us at{" "}
              <a
                href="mailto:hello@threadstomillions.com"
                className="text-primary hover:underline"
              >
                hello@threadstomillions.com
              </a>
              . Refunds are processed to the original payment method and may take
              5-10 business days to appear.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              5. Intellectual Property
            </h2>
            <p className="mb-3">
              All content on this website and within our courses, including but
              not limited to text, graphics, logos, videos, templates, and course
              materials, is the intellectual property of Threads to Millions and
              is protected by copyright law.
            </p>
            <p>
              Your purchase grants you a personal, non-transferable,
              non-exclusive license to access and use the materials for your own
              personal or business use. You may not redistribute, resell, share,
              or publicly reproduce any course materials without prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              6. User Conduct
            </h2>
            <p className="mb-3">
              When participating in our community or using our services, you
              agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
              <li>Be respectful and constructive in all interactions with other members.</li>
              <li>Not share, redistribute, or resell course materials or community content.</li>
              <li>Not use the platform to promote illegal activities or harm others.</li>
              <li>Not attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to revoke access to any user who violates
              these terms without refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              7. Disclaimers
            </h2>
            <p className="mb-3">
              Threads to Millions provides educational content and strategies for
              growing a social media presence. Results may vary and we make no
              guarantees regarding specific outcomes, income levels, or follower
              growth.
            </p>
            <p>
              Our services are provided &ldquo;as is&rdquo; without warranties
              of any kind, either express or implied. We are not responsible for
              any changes to the Threads platform, algorithm updates, or
              third-party service disruptions that may affect the strategies
              taught in our courses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Threads to Millions and its
              creator shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              9. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of our services after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl uppercase text-foreground mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us at{" "}
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
