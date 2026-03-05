"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chloe",
    handle: "@chloedigitally",
    avatar: "C",
    content: "I invested in TTM 10 weeks ago. I've sold it 47 times — turning $47 into $1,539.20. Gained 2,126 followers and massive leads, reach, and connections.",
    role: "Digital Creator",
    highlight: "$47 into $1,539",
  },
  {
    name: "Sav",
    handle: "@digitalwithsav",
    avatar: "S",
    content: "I invested in Threads to Millions & this happened... 500+ new followers, sold it 16 times, and over 170K views!!! I will never shut up about it.",
    role: "Digital Creator",
    highlight: "170K+ views",
  },
  {
    name: "Kalinah",
    handle: "@kickitwith.kalinah",
    avatar: "K",
    content: "Threads to Millions really is that girl! Almost 50k views, over 200 Threads, and a few potential leads in less than 2 weeks? Wild.",
    role: "Digital Creator",
    highlight: "50K views in 2 weeks",
  },
  {
    name: "The Digital Powerhouse",
    handle: "@thedigitalpowerhouse",
    avatar: "DP",
    content: "THIS IS INSANEEE. Months of using proven strategies and I just hit 1.0M total views on Threads. The results speak for themselves.",
    role: "Threads Creator",
    highlight: "1M+ total views",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Real{" "}
            <span className="ttm-gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real members. Real handles. Real results you can verify on Threads.
          </p>
        </motion.div>

        {/* Staggered 2-col layout */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all duration-300 ${
                index % 2 === 1 ? "md:mt-8" : ""
              }`}
            >
              <Quote className="absolute top-4 right-4 w-7 h-7 text-primary/15 group-hover:text-primary/30 transition-colors" />

              {/* Highlight badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {testimonial.highlight}
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 text-sm leading-relaxed mb-5">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.handle} &middot; {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
