import { Database, TrendingUp, Filter, Zap, BarChart3, Target } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Data-Backed Content Ideas",
      description: "Every suggestion is based on real performance data from successful Instagram posts.",
    },
    {
      icon: TrendingUp,
      title: "Trend Detection",
      description: "Identify what's trending right now in your niche before it becomes saturated.",
    },
    {
      icon: Filter,
      title: "Smart Filters",
      description: "Filter by engagement rate, post type, recency, and more to find exactly what you need.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get hundreds of viral content ideas in seconds, not hours of manual research.",
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "See likes, comments, shares, and engagement rates for every content idea.",
    },
    {
      icon: Target,
      title: "Niche-Specific",
      description: "Find content ideas tailored to your specific audience and content vertical.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to discover and create viral content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 hover:glow-primary transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-instagram-gradient transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
