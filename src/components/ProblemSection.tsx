import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Feeling lost with no engagement",
    description: "Posting into the void and wondering if anyone even sees your content.",
  },
  {
    icon: TrendingDown,
    title: "Struggling to grow",
    description: "Stuck at the same follower count while others seem to explode overnight.",
  },
  {
    icon: Users,
    title: "No community connection",
    description: "Building an audience but failing to create real relationships that matter.",
  },
  {
    icon: DollarSign,
    title: "Want to monetize but don't know how",
    description: "Dreaming of turning followers into buyers without feeling like a salesperson.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Does This Sound{" "}
            <span className="ttm-gradient-text">Like You?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            You're not alone. These are the exact struggles that hold most Threads creators back from reaching their potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="ttm-gradient-border p-6 rounded-lg group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
