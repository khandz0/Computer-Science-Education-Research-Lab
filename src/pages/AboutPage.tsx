import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { CheckCircle } from "lucide-react";

const AboutPage: React.FC = () => {
  const researchFoci = [
    "Natural language to code translation and synthesis",
    "Intelligent programming assistants that understand both natural language and code",
    "Language-aware software development tools and environments",
    "Human-computer interaction in programming contexts",
    "Bilingual programming education and learning systems",
    "Cross-language code understanding and migration",
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
                The Bilingual Programming Research Lab (BPRL) at San José State
                University is dedicated to revolutionizing how humans interact
                with programming languages. We believe that the future of
                programming lies at the intersection of natural language and
                formal programming languages.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to develop innovative tools, techniques, and
                theories that make programming more accessible, intuitive, and
                powerful through bilingual approaches that leverage both natural
                language understanding and formal language semantics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through interdisciplinary collaboration across computer science,
                linguistics, education, and human-computer interaction, we aim
                to break down barriers between human expression and computer
                execution.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
