import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="relative bg-sjsu-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1>
                    <span className="block text-sjsu-gold text-xl font-semibold tracking-wide uppercase">
                      San José State University
                    </span>
                    <span className="mt-1 block text-white text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                      Bilingual Programming Research Lab
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Exploring the intersection of natural language and programming languages to create more intuitive, accessible, and powerful software development tools.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Button 
                          to="/about"
                          variant="primary"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sjsu-blue hover:bg-sjsu-blue-dark md:py-4 md:text-lg md:px-10"
                        >
                          Learn More
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Button 
                          to="/research"
                          variant="outline"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-sjsu-gold text-sjsu-gold bg-transparent hover:bg-sjsu-navy md:py-4 md:text-lg md:px-10"
                        >
                          Our Research
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Programming environment"
        />
      </div>
    </div>
  );
};

export default HeroSection;