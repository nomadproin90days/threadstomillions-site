"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chloe",
    handle: "@chloedigitally",
    avatar: "C",
    content: "I invested in TTM 10 weeks ago. I've sold it 47 times — turning $47 into $1,539.20. Gained 2,126 followers and massive leads, reach, and connections. On sale today only $10 off!!",
    role: "Digital Creator",
  },
  {
    name: "Sav",
    handle: "@digitalwithsav",
    avatar: "S",
    content: "I invested in Threads to Millions & this happened... 500+ new followers, sold it 16 times, and over 170K views!!! I will never shut up about it.",
    role: "Digital Creator",
  },
  {
    name: "Kalinah",
    handle: "@kickitwith.kalinah",
    avatar: "K",
    content: "Threads to Millions really is that girl! Almost 50k views, over 200 Threads, and a few potential leads in less than 2 weeks? Wild.",
    role: "Digital Creator",
  },
  {
    name: "The Digital Powerhouse",
    handle: "@thedigitalpowerhouse",
    avatar: "DP",
    content: "THIS IS INSANEEE. Months of using proven strategies and I just hit 1.0M total views on Threads. The results speak for themselves.",
    role: "Threads Creator",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Real{" "}
            <span className="ttm-gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real members. Real handles. Real results you can verify on Threads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.handle} · {testimonial.role}
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
