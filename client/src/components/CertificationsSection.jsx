import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "SAP Generative AI Developer",
    issuer: "SAP",
    date: "Apr 2026 - Apr 2027",
    description: "Expertise in SAP Business AI capabilities, extending SAP BTP applications leveraging LLMs via SAP AI Core and generative AI hub.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    credentialUrl: "https://www.credly.com/badges/9126be5f-c626-4cca-b66b-c88e5ed277d4"
  },
  {
    id: 2,
    title: "OCI Certified Data Science Professional",
    issuer: "Oracle",
    date: "Oct 2025 - Oct 2027",
    description: "Advanced proficiency in Oracle Cloud Infrastructure for building, training, and deploying machine learning models at scale.",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-500",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A91E236CA26DCBCA0E9AAA1ED11A7DECD689D60B7F8A8BDB23656F0003E91EBF"
  },
  {
    id: 3,
    title: "Java SE 17 Developer",
    issuer: "Oracle",
    date: "Mar 2026",
    description: "Deep understanding of Java SE 17, demonstrating strong foundational and advanced programming skills.",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=50A40F02F5A7E0064707A59EABFEE1868928499F10A99B3280320EAB71931A1F"
  },
  {
    id: 4,
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB",
    date: "Jul 2026",
    description: "Proficiency in MongoDB fundamentals, including data modeling, CRUD operations, and indexing.",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-500",
    credentialUrl: "https://www.credly.com/badges/925faa46-cf55-4cc5-b551-40d86d4eb02f"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional qualifications and industry-recognized certifications validating my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl bg-card border ${cert.borderColor} shadow-lg hover:shadow-xl transition-all relative overflow-hidden group`}
            >
              {/* Subtle background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-background border ${cert.borderColor}`}>
                    <ShieldCheck className={`w-8 h-8 ${cert.iconColor}`} />
                  </div>
                  <div className="text-xs font-semibold px-3 py-1 bg-background/50 rounded-full border border-border/50 text-muted-foreground">
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground/90 leading-relaxed mt-auto mb-4">
                  {cert.description}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${cert.iconColor} hover:opacity-80 transition-opacity relative z-20`}
                  >
                    Verify Credential <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
