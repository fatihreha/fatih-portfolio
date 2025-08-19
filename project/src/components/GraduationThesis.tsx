import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, GitBranch, Server, Zap } from 'lucide-react';

interface GraduationThesisProps {
  id?: string;
}

const GraduationThesis: React.FC<GraduationThesisProps> = ({ id }) => {
  const technologies = [
    { name: 'Kubernetes', icon: Server },
    { name: 'Docker', icon: Database },
    { name: 'GitHub Actions', icon: GitBranch },
    { name: 'Jenkins', icon: Code },
    { name: 'GitLab CI/CD', icon: Zap },
    { name: 'Helm', icon: Server }
  ];



  return (
    <section id={id || "graduation-thesis"} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Graduation Thesis</h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Enhanced Deployment Speed in Cloud-Native Applications: A Comparative Analysis of Multiple CI/CD Tools with Kubernetes
            </h3>
          </motion.div>

          {/* Project Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Project Summary</h4>
            <p className="text-gray-700 leading-relaxed">
              This Master's thesis provides a data-driven comparative analysis of three leading CI/CD tools—GitHub Actions, Jenkins, and GitLab CI/CD—in a local Kubernetes environment. The research reveals a critical trade-off between raw deployment speed and setup complexity, finding that while Jenkins was over 2x faster than GitHub Actions in complex scenarios, its setup was an order of magnitude more difficult.
            </p>
          </motion.div>

          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-4">The Challenge</h4>
            <p className="text-gray-700 leading-relaxed">
              In the modern cloud-native landscape, the ability to deploy software rapidly and reliably is paramount. While tools like Kubernetes have become the industry standard for orchestration, there is a lack of concrete performance benchmarks comparing how different CI/CD platforms interact with them. Teams often choose a tool based on popularity rather than data, leading to potential bottlenecks in their deployment pipelines. This project aimed to address this gap by measuring and analyzing the real-world performance and usability of the three most popular CI/CD tools.
            </p>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-4">My Approach & Methodology</h4>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To create a fair and consistent testbed, I established a local end-to-end DevOps environment on a Windows machine. The core of this environment was a Minikube cluster running on the Docker driver to ensure network stability.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Sample Application</h5>
                  <p className="text-sm text-gray-700">Google's Online Boutique - a realistic 11-tier polyglot microservices application</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">CI/CD Setup</h5>
                  <p className="text-sm text-gray-700">Full pipelines designed from scratch with self-hosted runners/agents for fair comparison</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Measurement</h5>
                  <p className="text-sm text-gray-700">"Commit-to-Deploy Time" across three complexity scenarios with cold builds</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Findings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-6">Key Findings & Results</h4>
            <div className="space-y-8">
              {/* Deployment Speed Measurements */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Deployment Speed Measurements</h5>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The primary metric "Commit-to-Deploy Time" was measured across three scenarios with increasing complexity. 
                  All tests used "cold builds" with Docker cache purged using <code className="bg-gray-100 px-2 py-1 rounded text-sm">docker system prune -a -f</code> 
                  to ensure fair comparison of raw build and orchestration performance.
                </p>
                
                {/* Scenario Results */}
                <div className="space-y-6">
                  {/* Scenario 1 */}
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h6 className="font-semibold text-blue-800 mb-3">Scenario 1: Baseline Deployment (Configuration Change)</h6>
                    <p className="text-gray-700 text-sm mb-4">
                      Modified products.json file in productcatalogservice - requires new container image but no code compilation.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-blue-600">87s</div>
                        <div className="text-sm text-gray-600">GitHub Actions</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">87s</div>
                        <div className="text-sm text-gray-600">Jenkins</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-orange-600">101s</div>
                        <div className="text-sm text-gray-600">GitLab CI/CD</div>
                      </div>
                    </div>
                  </div>

                  {/* Scenario 2 */}
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h6 className="font-semibold text-green-800 mb-3">Scenario 2: Single-Service Deployment (Code Compilation)</h6>
                    <p className="text-gray-700 text-sm mb-4">
                      Modified .go source file in shippingservice - evaluates CPU-bound compilation task handling.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-blue-600">85s</div>
                        <div className="text-sm text-gray-600">GitHub Actions</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">83s</div>
                        <div className="text-sm text-gray-600">Jenkins</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-orange-600">83s</div>
                        <div className="text-sm text-gray-600">GitLab CI/CD</div>
                      </div>
                    </div>
                  </div>

                  {/* Scenario 3 */}
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h6 className="font-semibold text-purple-800 mb-3">Scenario 3: Multi-Service Deployment</h6>
                    <p className="text-gray-700 text-sm mb-4">
                      Coordinated changes across productcatalogservice and frontend - simulates realistic feature development workflow.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-red-600">237s</div>
                        <div className="text-sm text-gray-600">GitHub Actions</div>
                        <div className="text-xs text-red-500">Slowest</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-green-600">105s</div>
                        <div className="text-sm text-gray-600">Jenkins</div>
                        <div className="text-xs text-green-500">Fastest</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="text-lg font-bold text-orange-600">156s</div>
                        <div className="text-sm text-gray-600">GitLab CI/CD</div>
                        <div className="text-xs text-orange-500">Moderate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparative Analysis */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Comparative Analysis</h5>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">Performance Patterns</h6>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Simple Scenarios (1 & 2):</strong> All three tools exhibited comparable performance with 
                      "Commit-to-Deploy" times in a narrow 83-101 second range, suggesting equal orchestration overhead 
                      for basic tasks in local environments.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h6 className="font-semibold text-red-800 mb-2">Critical Finding: Multi-Service Performance Gap</h6>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      In complex Scenario 3, <strong>Jenkins outperformed GitHub Actions by 2.26x</strong> (105s vs 237s). 
                      Jenkins' superior performance likely stems from efficient agent architecture and job execution model 
                      for sequential build/deploy tasks. GitHub Actions' relative slowness may be attributed to 
                      self-hosted runner overhead in handling resource-intensive sequential Docker builds.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h6 className="font-semibold text-yellow-800 mb-2">Key Insight: Performance vs. Complexity Trade-Off</h6>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Clear inverse relationship between raw performance and setup complexity. While Jenkins delivered 
                      the fastest deployment times, its configuration complexity was significantly higher than GitHub Actions, 
                      with GitLab CI/CD offering a balanced middle ground.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-6">Technology Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p><strong>Languages & Frameworks:</strong> Go, C#, Python, Node.js, Java</p>
              <p><strong>Infrastructure & Deployment:</strong> Helm, Skaffold, PowerShell, Git</p>
            </div>
          </motion.div>

          {/* Acknowledgements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg p-8"
          >
            <h4 className="text-xl font-semibold mb-6">Acknowledgements</h4>
            <div className="space-y-3 leading-relaxed">
              <p>
                I extend my deepest gratitude to my thesis advisor <strong>Prof. Dr. Aşkın Demirağ</strong> for his invaluable guidance and constructive feedback throughout this research.
              </p>
              <p>
                I thank the academic staff at <strong>Yeditepe University's Department of Information Systems and Technologies</strong> for their knowledge and support during my undergraduate education.
              </p>
              <p>
                I am grateful to my friends for their encouragement and for making this challenging journey more enjoyable through idea exchanges and moral support.
              </p>
              <p>
                Finally, I thank my beloved family for their unwavering material and emotional support throughout my academic life. This achievement belongs to them as much as it does to me.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GraduationThesis;