import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificationsProps {
  id?: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  const certifications = [
    {
      id: 1,
      name: "HCCDA: Tech Essentials",
      issuer: "Huawei",
      date: "2025",
      description: "Huawei Cloud Computing Developer Associate certification covering cloud fundamentals, infrastructure services, and essential cloud technologies.",
      credentialUrl: "https://drive.google.com/file/d/1BeQ3JAwNrzkKzBOzFiCVTwQDEyZUA-hE/view?usp=sharing",
      image: "https://egirisim.com/wp-content/uploads/2023/07/huawei-cloud.jpg"
    },
    {
      id: 2,
      name: "HCCDA: Cloud Native",
      issuer: "Huawei",
      date: "2025",
      description: "Huawei Cloud Computing Developer Associate certification focusing on cloud-native technologies, containerization, and modern cloud architectures.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/overlay/1763470463080/single-media-viewer/?profileId=ACoAAC4gb04BiH0JJrOpvADB_kzh0GTl4NmgPbg",
      image: "https://egirisim.com/wp-content/uploads/2023/07/huawei-cloud.jpg"
    },
    {
      id: 2,
      name: "DevOps Essentials",
      issuer: "IBM",
      date: "2025",
      description: "Comprehensive training in DevOps practices, covering continuous integration, continuous deployment, automation, and collaboration.",
      credentialUrl: "https://www.credly.com/badges/29c61760-6326-47ae-87dd-d7e45c196384/public_url",
      image: "https://yt3.googleusercontent.com/dhVlUr4qzdw97K77mitoVSZk8u3KLl4hWCeiAVNuoqG1W7WmcN86GSIl96Ge1PeauemTwCl5TA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 3,
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "2025",
      description: "Comprehensive program focused on digital transformation, leadership skills, and strategic thinking.",
      credentialUrl: "https://www.credly.com/badges/489280a7-e657-40e4-9cea-3f89d96aec0e/linked_in_profile",
      image: "https://egirisim.com/wp-content/uploads/2020/02/mckinsey-bankacilik-raporu.jpeg"
    },
    {
      id: 4,
      name: "Introduction to Computer Science CS50x",
      issuer: "Harvard University",
      date: "2025",
      description: "Completed Harvard's renowned CS50x course, covering fundamental concepts in computer science and programming.",
      credentialUrl: "https://courses.edx.org/certificates/0c936d5af4cb499a9bf5ad0b72cf9191",
      image: "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/CS50x_pll.png"
    },
    {
      id: 5,
      name: "AWS Cloud Practitioner'23",
      issuer: "Yapı Kredi Technology",
      date: "2024",
      description: "Completed training for the AWS Cloud Practitioner exam, covering core AWS services such as EC2, S3, RDS, IAM, and VPC.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/overlay/1723644311971/single-media-viewer",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
    {
      id: 6,
      name: "Cloud Technologies Workshop",
      issuer: "Tech Istanbul",
      date: "2024",
      description: "Experienced AWS IAM for identity and access management, configured EC2 instances, and implemented S3 storage solutions.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/details/certifications/1723644514532/single-media-viewer",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 7,
      name: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      description: "Foundational course covering cloud computing concepts, AWS core services, and basic cloud architecture principles.",
      credentialUrl: "https://www.credly.com/badges/84135c4c-fdc2-490a-8ca5-9e54ef039e0e/linked_in_profile",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
    }
  ];

  return (
    <section id={id} className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Certifications</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="window-card p-0 bg-white dark:bg-dark-tertiary flex flex-col group hover:-translate-y-2 transition-transform duration-300 h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative border-b border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${cert.issuer}&background=random&color=fff`;
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20 flex items-center gap-1">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 line-clamp-2 min-h-[56px]">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    <CheckCircle size={14} />
                    {cert.issuer}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {cert.description}
                </p>

                <div className="mt-auto">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-50 dark:bg-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors border border-gray-200 dark:border-gray-600 group-hover:border-indigo-300 dark:group-hover:border-indigo-700"
                    >
                      Verify Credential
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;