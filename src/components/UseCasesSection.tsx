import { Sparkles, Building2, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Sparkles,
      type: "New Creators",
      description: "Skip the guesswork and start with content that's already proven to work.",
      metric: "3x faster growth",
    },
    {
      icon: Building2,
      type: "Agencies",
      description: "Research content strategies for multiple clients in minutes, not days.",
      metric: "10+ hours saved per week",
    },
    {
      icon: Users,
      type: "Brands",
      description: "Stay ahead of trends and create content that resonates with your audience.",
      metric: "Higher engagement rates",
    },
    {
      icon: Rocket,
      type: "Influencers",
      description: "Maintain consistent growth by pivoting to trending topics at the right time.",
      metric: "Increased reach",
    },
  ];

  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who Uses Virality AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by creators, agencies, and brands worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-instagram-gradient glow-primary">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{useCase.type}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {useCase.description}
              </p>

              <div className="pt-4 border-t border-border/30">
                <span className="text-sm font-semibold text-accent">
                  {useCase.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
