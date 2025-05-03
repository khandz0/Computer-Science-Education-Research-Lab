import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedResearch from "../components/home/FeaturedResearch";
// import LatestNews from "../components/home/LatestNews";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import { Users, Mail, Contact } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />

      <Section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-sjsu-navy mb-4">
              Welcome to the Computer Science Education Research Lab
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a collaborative group of undergraduate and graduate student
              researchers at San José State University, led by Dr. Ethel
              Tshukudu, Assistant Professor of Computer Science and Science
              Education. Our lab values curiosity, inclusion, and practical
              impact. We are dedicated to exploring the intersection of computer
              science and education, with a focus on enhancing learning
              experiences through innovative research. Our work encompasses a
              range of topics, including AI and ML, programming transfer,
              bilingual programming, and inclusive computing education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-sjsu-blue text-white mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-sjsu-navy mb-2">
                About Us
              </h3>
              <p className="text-gray-600 mb-4">
                Learn more about our mission, vision, and the research we
                conduct.
              </p>
              <Link
                to="/about"
                className="font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-sjsu-blue text-white mb-4">
                <Contact className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-sjsu-navy mb-2">
                Our Team
              </h3>
              <p className="text-gray-600 mb-4">
                Meet our diverse team of researchers, students, and
                collaborators working to advance the field.
              </p>
              <Link
                to="/people"
                className="font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors"
              >
                Meet the Team
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-sjsu-blue text-white mb-4">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-sjsu-navy mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                Get in touch with our team for inquiries, collaborations, or lab
                visits at San José State.
              </p>
              <Link
                to="/contact"
                className="font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors"
              >
                Contact the Lab
              </Link>
            </div>
            {/* <div className="text-center p-6">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-sjsu-blue text-white mb-4">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-sjsu-navy mb-2">Publication</h3>
              <p className="text-gray-600 mb-4">
                Explore our peer-reviewed research papers, conference presentations, and technical reports.
              </p>
              <Link to="/publications" className="font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors">
                Browse Publications
              </Link>
            </div> */}

            {/* <div className="text-center p-6">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-sjsu-blue text-white mb-4">
                <Newspaper className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-sjsu-navy mb-2">Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay informed about our latest research findings, events, grants, and lab announcements.
              </p>
              <Link to="/news" className="font-medium text-sjsu-blue hover:text-sjsu-gold transition-colors">
                Latest News
              </Link>
            </div> */}
          </div>
        </Container>
      </Section>

      <FeaturedResearch />
      {/* <LatestNews /> */}
    </div>
  );
};

export default HomePage;
