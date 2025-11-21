import { ChevronRight } from "lucide-react";
import Button from "../common/Button";
// import ResearchPic from "../assets/researchday/researchday.jpg";
import ResearchPic from "../../assets/researchday/researchday.JPG";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${ResearchPic})` }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-sjsu-navy bg-opacity-70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-2xl">
          <h1>
            <span className="block text-sjsu-gold text-xl font-semibold tracking-wide uppercase">
              San José State University
            </span>
            <span className="mt-1 block text-white text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              Computer Science Education Research Lab
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Exploring AI and ML, Programming Transfer, Programming
            Contextualization, Bilingual Programming, and Inclusive Computing
            Education
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              to="/about"
              variant="primary"
              className="flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              to="/projects"
              variant="outline"
              className="flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-sjsu-gold bg-sjsu-blue hover:bg-sjsu-blue-dark"
            >
              Our Research
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
