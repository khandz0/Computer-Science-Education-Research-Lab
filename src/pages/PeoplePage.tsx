import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import ThienProfile from "../assets/profiles/tkkprofile.png";
import EthelProfile from "../assets/profiles/ethel_image.jpeg";
import NeelProfile from "../assets/profiles/Neel_image.png";
import HarshithaProfile from "../assets/profiles/Harshitha.jpeg";
import NishantProfile from "../assets/profiles/Nishant_img.jpeg";
import LeqaaProfile from "../assets/profiles/leeqa_img.jpeg";
import AaravProfile from "../assets/profiles/AaravGhai.jpg";
import YusufProfile from "../assets/profiles/yusuf_img.jpeg";
import PurujitProfile from "../assets/profiles/PurujitProfile.JPG";
import ShishirProfile from "../assets/profiles/shishir.jpeg";
import DuyProfile from "../assets/profiles/duyprofile.jpg";
import AyushProfile from "../assets/profiles/ayushprofile.jpg";
import KianaProfile from "../assets/profiles/KianaProfile.jpg";

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
      bio: "Dr. Ethel Tshukudu is a passionate educator and researcher dedicated to inclusive computer science education. Her work focuses on making programming accessible through innovative, equitable learning methods.",
      image: EthelProfile,
      email: "ethel.tshukudu@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/dr-ethel-tshukudu-b9965338/",
    },
    {
      id: 3,
      name: "Thien Khang Kieu",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Thien is an undergraduate student at San José State University with a strong interest in computer science education, programming tools, and inclusive learning.",
      image: ThienProfile,
      email: "kieuth24@gmail.com",
      linkedin: "https://www.linkedin.com/in/thienkhangkieu2606/",
      github: "khandz0",
    },
    {
      id: 4,
      name: "Harshitha Venkateswaran",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Harshitha is a passionate undergraduate researcher focusing on computer science education and innovative learning methods.",
      image: HarshithaProfile,
      email: "harshitha.venkateswaran@sjsu.edu",
      linkedin:
        "https://www.linkedin.com/in/harshitha-venkateswaran-121083283/",
    },
    {
      id: 5,
      name: "Nishant Nagesh",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Nishant is a undergrad student researcher with interests in educational technology and programming language learning.",
      image: NishantProfile,
      email: "nishanth.nagesh@sjsu.edu",
      github: "nishant",
      linkedin: "https://www.linkedin.com/in/nishanth-nagesh-79753a276/",
    },
    {
      id: 6,
      name: "Leqaa Deeb",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Leqaa is an undergraduate researcher working on projects related to computer science education and learning tools.",
      image: LeqaaProfile,
      email: "leqaa.deeb@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/leqaa-deeb/",
    },
    {
      id: 8,
      name: "Yusuf Gadelrab",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Yusuf is an undergraduate researcher focused on advancing computer science education through innovative teaching methodologies and tools.",
      image: YusufProfile,
      email: "yusuf.gadelrab@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/yusuf-gadelrab-76246b221/",
    },
    {
      id: 9,
      name: "Purujit Hada",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Purujit is an undergraduate researcher with a keen interest in data science, leveraging statistical models and machine learning to uncover insights and drive impactful solutions.",
      image: PurujitProfile,
      email: "purujit.hada@sjsu.edu",
    },
    {
      id: 10,
      name: "Shishir Dongre",
      title: "Student Researcher",
      category: "masters",
      bio: "Shishir is a graduate student pursuing a Master of Science in Computer Science at San Jose State University, with a strong foundation in full-stack development, cloud architecture, and AI-driven solutions",
      image: ShishirProfile,
      email: "shishir.dongrem@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/shishirdongre/",
      github: "shishirdongre",
    },
    {
      id: 11,
      name: "Duy Do",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Duy Do is a data science student at San Jose State University whose curiosity lies in how people learn to think computationally in the age of AI. He is passionate about creating practical, evidence-based strategies that make machine learning more approachable for beginners and inspire the next generation of data scientists.",
      image: DuyProfile,
      email: "duydo1836@gmail.com",
      linkedin: "https://www.linkedin.com/in/duy-do-b80039268/",
      github: "ddo2024",
    },
    {
      id: 12,
      name: "Ayush Mahajan",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Data Science student at SJSU with software engineering internship and research experience.",
      image: AyushProfile,
      email: "ayush.mahajan@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/ayushgmahajan/",
      github: "AyushMahajan06",
    },
    {
      id: 13,
      name: "Kiana Sarkis",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Kiana is an undergraduate student at San José State University with a strong interest in data analysis, machine learning, and educational technology for inclusive learning.",
      image: KianaProfile,
      email: "ksarkis.323@gmail.com",
      linkedin: "",
    },
  ];

  const pastResearchers: Person[] = [
    {
      id: 7,
      name: "Aarav Ghai",
      title: "Student Researcher",
      category: "undergrad",
      bio: "Aarav is an undergraduate researcher with interests in computer science education and educational tools development.",
      image: AaravProfile,
      email: "aaravmanav.ghai@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/ghaiaarav/",
    },
    {
      id: 2,
      name: "Neel Shah",
      title: "Student Researcher",
      category: "masters",
      bio: "Neel is a passionate master's student with a strong interest in innovative learning methods, computer science education, programming tools, and inclusive learning environments.",
      image: NeelProfile,
      email: "neelasheshbhai.shah@sjsu.edu",
      linkedin: "https://www.linkedin.com/in/nshah1010/",
      github: "SpartaNeel1010",
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
            (person) => person.category === category.id,
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

        <Section title="Past Researchers" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastResearchers.map((person) => (
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
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Join Our Lab">
          <div className="max-w-3xl mx-auto text-center bg-sjsu-lightgray p-8 rounded-lg">
            <h3 className="text-xl font-bold text-sjsu-navy mb-4">
              Interested in Working With Us?
            </h3>
            <p className="text-gray-600 mb-6">
              We are always looking for motivated students and researchers
              interested in Computer Science Education Research. If you are
              interested in joining our lab, please contact the lab director
              with your CV and a brief statement of research interests.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark"
            >
              Contact Us About Opportunities
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default PeoplePage;
