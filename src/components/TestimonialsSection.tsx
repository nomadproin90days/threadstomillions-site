"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/images/testimonials/threads-success-story-1.png",
    alt: "Threads to Millions member success story showing 5-figure monthly results and engagement growth."
  },
  {
    image: "/images/testimonials/threads-success-story-2.png",
    alt: "Social media marketing transformation: scaling a Threads account from zero to thousands of followers organically."
  },
  {
    image: "/images/testimonials/threads-success-story-3.png",
    alt: "Threads algorithm mastery: student testimonial showing viral reach and monetization success."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6 text-white">
            Real <span className="ttm-gradient-text">Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community members have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-lg hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
