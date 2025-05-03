import { Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sjsu-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sjsu-gold font-semibold text-lg mb-4">
              Computer Science Education Research Lab
            </h3>
            <p className="text-sjsu-lightgray text-sm mb-4">
              Advancing computer science education through innovative research
              and evidence-based practices.
            </p>
            <p className="text-sm text-sjsu-lightgray">
              &copy; {currentYear} CSERL. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-sjsu-gold font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-sjsu-gold" />
                <a
                  href="mailto:contact@cserl.edu"
                  className="hover:text-sjsu-gold transition-colors"
                >
                  research.team@organization.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-sjsu-gold" />
                <span>
                  <br />
                  San José State University
                  <br />
                  San José, CA 95192
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sjsu-gold font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/people"
                  className="hover:text-sjsu-gold transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="hover:text-sjsu-gold transition-colors"
                >
                  Research Projects
                </Link>
              </li>
              {/* <li>
                <Link to="/publications" className="hover:text-sjsu-gold transition-colors">Publications</Link>
              </li> */}
              {/* <li className="flex items-center">
                <Github size={16} className="mr-2" />
                <a 
                  href="https://github.com/cserl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sjsu-gold transition-colors"
                >
                  GitHub
                </a>
              </li> */}
              <li className="flex items-center">
                <ExternalLink size={16} className="mr-2" />
                <a
                  href="https://www.sjsu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sjsu-gold transition-colors"
                >
                  SJSU Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
