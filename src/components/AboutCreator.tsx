import { motion } from "framer-motion";

const AboutCreator = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
                Meet the <span className="text-primary">Creator</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi, I’m <strong>Lexie (@getdigitalwithlexie)</strong> — the creator of 'Threads to Millions'.
                </p>
                <p>
                  I started digital marketing in August 2024 because I was tired of trading my time for money and living paycheck to paycheck. Since then, I’ve scaled my business to a full-time income and officially left my 9-5 job.
                </p>
                <p>
                  Threads has been my biggest success engine. A large percentage of my sales—now reaching <strong>5 figures monthly</strong>—come from Threads alone.
                </p>
                <p className="font-medium text-foreground italic">
                  "I made this blueprint to provide others with the exact strategies I used to see success. Truly anyone can scale on Threads if they have a proven blueprint to follow."
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/Lexie.jpg" 
                alt="Lexie - Creator of Threads to Millions" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;
