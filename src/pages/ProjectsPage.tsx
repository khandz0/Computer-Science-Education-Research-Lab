import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import { NavLink } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Projects" 
        subtitle="Exploring innovative approaches in computer science education"
      />
      
      <Container className="py-12">
        <Section title="Current Projects">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h3 className="text-xl font-bold text-sjsu-navy mb-4">Bilingual Programming and Tools</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sjsu-blue">
                  <p className="text-gray-600 mb-2">
                    A study examining how bilingual instruction affects non-CS and CS learners' confidence and attitudes.
                  </p>
                  <NavLink 
                    to="/bilingual-workshop" 
                    className="text-sjsu-blue hover:text-sjsu-gold font-medium flex items-center"
                  >
                    <span>View Workshop Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sjsu-blue">
                  <p className="text-gray-600">
                    AI/ML Bilingual Code Assistant that accepts a code snippet (e.g., Python or Java) 
                    and translates comments, variable names, and explanations into a target
                    natural language (e.g., English ↔ Spanish)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-sjsu-navy mb-4">Programming Transfer Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-sjsu-blue mb-2">Java to AI Transfer Tutor</h4>
                  <p className="text-gray-600 text-sm">
                    A tool helping students transition from Java programming to AI/ML concepts using contextualized examples.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-sjsu-blue mb-2">Scratch to Python Transfer Tutor</h4>
                  <p className="text-gray-600 text-sm">
                    A tool helping students transition from Scratch programming to Java concepts using contextualized examples.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-sjsu-blue mb-2">Python to Java Transfer Tutor</h4>
                  <p className="text-gray-600 text-sm">
                    A tool helping students transition from Python programming to Java concepts using contextualized examples.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-sjsu-navy mb-4">AI in Education</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sjsu-gold">
                  <h4 className="font-bold text-sjsu-navy mb-2">AI for All Programming Workshop</h4>
                  <p className="text-gray-600">
                    Teaching AI and ML to non-CS majors which includes training data and coding. 
                    Designed specifically for students without prior computer science background.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sjsu-gold">
                  <h4 className="font-bold text-sjsu-navy mb-2">Generative AI in CS Education</h4>
                  <p className="text-gray-600">
                    Investigating how generative AI (like ChatGPT) can support or hinder learning in
                    introductory programming classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ProjectsPage; 