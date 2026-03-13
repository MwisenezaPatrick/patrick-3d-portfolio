/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    // Add your Web3Forms access key
    formData.append("access_key", "34c840bc-5504-4ecf-af7d-51b5d0b52f35");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully!");
      event.currentTarget.reset();
    } else {
      console.error("Error", data);
      alert(data.message);
      setResult("");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold gradient-text mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Let’s collaborate on exciting projects or discuss opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">patrick.mwiseneza@strathmore.edu</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-secondary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+254 740 788 529</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/mwiseneza-patrick-6b226a272/"
                target="_blank"
                className="p-3 rounded-full bg-card hover:bg-secondary/10 transition"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-card p-8 rounded-xl border border-border"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              <Send className="mr-2 h-4 w-4" />
              {result ? result : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
