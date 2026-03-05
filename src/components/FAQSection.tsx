import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  // Structured Data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you see who views your Threads profile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Threads does not currently allow you to see a list of users who view your profile. However, you can track engagement (likes, replies, reposts) to measure your reach."
        }
      },
      {
        "@type": "Question",
        "name": "Will Threads be monetized? Can I make money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but not through a Creator Fund. The most profitable way to monetize Threads is by funneling attention to owned assets like a newsletter, digital product, or Skool community."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Threads algorithm work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Threads algorithm prioritizes conversational depth. Unlike Instagram (visuals) or X (news), Threads promotes posts that generate replies and back-and-forth dialogue."
        }
      },
      {
        "@type": "Question",
        "name": "Are Threads linked to Instagram permanently?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Threads account is tied to your Instagram login, but Meta has introduced features to allow you to deactivate or delete your Threads profile separately."
        }
      },
      {
        "@type": "Question",
        "name": "How do I delete my Threads account without deleting Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Go to Settings > Account > Deactivate or Delete Profile. You can now choose to delete your Threads profile specifically without affecting your Instagram account."
        }
      },
      {
        "@type": "Question",
        "name": "Why did Threads 'fail' initially (and why is it back)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Threads saw a drop in 2023 because it lacked key features. It has since 'bounced back' because users are leaving X (Twitter) for a more positive, professional environment."
        }
      },
      {
        "@type": "Question",
        "name": "Threads vs Twitter (X): Which is better for business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Community Building, Lifestyle, and Education, Threads is superior. It has higher engagement rates and a less 'hostile' environment than X."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to post on Threads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Data suggests the Evening (6pm - 10pm) is the golden window. Threads is a 'leisure' app where people go to chat after work."
        }
      },
      {
        "@type": "Question",
        "name": "Can you message people on Threads (DMs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Threads integrates with Instagram DMs. When you message someone on Threads, it goes to their Instagram inbox, keeping all conversations in one place."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns Threads and is my data safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Threads is owned by Meta (Instagram/Facebook). It adheres to the same enterprise-grade security and privacy standards as Instagram."
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Answers to the most searched questions about the Threads app in 2026.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              1. Can you see who views your Threads profile?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              No, Threads does not currently allow you to see a list of users who view your profile. However, you can track **engagement** (likes, replies, reposts) to measure your reach. Our course teaches you how to interpret these signals to find your "silent" audience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              2. Will Threads be monetized? Can I make money?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Yes, but not through a "Creator Fund" like TikTok. The most profitable way to monetize Threads is by funneling attention to **owned assets** (like a newsletter, digital product, or Skool community). This allows you to control your income regardless of algorithm changes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              3. How does the Threads algorithm work?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              The Threads algorithm prioritizes **conversational depth**. Unlike Instagram (visuals) or X (news), Threads promotes posts that generate replies and back-and-forth dialogue. Posting questions and engaging in comments is the #1 way to grow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              4. Are Threads linked to Instagram permanently?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Your Threads account is tied to your Instagram login, which is a huge advantage for growth (you bring your followers with you). However, Meta has introduced features to allow you to deactivate or delete your Threads profile *separately* from your Instagram account if you choose.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              5. How do I delete my Threads account without deleting Instagram?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Go to <strong>Settings {'>'} Account {'>'} Deactivate or Delete Profile</strong>. You can now choose to delete your Threads profile specifically without affecting your Instagram account. Previously, they were locked together, but this has been updated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              6. Why did Threads "fail" initially (and why is it back)?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Threads saw a drop in 2023 because it lacked key features (like a desktop app and search). It has since "bounced back" because users are leaving X (Twitter) for a more positive, professional environment. It is now the fastest-growing text platform for creators.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              7. Threads vs Twitter (X): Which is better for business?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              For **Community Building, Lifestyle, and Education**, Threads is superior. It has higher engagement rates and a less "hostile" environment than X. For breaking news and politics, X is still dominant.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              8. What is the best time to post on Threads?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Data suggests the **Evening (6pm - 10pm)** is the golden window. Threads is a "leisure" app where people go to chat after work, unlike LinkedIn (morning) or Instagram (all day).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              9. Can you message people on Threads (DMs)?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Threads integrates with **Instagram DMs**. When you message someone on Threads, it goes to their Instagram inbox. This is powerful because it keeps all your conversations in one place.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              10. Who owns Threads and is my data safe?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Threads is owned by **Meta (Instagram/Facebook)**. It adheres to the same enterprise-grade security and privacy standards as Instagram.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
