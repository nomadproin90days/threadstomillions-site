import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    handle: " @sarahcreates",
    avatar: "SM",
    content: "TTM completely transformed my approach to Threads. I went from 200 to 15K followers in 3 months and launched my first digital product that generated $12K in the first week!",
    role: "Digital Creator",
  },
  {
    name: "Marcus Chen",
    handle: " @marcusbuilds",
    avatar: "MC",
    content: "The ThreadyBot alone is worth the investment. But combined with the community and strategies? It's a no-brainer. I've 10x'd my engagement and finally feel confident selling.",
    role: "SaaS Founder",
  },
  {
    name: "Elena Rodriguez",
    handle: " @elenaflows",
    avatar: "ER",
    content: "I was skeptical at first, but the results speak for themselves. The weekly calls and community support kept me accountable. Now I'm making a full-time income from my content.",
    role: "Content Strategist",
  },
  {
    name: "James Park",
    handle: " @jamesparkhq",
    avatar: "JP",
    content: "Finally, a program that doesn't feel salesy. The strategies are authentic, the community is supportive, and the results are real. Best investment I've made in my creator journey.",
    role: "Newsletter Writer",
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
            Don't just take our word for it. Here's what our community members have to say.
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
