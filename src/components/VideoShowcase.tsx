import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-6">
                WATCH THE DEMO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                See the <span className="ttm-gradient-text">System</span> in Action
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                This isn't just theory. Watch how the <strong className="text-foreground">Story Sequence Template</strong> turns a single idea into a week's worth of high-engagement content.
              </p>

              <div className="space-y-4">
                {[
                  "Automated Content Calendar Setup",
                  "Viral Hook Generation",
                  "Engagement Tracking Dashboard",
                  "One-Click Thread Publishing"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-muted-foreground font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Phone Mockup Video */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] border-8 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-800/10"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              
              <video 
                className="w-full h-full object-cover bg-slate-900"
                controls
                playsInline
                preload="metadata"
                title="Threads to Millions - Story Sequence Template Demo"
                aria-label="A video demonstration of the Threads to Millions Story Sequence Template in action on a mobile device."
              >
                <source src="/videos/story-sequence-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
