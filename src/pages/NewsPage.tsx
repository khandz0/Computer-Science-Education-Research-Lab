import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import { Calendar, Tag, Search } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  image?: string;
}

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Grant Awarded for Bilingual Programming Research",
      date: "April 15, 2025",
      category: "Funding",
      content: "We are excited to announce that our lab has received a $1.2M grant from the National Science Foundation to advance research in bilingual programming tools over the next three years. This funding will support our work on natural language to code generation, intelligent programming assistants, and empirical studies of programmer behavior.\n\nThe grant, titled \"Bridging Natural Language and Programming Languages for Next-Generation Development Tools,\" will fund two new PhD student positions and provide resources for user studies and experimental evaluations of our prototype systems.\n\nDr. Maria Rodriguez, the Principal Investigator on the grant, noted that \"this funding will accelerate our efforts to make programming more accessible and intuitive through deep integration of natural language understanding with traditional programming paradigms.\"",
      image: "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Paper Accepted at PLDI 2025",
      date: "March 28, 2025",
      category: "Publication",
      content: "We are pleased to announce that our paper \"Bridging Natural Language and Code: Semantic Understanding in Bilingual Programming\" has been accepted at the 2025 ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI).\n\nThis paper, authored by Dr. Maria Rodriguez, Dr. James Chen, and PhD student Sofia Garcia, presents a novel approach to understanding the semantic relationships between natural language descriptions and code implementations. The work introduces a new benchmark for evaluating semantic alignment between different linguistic forms of program representation and demonstrates performance improvements on downstream tasks including code generation and documentation.\n\nPLDI is a premier forum for programming language research, covering design, implementation, theory, and efficient use of programming languages. The conference will be held in Tokyo, Japan in June 2025.",
      image: "https://images.pexels.com/photos/6667726/pexels-photo-6667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Workshop on Natural Language and Programming",
      date: "February 10, 2025",
      category: "Event",
      content: "The BPRL will host a virtual workshop on \"Natural Language in Programming Environments\" on March 15, 2025. This half-day event will bring together researchers and practitioners working at the intersection of natural language processing and software development.\n\nFeatured speakers include:\n- Dr. Emily Johnson (Stanford University): \"Large Language Models as Programming Assistants\"\n- Dr. Carlos Mendez (Google Research): \"Learning Code Semantics from Natural Language\"\n- Dr. Maria Rodriguez (SJSU): \"The Future of Bilingual Programming Environments\"\n\nThe workshop will also include a panel discussion on educational applications of bilingual programming tools and a demonstration session where participants can share their latest prototypes and systems.\n\nRegistration is free but required. Please visit our website for more details and to reserve your spot.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "New PhD Students Join the Lab",
      date: "January 20, 2025",
      category: "Team",
      content: "We are delighted to welcome two new PhD students to the Bilingual Programming Research Lab this semester:\n\nRobert Chen joins us with a background in natural language processing and machine learning. His research will focus on developing more accurate code generation systems that can maintain consistency across multiple functions and files.\n\nAlexa Patel comes to us after completing her Master's in Human-Computer Interaction at Carnegie Mellon University. Her dissertation research will explore how bilingual programming tools can be designed to support programmers with different levels of expertise, from novices to experts.\n\nBoth students will be working on projects funded by our recent NSF grant and will collaborate with faculty and other lab members on developing and evaluating next-generation programming tools."
    },
    {
      id: 5,
      title: "BIDE Beta Release Now Available",
      date: "December 5, 2024",
      category: "Software",
      content: "We're excited to announce the beta release of BIDE (Bilingual Integrated Development Environment), a prototype IDE that deeply integrates natural language understanding into the programming workflow.\n\nKey features of this release include:\n- Intelligent code completion that considers both code context and natural language comments\n- Natural language querying of codebases (\"Where is the user authentication handled?\")\n- Automatic documentation generation from code\n- Explanation generation for complex code segments\n\nBIDE is available as a VSCode extension and supports JavaScript, Python, and Java. We welcome feedback from early users to help us refine the system before our full release.\n\nVisit our GitHub repository to download the extension and report issues or suggestions.",
      image: "https://images.pexels.com/photos/247791/pexels-photo-247791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Collaboration with Industry Partners",
      date: "November 10, 2024",
      category: "Partnership",
      content: "The BPRL is excited to announce new research collaborations with two industry partners: TechCorp and CodeAssist AI.\n\nThrough these partnerships, we will work to transition our research prototypes into practical tools that can benefit real-world software developers. TechCorp will provide access to their development teams for user studies and feedback on our bilingual programming tools. CodeAssist AI will collaborate with us on scaling our natural language to code generation techniques to handle larger and more complex programming tasks.\n\n\"These industry partnerships provide crucial real-world contexts to evaluate and refine our research,\" said Dr. James Chen, who will lead the collaborative projects. \"By working directly with professional developers, we can ensure our tools address genuine needs and integrate smoothly into existing workflows.\"\n\nThe initial phase of collaboration will begin in January 2025 and is expected to continue for at least two years."
    }
  ];
  
  const categories = Array.from(new Set(newsItems.map(item => item.category)));
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const filteredNews = newsItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === null || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="News & Updates" 
        subtitle="Stay informed about our latest research, events, and announcements"
      />
      
      <Container className="py-12">
        <Section>
          <div className="mb-8">
            <div className="max-w-xl mx-auto mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sjsu-blue focus:border-sjsu-blue"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span className="font-semibold text-sjsu-navy">Filter by category:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-sjsu-blue text-white' 
                      : 'bg-sjsu-lightgray text-sjsu-navy hover:bg-sjsu-gold hover:text-sjsu-navy'
                  }`}
                >
                  {category}
                </button>
              ))}
              {selectedCategory !== null && (
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Tag className="h-4 w-4 mr-1" />
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-sjsu-navy mb-4">{item.title}</h3>
                  
                  <div className="prose text-gray-600 max-w-none">
                    {item.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No news items match your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4 px-4 py-2 bg-sjsu-blue text-white rounded-md hover:bg-sjsu-blue-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default NewsPage;