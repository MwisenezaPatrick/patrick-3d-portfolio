import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Diploma in Business Information Technology",
      institution: "Strathmore University",
      period: "2023 - 2025",
      status: "Completed",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      degree: "Electronics and Telecommunication",
      institution: "St Emmanuiel School Copmplex",
      period: "2016 - 2018",
      status: "Completed",
      icon: BookOpen,
      color: "text-secondary"
    }
  ];

  // 🔹 Certificates with file paths
  const certifications = [
    {
      title: "English Proficiency",
      file: "/certificates/English Certificate .pdf"
    },
    {
      title: "LifeSkills and Film-Making",
      file: "/certificates/LifeSkills and FilmMaking.pdf"
    },
    {
      title: "I-HUZO Digital Commerce ",
      file: "/certificates/Ihuzo.pdf"
    },
    {
      title: "BH-B1V Electric Safety",
      file: "/certificates/HO-B1V Electric Safety.pdf"
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild (CISCO)",
      file: "/certificates/AI_Fundamentals_with_IBM_SkillsBuild.pdf"
    },
    {
      title: "Computer Hardware Basics (CISCO)",
      file: "/certificates/Computer Hardware Basics.pdf"
    },
    {
      title: "Introduction to Data Science (CISCO)",
      file: "/certificates/Introduction to Data Science.pdf"
    },
    {
      title: "Introduction to IoT and Digital Transformation (CISCO)",
      file: "/certificates/Introduction to IoT and Digital Transformation.pdf"
    },
    {
      title: "Introduction to CyberSecurity (CISCO)",
      file: "/certificates/Introduction to CyberSecurityI.pdf"
    },
    {
      title: "DTP Welcome to the Academy",
      file: "/certificates/DTP Welcome to the Academy.pdf"
    },
    {
      title: "UI/UX - Beginner (DTP)",
      file: "/certificates/UIUX - Beginner (DTP).pdf"
    }, 
    {
      title: "Data Analysis and Visualization - Beginner (DTP)",
      file: "/certificates/Data Analysis and Visualization - Beginner (DTP).pdf"
    },
    {
      title: "Data Analysis and Visualization - Intermediate (DTP)",
      file: "/certificates/Data Analysis and Visualization - Intermediate (DTP).pdf"
    },
    {
      title: "Cyber Security - Beginner (DTP)",
      file: "/certificates/Cyber Security - Beginner (DTP).pdf"
    },
    {
      title: "Problem Solving 01. Defining the Problem",
      file: "/certificates/Problem Solving 01. Defining the Problem.pdf"
    },
    {
      title: "Problem Solving 02. Finding the Root Cause",
      file: "/certificates/Problem Solving 02. Finding the Root Cause.pdf"
    },
    {
      title: "Problem Solving 03. Generating Solutions",
      file: "/certificates/Problem Solving 03. Generating Solutions.pdf"
    },
    {
      title: "Problem Solving 05. Implementing the Solution",
      file: "/certificates/Problem Solving 05. Implementing the Solution.pdf"
    },
    {
      title: "Problem Solving 06. Monitoring the Solution",
      file: "/certificates/Problem Solving 06. Monitoring the Solution.pdf"
    },
    {
      title: "Business Analytics Marketing Data",
      file: "/certificates/Business Analytics Marketing Data.pdf"
    },
    {
      title: "Communication Toolkit Becoming a Master Communicator",
      file: "/certificates/Communication Toolkit Becoming a Master Communicator.pdf"
    },
    {
      title: "Communication Toolkit Communicating Across the Organization",
      file: "/certificates/Communication Toolkit Communicating Across the Organization.pdf"
    },
    {
      title: "Communication Toolkit Communication Is Critical",
      file: "/certificates/Communication Toolkit Communication Is Critical.pdf"
    },
    {
      title: "Communication Toolkit Overcommunicating",
      file: "/certificates/Communication Toolkit Overcommunicating.pdf"
    },
    {
      title: "Communication Toolkit Transparency",
      file: "/certificates/Communication Toolkit Transparency.pdf"
    },
    {
      title: "Excel Data Analysis with Pivot Tables",
      file: "/certificates/Excel Data Analysis with Pivot Tables.pdf"
    },
    {
      title: "Data Visualization with Python",
      file: "/certificates/Data Visualization with Python.pdf"
    },
    {
      title: "Data Analysis Using the Spark DataFrame API",
      file: "/certificates/Data Analysis Using the Spark DataFrame API.pdf"
    },
    {
      title: "(COURSE) Apache Spark Data Analysis Using the Spark DataFrame API",
      file: "/certificates/(COURSE) Apache Spark Data Analysis Using the Spark DataFrame API.pdf"
    },
    {
      title: "Learning Python Data Analysis",
      file: "/certificates/Learning Python Data Analysis.pdf"
    },
    {
      title: "Data Analysis Using the Spark DataFrame API",
      file: "/certificates/Data Analysis Using the Spark DataFrame API.pdf"
    },
    {
      title: "Basics of Python (UniAthena)",
      file: "/certificates/Basics of Python.pdf"
    },
    {
      title: "cPanel & WHM System Administrator I",
      file: "/certificates/cPanel &amp; WHM System Administrator I Certification Exam.pdf"
    },
    {
      title: "cPanel & WHM System Administrator II",
      file: "/certificates/cPanel &amp; WHM System Administrator II Certification Exam.pdf"
    },
    {
      title: "cPanel Professional Certification ExamI",
      file: "/certificates/Mwiseneza_Patrick_cPanel Professional Certification Exam.pdf"
    },
    {
      title: "cPanel &amp; WHM Sales Professional Certification Exam",
      file: "/certificates/Mwiseneza_Patrick_cPanel &amp; WHM Sales Professional Certification Exam.pdf"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-8">
            <span className="gradient-text">Professional Certifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(cert.file, "_blank")}
                className="group cursor-pointer relative p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {cert.title}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
