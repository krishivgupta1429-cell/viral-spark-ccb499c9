import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Virality AI find viral content?",
      answer:
        "Virality AI analyzes millions of Instagram posts and identifies high-performing content based on engagement metrics like likes, comments, shares, and save rates. We use advanced algorithms to detect patterns and trending topics in real-time.",
    },
    {
      question: "Do I need an Instagram account to use Virality AI?",
      answer:
        "No, you don't need an Instagram account to use Virality AI. Our tool analyzes public Instagram data and provides you with insights without requiring any account connection.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "Our database is updated continuously throughout the day. We analyze new posts and trending content in real-time, so you always have access to the latest viral content ideas.",
    },
    {
      question: "Can I export the content ideas?",
      answer:
        "Yes! Pro and Agency plan users can export their search results and content ideas in various formats including CSV and PDF for easy sharing with team members or clients.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 30-day free trial with full access to all Pro features. No credit card required. You can cancel anytime during the trial period.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All users get access to our knowledge base and email support. Pro users receive priority email support, and Agency users get dedicated support with faster response times.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Virality AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
