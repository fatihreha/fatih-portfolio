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
      name: "HCCDA: Tech Essentials",
      issuer: "Huawei",
      date: "2025",
      description: "Huawei Cloud Computing Developer Associate certification covering cloud fundamentals, infrastructure services, and essential cloud technologies.",
      credentialUrl: "https://drive.google.com/file/d/1BeQ3JAwNrzkKzBOzFiCVTwQDEyZUA-hE/view?usp=sharing",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLCAzMCkiPgogICAgPHBhdGggZD0iTTAgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1eiIgZmlsbD0iI0ZGMDAwMCIvPgogICAgPHBhdGggZD0iTTAgMjBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1eiIgZmlsbD0iI0ZGMDAwMCIvPgogICAgPHBhdGggZD0iTTAgNDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1eiIgZmlsbD0iI0ZGMDAwMCIvPgogICAgPHBhdGggZD0iTTAgNjBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1em0yMCAwaDEwdjE1aC0xMHptMTUgMGgxNXYxNWgtMTV6bTIwIDBoMTV2MTVoLTE1eiIgZmlsbD0iI0ZGMDAwMCIvPgogIDwvZz4KICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SFVBV0VJPC90ZXh0PgogIDx0ZXh0IHg9IjE1MCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNsb3VkIENlcnRpZmljYXRpb248L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      id: 2,
      name: "DevOps Essentials",
      issuer: "IBM",
      date: "2025",
      description: "Comprehensive training in DevOps practices, covering continuous integration, continuous deployment, automation, and collaboration between development and operations teams.",
      credentialUrl: "https://www.credly.com/badges/29c61760-6326-47ae-87dd-d7e45c196384/public_url",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwNzNFNyIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JQk08L3RleHQ+CiAgPHRleHQgeD0iMTUwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRldk9wcyBFc3NlbnRpYWxzPC90ZXh0PgogIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0aW9uPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      id: 3,
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "2025",
      description: "Comprehensive program focused on digital transformation, leadership skills, and strategic thinking in the modern business environment.",
      credentialUrl: "https://www.credly.com/badges/489280a7-e657-40e4-9cea-3f89d96aec0e/linked_in_profile",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMzA2NiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NY0tpbnNleSAmPC90ZXh0PgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29tcGFueTwvdGV4dD4KICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rm9yd2FyZCBQcm9ncmFtPC90ZXh0PgogIDx0ZXh0IHg9IjE1MCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0aW9uPC90ZXh0Pgo8L3N2Zz4="
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
      description: "Completed training for the AWS Cloud Practitioner exam, covering core AWS services such as EC2, S3, RDS, IAM, and VPC, along with cloud security, pricing models, and best practices.",
      credentialUrl: "https://www.linkedin.com/in/fatihrehadisci/overlay/1723644311971/single-media-viewer",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
    {
      id: 6,
      name: "Cloud Technologies Workshop",
      issuer: "Tech Istanbul",
      date: "2024",
      description: "Experienced AWS IAM for identity and access management, configured EC2 instances for virtual computing, and implemented S3 storage solutions for scalable data management.",
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
      image: "https://images.credly.com/size/340x340/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png"
    }
  ];
  
  return (
    <section id={id} className="py-16 bg-white dark:bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col hover:scale-105 transition-transform">
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
                    <h3 className="text-lg font-bold dark:text-white">{cert.name}</h3>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
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