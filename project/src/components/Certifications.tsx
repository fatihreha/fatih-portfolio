import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  id: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  image: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Introduction to Computer Science CS50x",
      issuer: "Harvard University",
      date: "Ongoing",
      description: "Currently enrolled in Harvard's renowned CS50x course, covering fundamental concepts in computer science and programming.",
      image: "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/CS50x_pll.png"
    },
    {
      id: 2,
      name: "AWS Cloud Practitioner'23",
      issuer: "Yapı Kredi Technology",
      date: "2024",
      description: "Completed training for the AWS Cloud Practitioner exam, covering core AWS services such as EC2, S3, RDS, IAM, and VPC, along with cloud security, pricing models, and best practices.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/overlay/1723644311971/single-media-viewer",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
    {
      id: 3,
      name: "Cloud Technologies Workshop",
      issuer: "Tech Istanbul",
      date: "2024",
      description: "Experienced AWS IAM for identity and access management, configured EC2 instances for virtual computing, and implemented S3 storage solutions for scalable data management.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/details/certifications/1723644514532/single-media-viewer",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 4,
      name: "Python for Machine Learning",
      issuer: "Global AI Hub",
      date: "2023",
      description: "Applied machine learning techniques, including supervised and unsupervised learning, feature engineering, and model evaluation, using Python libraries such as NumPy, pandas, and Matplotlib.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      name: "Introduction to Python",
      issuer: "Global AI Hub",
      date: "2023",
      description: "Developed skills in Python programming with a focus on data types, control flow, functions, Object Oriented Programming(OOP), and file handling.",
      image: "https://www.python.org/static/community_logos/python-logo-generic.svg"
    }
  ];
  
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col hover-scale animate-fade-in-up">
              <div className="h-40 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <Award size={20} className="text-indigo-600 mr-2" />
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{cert.description}</p>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-auto"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Verify Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;