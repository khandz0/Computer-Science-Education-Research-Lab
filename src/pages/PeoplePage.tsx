import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import ThienProfile from "../assets/profiles/tkkprofile.png";

interface Person {
  id: number;
  name: string;
  title: string;
  category: "faculty" | "masters" | "undergrad";
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

const PeoplePage: React.FC = () => {
  const people: Person[] = [
    {
      id: 1,
      name: "Dr. Ethel Tshukudu",
      title: "Head Professor",
      category: "faculty",
      bio: "Dr. Rodriguez specializes in natural language processing and programming language design. She leads the lab's research on bilingual programming environments.",
      image: "",
      email: "ethel.tshukudu@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/dr-ethel-tshukudu-b9965338/",
    },
    {
      id: 2,
      name: "Neel Shah",
      title: "Student Researcher",
      category: "masters",
      bio: "Dr. Chen's research focuses on human-computer interaction and code comprehension. He leads projects on visual programming languages and code visualization.",
      image:
        "https://images.pexels.com/photos/5684734/pexels-photo-5684734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      email: "james.chen@example.edu",
      linkedin: "https://www.linkedin.com/in/nshah1010/",
      twitter: "jameschen_hci",
    },
    {
      id: 3,
      name: "Thien Khang Kieu",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Dr. Patel specializes in educational technology and novice programmer support systems. She studies how bilingual programming tools can improve learning outcomes.",
      image: ThienProfile,
      email: "thienkhang.kieu@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/thienkhangkieu2606/",
      github: "khandz0",
    },
  ];

  const categories = [
    { id: "faculty", label: "Faculty" },
    { id: "masters", label: "Masters Students" },
    { id: "undergrad", label: "Undergraduate Students" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Team"
        subtitle="Meet the researchers, faculty, and students behind our work"
      />

      <Container className="py-12">
        {categories.map((category) => {
          const categoryPeople = people.filter(
            (person) => person.category === category.id
          );

          if (categoryPeople.length === 0) return null;

          return (
            <Section key={category.id} title={category.label} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPeople.map((person) => (
                  <div
                    key={person.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="object-cover w-full h-60"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-sjsu-navy">
                        {person.name}
                      </h3>
                      <p className="text-sjsu-blue font-medium mb-3">
                        {person.title}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm">{person.bio}</p>

                      <div className="flex space-x-3 mt-4">
                        {person.email && (
                          <a
                            href={`mailto:${person.email}`}
                            className="text-gray-500 hover:text-sjsu-blue transition-colors"
                            aria-label={`Email ${person.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                        )}
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-sjsu-blue transition-colors"
                            aria-label={`Visit ${person.name}'s linkedin`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {person.github && (
                          <a
                            href={`https://github.com/${person.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-sjsu-blue transition-colors"
                            aria-label={`Visit ${person.name}'s GitHub`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {person.twitter && (
                          <a
                            href={`https://twitter.com/${person.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-sjsu-blue transition-colors"
                            aria-label={`Visit ${person.name}'s Twitter`}
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          );
        })}

        <Section title="Join Our Lab">
          <div className="max-w-3xl mx-auto text-center bg-sjsu-lightgray p-8 rounded-lg">
            <h3 className="text-xl font-bold text-sjsu-navy mb-4">
              Interested in Working With Us?
            </h3>
            <p className="text-gray-600 mb-6">
              We are always looking for motivated students and researchers
              interested in bilingual programming, natural language processing,
              and human-computer interaction. If you are interested in joining
              our lab, please contact the lab director with your CV and a brief
              statement of research interests.
            </p>
            <a
              href="mailto:contact@bprl.edu"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark"
            >
              Contact Us About Opportunities
            </a>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default PeoplePage;
