import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Section from '../common/Section';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Grant Awarded for Bilingual Programming Research',
      date: 'April 15, 2025',
      summary: 'Our lab has received a $1.2M grant to advance research in bilingual programming tools for the next three years.',
    },
    {
      id: 2,
      title: 'Paper Accepted at PLDI 2025',
      date: 'March 28, 2025',
      summary: 'Our paper "Bridging Natural Language and Code: Semantic Understanding in Bilingual Programming" has been accepted at PLDI 2025.',
    },
    {
      id: 3,
      title: 'Workshop on Natural Language and Programming',
      date: 'February 10, 2025',
      summary: 'Join us for a virtual workshop exploring the intersection of natural language processing and programming languages.',
    },
  ];

  return (
    <Section 
      title="Latest News" 
      subtitle="Stay updated with our recent activities and announcements"
      className="bg-sjsu-lightgray"
    >
      <Container>
        <div className="space-y-6">
          {newsItems.map((news) => (
            <div 
              key={news.id} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-sjsu-navy mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.summary}</p>
              <Link to="/news" className="text-sjsu-blue hover:text-sjsu-gold font-medium flex items-center">
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/news" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default LatestNews;