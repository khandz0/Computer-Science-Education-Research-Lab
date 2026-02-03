import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { ExternalLink, FileText, Github } from "lucide-react";
import workshopImage from "../assets/BPWorkshop/workshop.jpeg";
import cultureBilingualImage from "../assets/BPWorkshop/codeinspanish.png";
import bilingualCodingPdf from "../assets/pdf/Exploring Bilingual Coding for Inclusive.pdf";
import cultureBilingualPdf from "../assets/pdf/Exploring the Role of Culture and Bilingualism.pdf";
import k12TeacherMotivationPdf from "../assets/pdf/Exploring K–12 Teacher Motivation.pdf";
import helloWorldFeaturePdf from "../assets/pdf/HelloWorld28_Ethel.pdf";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  status: "active" | "completed";
  website?: string;
  paper?: string;
  code?: string;
  team: string[];
}

const ResearchPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Exploring Bilingual Coding for Inclusive Computer Science Learning",
      description:
        "A bilingual programming workshop study investigating how language choice shapes novice confidence, enjoyment, and perceived understanding of programming concepts.",
      category: "Bilingual Programming",
      image: workshopImage,
      status: "completed",
      website: "https://doi.org/10.1145/3770761.3777339",
      paper: bilingualCodingPdf,
      team: [
        "Ethel Tshukudu",
        "Neel Asheshbhai Shah",
        "Thien Khang Kieu",
        "Leqaa Deeb",
        "Harshitha Venkateswaran",
        "Aarav Ghai",
        "Yusuf Gadelrab",
        "Purujit Hada",
      ],
    },
    {
      id: 2,
      title: "Exploring the Role of Culture and Bilingualism",
      description:
        "An exploration of cultural context and bilingualism in computing education, highlighting how language identity influences engagement and learning experiences.",
      category: "Culture & Identity",
      image: cultureBilingualImage,
      status: "completed",
      paper: cultureBilingualPdf,
      team: ["CS Education Research Lab"],
    },
    {
      id: 3,
      title: "Exploring K–12 Teacher Motivation to Engage with AI in Education",
      description:
        "A mixed-methods study of K–12 teachers' motivation to use AI/ML, examining intrinsic drivers and infrastructural constraints in resource-limited settings.",
      category: "AI/ML Education",
      image: "",
      status: "completed",
      website: "https://doi.org/10.1145/3770762.3772632",
      paper: k12TeacherMotivationPdf,
      team: [
        "Ethel Tshukudu",
        "Katharine Childs",
        "Gaokgakala Alogeng",
        "Emma R. Dodoo",
        "Douglas R. Case",
        "Tebogo Videlmah Molebatsi",
      ],
    },
    {
      id: 4,
      title:
        "What Programming Language Transfer Teaches Us About Helping Students Transition",
      description:
        "Magazine feature highlighting Dr. Ethel Tshukudu's research on conceptual transfer, outlining how educators can support students moving from blocks to text and across programming languages.",
      category: "Conceptual Transfer",
      image: workshopImage,
      status: "completed",
      website: "https://helloworld.cc/conceptual-transfer-programming",
      paper: helloWorldFeaturePdf,
      team: ["Ethel Tshukudu"],
    },
    
  ];

  const categories = Array.from(new Set(projects.map((p) => p.category)));

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
              Our research focuses on CS education experiences that lower
              barriers for learners, with an emphasis on bilingual programming
              contexts and introductory AI/ML learning. We study how students
              build confidence, transfer knowledge, and engage with data-driven
              concepts through accessible, hands-on workshops.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                  Introductory AI/ML Learning
                </h3>
                <p className="text-gray-600">
                  Designing and evaluating beginner-friendly AI/ML workshops
                  that connect imperative programming knowledge to data-driven
                  workflows through concrete, guided activities.
                </p>
              </div>

              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                  Bilingual Programming Experiences
                </h3>
                <p className="text-gray-600">
                  Investigating how language, culture, and identity shape
                  student attitudes and experiences in bilingual coding
                  workshops.
                </p>
              </div>

              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                  Conceptual Transfer and Analogies
                </h3>
                <p className="text-gray-600">
                  Studying how analogies and explicit bridges from prior CS
                  knowledge support the transition from rule-based to
                  data-driven reasoning.
                </p>
              </div>

              <div className="bg-sjsu-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                  Broadening Participation
                </h3>
                <p className="text-gray-600">
                  Creating inclusive learning experiences that reduce barriers
                  to entry and improve confidence for diverse learners in CS.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Current and Past Projects">
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-sjsu-navy">
                Filter by category:
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-sjsu-lightgray rounded-full text-sm font-medium text-sjsu-blue cursor-pointer hover:bg-sjsu-gold hover:text-sjsu-navy transition-colors"
                >
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
                  project.status === "completed" ? "opacity-80" : ""
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
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status === "active" ? "Active" : "Completed"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-sjsu-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-sjsu-navy mb-1">
                      Research Team:
                    </h4>
                    <p className="text-sm text-gray-600">
                      {project.team.join(", ")}
                    </p>
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
