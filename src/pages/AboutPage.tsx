import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { CheckCircle } from "lucide-react";
import Meeting from "../assets/AIMLWorkshop/meeting/11-21-meeting.jpg";
import Meeting1 from "../assets/AIMLWorkshop/meeting/11-21-meeting1.jpg";

const AboutPage: React.FC = () => {
  const researchFoci = [
    "Bilingual programming and its impact on learner confidence and attitudes",
    "AI/ML tools for multilingual code assistance and education",
    "Designing transfer tutors to help students transition across programming languages (e.g., Scratch to Python, Python to Java)",
    "Exploring programming knowledge transfer across languages and contexts",
    "Investigating the role of generative AI (e.g., ChatGPT) in programming education",
    "Developing inclusive computing education experiences for diverse learners",
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="About Our Research Lab"
        subtitle="Bridging human expression and computer execution through natural and programming languages."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-sjsu-navy mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Computer Science Education Research Lab at San José State
                University investigates how students learn to transfer
                programming knowledge across languages and contexts. We aim to
                design tools, learning experiences, and empirical studies that
                promote inclusive and effective computing education.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our work focuses on programming contextualization, bilingual
                programming, and the integration of AI/ML in computing
                education. We strive to support diverse learners by making
                programming more accessible and meaningful through
                language-aware technologies and culturally responsive
                instruction.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Led by a collaborative team of students and faculty, we are
                committed to research that values curiosity, inclusion, and
                real-world impact.
              </p>
              <img
                src={Meeting}
                alt="Research team workshop"
                className="rounded-lg shadow-md w-full h-auto object-cover mb-6"
              />
            </div>

            <div>
              <img
                src={Meeting1}
                alt="Research team collaborating"
                className="rounded-lg shadow-md w-full h-auto object-cover mb-6"
              />

              <h2 className="text-2xl font-bold text-sjsu-navy mb-4">
                Research Focus Areas
              </h2>
              <ul className="space-y-3">
                {researchFoci.map((focus, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sjsu-gold mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/*<Section className="bg-sjsu-lightgray">
        <Container>
          <h2 className="text-2xl font-bold text-sjsu-navy mb-6 text-center">
            Our History
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-sjsu-blue mb-2">
                  2023: Foundation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Bilingual Programming Research Lab was established in 2023
                  through a founding grant from the National Science Foundation.
                  Our initial team of three faculty members and five graduate
                  students began exploring fundamental questions at the
                  intersection of natural language processing and programming
                  languages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sjsu-blue mb-2">
                  2024: Growth and Partnerships
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The lab expanded to include collaborations with industry
                  partners and researchers from linguistics and cognitive
                  science. Our first major research project on "Natural Language
                  Code Synthesis for Novice Programmers" received recognition at
                  international conferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sjsu-blue mb-2">
                  2025: Current Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, our lab has grown to include 15 researchers across
                  multiple disciplines. We are currently focused on developing
                  next-generation programming environments that seamlessly
                  integrate natural language understanding with traditional
                  programming paradigms, while continuing to explore fundamental
                  theories of bilingual programming.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>*/}
    </div>
  );
};

export default AboutPage;
