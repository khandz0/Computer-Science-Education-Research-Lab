import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Section from "../common/Section";
import Poster from "../../assets/SIGCSE Poster.png";
import YBHS from "../../assets/YBHS.jpg";
import AIandML from "../../assets/AI&ML/AI&ML2.jpeg";

const FeaturedResearch = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Programming across Languages",
      description:
        "Investigating the Impact of Bilingual Programming on Computing Attitudes and Behaviors",
      image: Poster,
    },
    {
      id: 2,
      title: "High School Partnerships",
      description:
        "Our team collaborates with high schools to facilitate computer science classes, empowering students with foundational programming skills and fostering interest in technology.",
      image: YBHS,
    },
    {
      id: 3,
      title: "AI & ML Workshop: Text Classifier in Education",
      description:
        "A hands-on workshop where students explore supervised learning by building a simple text classifier. " +
        "Participants train models like Naive Bayes and Logistic Regression, evaluate results, and reflect on how AI concepts connect to computer science learning. " +
        "The workshop also supports research on how students apply programming knowledge to data-driven problem solving.",
      image: AIandML,
    },
  ];

  return (
    <Section
      title="Featured Research"
      subtitle="Explore some of our current research projects and initiatives"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-sjsu-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to="/projects"
                  className="flex items-center font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark"
          >
            View All Research Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedResearch;
