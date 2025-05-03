import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import { FileText, ExternalLink } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  pdf?: string;
  doi?: string;
  abstract: string;
}

const PublicationsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const publications: Publication[] = [
    {
      id: 1,
      title: "BilProg: A Unified Framework for Bilingual Programming Language Understanding",
      authors: ["Maria Rodriguez", "James Chen", "Sofia Garcia"],
      venue: "Proceedings of the ACM Conference on Programming Language Design and Implementation (PLDI)",
      year: 2025,
      type: "conference",
      pdf: "https://example.com/papers/bilprog.pdf",
      doi: "10.1145/1234567.1234568",
      abstract: "This paper introduces BilProg, a framework for understanding and generating code that combines natural language processing with program analysis techniques. We demonstrate significant improvements over previous approaches on benchmark tasks including code generation, summarization, and documentation generation."
    },
    {
      id: 2,
      title: "Natural Language Guided Program Repair for Novice Programmers",
      authors: ["Aisha Patel", "Michael Johnson", "Lin Zhang"],
      venue: "ACM Transactions on Programming Languages and Systems",
      year: 2025,
      type: "journal",
      pdf: "https://example.com/papers/nl-repair.pdf",
      doi: "10.1145/2345678.2345679",
      abstract: "We present a system that uses natural language error descriptions to guide automated program repair, specifically designed for novice programmers. Our approach combines static analysis with natural language understanding to interpret error messages and student descriptions of intended behavior."
    },
    {
      id: 3,
      title: "CodeSwitch: Analyzing Patterns of Language Alternation in Programming Contexts",
      authors: ["Michael Johnson", "Aisha Patel", "David Kim"],
      venue: "International Conference on Software Engineering (ICSE)",
      year: 2025,
      type: "conference",
      pdf: "https://example.com/papers/codeswitch.pdf",
      doi: "10.1109/ICSE.2025.123456",
      abstract: "This paper presents a large-scale empirical study of how developers switch between natural language and programming language in code repositories. We identify common patterns and propose guidelines for tool designers to better support these language alternation behaviors."
    },
    {
      id: 4,
      title: "LangBridge: Natural Language as an Intermediate Representation for Cross-Language Program Translation",
      authors: ["Elena Volkov", "Maria Rodriguez"],
      venue: "Workshop on Programming Language Design and Implementation (PLDI Workshop)",
      year: 2024,
      type: "workshop",
      pdf: "https://example.com/papers/langbridge.pdf",
      abstract: "We explore the use of natural language as an intermediate representation for translating programs between different programming languages. Our approach captures semantic meaning independent of language-specific syntax, enabling more accurate translations than direct syntax mapping."
    },
    {
      id: 5,
      title: "BIDE: A Bilingual Integrated Development Environment",
      authors: ["James Chen", "David Kim", "Sofia Garcia"],
      venue: "ACM Symposium on User Interface Software and Technology (UIST)",
      year: 2024,
      type: "conference",
      pdf: "https://example.com/papers/bide.pdf",
      doi: "10.1145/3456789.3456790",
      abstract: "We present BIDE, a novel IDE that integrates natural language understanding deeply into the programming workflow. BIDE features intelligent code completion based on both code context and natural language comments, natural language querying of codebases, and automatic documentation generation."
    },
    {
      id: 6,
      title: "Evaluating the Impact of Bilingual Programming Tools on Novice Programmer Learning Outcomes",
      authors: ["Aisha Patel", "Lin Zhang"],
      venue: "ACM Conference on Computer Science Education (SIGCSE)",
      year: 2024,
      type: "conference",
      pdf: "https://example.com/papers/novice-learning.pdf",
      doi: "10.1145/4567890.4567891",
      abstract: "This paper presents the results of a controlled study examining how bilingual programming tools affect learning outcomes for novice programmers. We compare traditional programming environments with our prototype bilingual environment across multiple dimensions of learning and skill acquisition."
    },
    {
      id: 7,
      title: "NL2Code: Robust Code Generation from Natural Language Specifications",
      authors: ["Maria Rodriguez", "Lin Zhang", "Sofia Garcia"],
      venue: "arXiv preprint",
      year: 2023,
      type: "preprint",
      pdf: "https://example.com/papers/nl2code-preprint.pdf",
      abstract: "We propose NL2Code, a neural approach for generating executable code from natural language descriptions. Our model incorporates program synthesis techniques with large language models to ensure both syntactic correctness and semantic alignment with specifications."
    }
  ];
  
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  const types = Array.from(new Set(publications.map(p => p.type)));
  
  const filteredPublications = publications.filter(pub => {
    if (selectedYear !== null && pub.year !== selectedYear) return false;
    if (selectedType !== null && pub.type !== selectedType) return false;
    return true;
  }).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  
  const handleYearClick = (year: number) => {
    setSelectedYear(selectedYear === year ? null : year);
  };
  
  const handleTypeClick = (type: string) => {
    setSelectedType(selectedType === type ? null : type);
  };
  
  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Publications" 
        subtitle="Our research contributions to the scientific community"
      />
      
      <Container className="py-12">
        <Section>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-semibold text-sjsu-navy">Filter by year:</span>
            {years.map(year => (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === year 
                    ? 'bg-sjsu-blue text-white' 
                    : 'bg-sjsu-lightgray text-sjsu-navy hover:bg-sjsu-gold hover:text-sjsu-navy'
                }`}
              >
                {year}
              </button>
            ))}
            {selectedYear !== null && (
              <button 
                onClick={() => setSelectedYear(null)}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-semibold text-sjsu-navy">Filter by type:</span>
            {types.map(type => (
              <button
                key={type}
                onClick={() => handleTypeClick(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type 
                    ? 'bg-sjsu-blue text-white' 
                    : 'bg-sjsu-lightgray text-sjsu-navy hover:bg-sjsu-gold hover:text-sjsu-navy'
                }`}
              >
                {formatType(type)}
              </button>
            ))}
            {selectedType !== null && (
              <button 
                onClick={() => setSelectedType(null)}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          
          <div className="space-y-8">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-sjsu-navy mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-1 italic">{pub.authors.join(', ')}</p>
                <p className="text-sjsu-blue mb-3">{pub.venue} ({pub.year})</p>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-sjsu-lightgray rounded-full text-xs font-medium text-sjsu-blue">
                    {formatType(pub.type)}
                  </span>
                </div>
                
                <div className="mt-2 mb-4">
                  <p className="text-gray-600 text-sm">{pub.abstract}</p>
                </div>
                
                <div className="flex space-x-4">
                  {pub.pdf && (
                    <a 
                      href={pub.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-sjsu-blue hover:text-sjsu-gold transition-colors"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      PDF
                    </a>
                  )}
                  {pub.doi && (
                    <a 
                      href={`https://doi.org/${pub.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-sjsu-blue hover:text-sjsu-gold transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No publications match the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedYear(null);
                  setSelectedType(null);
                }}
                className="mt-4 px-4 py-2 bg-sjsu-blue text-white rounded-md hover:bg-sjsu-blue-dark transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </Section>
      </Container>
    </div>
  );
};

export default PublicationsPage;