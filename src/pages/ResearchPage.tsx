import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import { ExternalLink, FileText, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'active' | 'completed';
  website?: string;
  paper?: string;
  code?: string;
  team: string[];
}

const ResearchPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "NL2Code: Natural Language to Code Generation",
      description: "This project explores advanced techniques for generating executable code from natural language descriptions. We're developing neural architectures that can understand programming context, maintain consistency across generated functions, and ensure correctness through static analysis integration.",
      category: "Code Generation",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "active",
      paper: "https://example.com/papers/nl2code.pdf",
      code: "https://github.com/bprl/nl2code",
      team: ["Dr. Maria Rodriguez", "Dr. Lin Zhang", "Sofia Garcia"]
    },
    {
      id: 2,
      title: "BilDoc: Bilingual Documentation Generation",
      description: "BilDoc aims to automatically generate high-quality documentation for code by understanding both the code semantics and the natural language context. Our approach uses a bidirectional translation model that can generate documentation from code and predict code structure from documentation.",
      category: "Documentation",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "active",
      website: "https://example.com/bildoc",
      team: ["Dr. James Chen", "Michael Johnson", "Elena Volkov"]
    },
    {
      id: 3,
      title: "CodeSwitch: Understanding Bilingual Programming Patterns",
      description: "This research analyzes how developers naturally switch between natural language and programming language in their workflow. Through large-scale corpus analysis of code repositories, comments, and documentation, we're identifying patterns that can inform the design of more intuitive programming tools.",
      category: "Programming Behavior",
      image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "active",
      paper: "https://example.com/papers/codeswitch.pdf",
      team: ["Dr. Aisha Patel", "Michael Johnson", "David Kim"]
    },
    {
      id: 4,
      title: "LangBridge: Cross-Language Program Migration",
      description: "LangBridge develops techniques for translating code between programming languages while preserving semantics and idiomaticity. Our approach uses natural language as an intermediate representation, enabling more accurate translations than direct syntax mapping.",
      category: "Code Translation",
      image: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "active",
      team: ["Dr. Maria Rodriguez", "Elena Volkov"]
    },
    {
      id: 5,
      title: "BIDE: Bilingual Integrated Development Environment",
      description: "BIDE is a prototype IDE that integrates natural language understanding deeply into the programming workflow. It features intelligent code completion, natural language query capabilities, and automatic documentation generation based on code-language understanding.",
      category: "Development Tools",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "active",
      website: "https://example.com/bide",
      code: "https://github.com/bprl/bide",
      team: ["Dr. James Chen", "David Kim", "Sofia Garcia"]
    },
    {
      id: 6,
      title: "NL-Test: Generating Test Cases from Natural Language",
      description: "This completed project explored techniques for automatically generating test cases from natural language specifications. We developed a system that can create comprehensive test suites that verify both functional correctness and edge cases based on requirements described in natural language.",
      category: "Testing",
      image: "https://images.pexels.com/photos/7988133/pexels-photo-7988133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "completed",
      paper: "https://example.com/papers/nl-test.pdf",
      code: "https://github.com/bprl/nl-test",
      team: ["Dr. Aisha Patel", "Dr. Lin Zhang"]
    }
  ];

  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Research" 
        subtitle="Exploring the intersection of natural language and programming languages"
      />
      
      <Container className="py-12">
        <Section title="Research Areas" className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our lab focuses on the frontier where natural language meets programming languages. 
              We believe that the next generation of programming tools will leverage the strengths 
              of both linguistic systems, making software development more intuitive, accessible, 
              and powerful.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">Code Generation and Synthesis</h3>
                <p className="text-gray-600">
                  Research on techniques for automatically generating code from natural language specifications, 
                  ranging from simple code snippets to complex program structures.
                </p>
              </div>
              
              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">Documentation and Explanation</h3>
                <p className="text-gray-600">
                  Developing methods for automatically generating natural language explanations of code and 
                  improving the quality and maintainability of technical documentation.
                </p>
              </div>
              
              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">Intelligent Programming Environments</h3>
                <p className="text-gray-600">
                  Building next-generation IDEs and tools that deeply integrate natural language understanding 
                  with traditional programming interfaces.
                </p>
              </div>
              
              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">Programming Education</h3>
                <p className="text-gray-600">
                  Exploring how bilingual programming approaches can improve learning outcomes for novice 
                  programmers and make coding more accessible to diverse populations.
                </p>
              </div>
            </div>
          </div>
        </Section>
        
        <Section title="Current and Past Projects">
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-sjsu-navy">Filter by category:</span>
              {categories.map(category => (
                <span key={category} className="px-3 py-1 bg-sjsu-lightgray rounded-full text-sm font-medium text-sjsu-blue cursor-pointer hover:bg-sjsu-gold hover:text-sjsu-navy transition-colors">
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${
                  project.status === 'completed' ? 'opacity-80' : ''
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-sjsu-lightgray rounded-full text-xs font-medium text-sjsu-blue">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status === 'active' ? 'Active' : 'Completed'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-sjsu-navy mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-sjsu-navy mb-1">Research Team:</h4>
                    <p className="text-sm text-gray-600">{project.team.join(', ')}</p>
                  </div>
                  
                  <div className="flex space-x-4 mt-4">
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-sjsu-blue hover:text-sjsu-gold transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    )}
                    {project.paper && (
                      <a 
                        href={project.paper} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-sjsu-blue hover:text-sjsu-gold transition-colors"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Paper
                      </a>
                    )}
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-sjsu-blue hover:text-sjsu-gold transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ResearchPage;