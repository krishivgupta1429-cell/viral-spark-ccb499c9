import { Search, MousePointerClick, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Enter a keyword",
      description: "Type any topic, niche, or idea you want to explore on Instagram.",
    },
    {
      icon: MousePointerClick,
      number: "02",
      title: "Click search",
      description: "Our AI instantly analyzes thousands of viral posts matching your keyword.",
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Get viral content ideas",
      description: "Discover proven content formats with performance metrics and engagement data.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to discover your next viral content idea
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-instagram-gradient glow-primary">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
