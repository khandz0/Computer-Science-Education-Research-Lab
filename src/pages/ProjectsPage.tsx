import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import workshop2 from "../assets/BPWorkshop/workshop2.jpeg";
import poster2 from "../assets/posters/SIGCSE Poster.png";
import workshop from "../assets/BPWorkshop/workshop.jpeg";
import poster1 from "../assets/researchday/poster.JPG";
import codeinmandarin from "../assets/BPWorkshop/codeinmandarin.png";
import codeinspanish from "../assets/BPWorkshop/codeinspanish.png";
// Meeting preparation images
import prep1 from "../assets/AIMLWorkshop/meeting/11-7-meeting.jpeg";
import prep2 from "../assets/AIMLWorkshop/meeting/11-7-meeting1.jpeg";
import prep3 from "../assets/AIMLWorkshop/meeting/11-7-meeting2.jpeg";
import prep4 from "../assets/AIMLWorkshop/meeting/11-7-meeting3.jpg";
import prep5 from "../assets/AIMLWorkshop/meeting/11-7-meeting4.jpg";
import prep6 from "../assets/AIMLWorkshop/meeting/11-21-meeting.jpg";
import prep7 from "../assets/AIMLWorkshop/meeting/11-21-meeting1.jpg";
// Workshop day images
import workshopDay1 from "../assets/AIMLWorkshop/workshopday/AI&MLworkshop.jpeg";
import workshopDay2 from "../assets/AIMLWorkshop/workshopday/AI&MLworkshop1.jpeg";
import workshopDay3 from "../assets/AIMLWorkshop/workshopday/AI&MLworkshop2.jpeg";
import workshopDay4 from "../assets/AIMLWorkshop/workshopday/AI&MLworkshop3.jpeg";
import workshopDay5 from "../assets/AIMLWorkshop/workshopday/AI&MLworkshop4.png";
// Poster
import poster from "../assets/AIMLWorkshop/poster.jpg";
import ColabReveal from "../assets/pdf/Colab_Reveal.pdf";

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Projects" subtitle="" />

      <Container className="py-12">
        <Section title="Conceptual Transfer: AI and ML Workshop">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-sjsu-lightgray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Workshop Overview
              </h3>
              <p className="text-gray-600 mb-4">
                This hands-on workshop introduces students to fundamental
                concepts in artificial intelligence and machine learning through
                an accessible, beginner-friendly activity. Participants explore
                the end-to-end process of working with data, training simple
                models, evaluating results, and reflecting on outcomes. The
                workshop emphasizes computational thinking, active exploration,
                and student-centered learning in a supportive environment.
              </p>
              <p className="text-gray-600 mb-4">
                Typical completion time:{" "}
                <span className="font-medium">2–3 hours</span>.
              </p>
              <h4 className="text-lg font-bold text-sjsu-navy mb-2 mt-4">
                Educational Purpose
              </h4>
              <p className="text-gray-600">
                This workshop supports our lab's mission of making AI and
                machine learning more approachable for diverse learners. By
                engaging students in interactive, inquiry-based activities, we
                aim to deepen understanding of core ideas in data-driven
                problem-solving and empower students to explore emerging
                technologies with confidence.
              </p>
            </div>

            {/* Learning goals + audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-sjsu-navy mb-2">
                  Who It’s For
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>
                    Students who have completed{" "}
                    <strong>CS 46A - Introduction to Programming</strong> at
                    SJSU
                  </li>
                  <li>
                    Students new to artificial intelligence and data-driven
                    programming
                  </li>
                  <li>
                    Participants interested in the methodology behind real-world
                    AI systems
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-sjsu-navy mb-2">
                  Learning Outcomes
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>
                    Explain how supervised learning uses labeled examples to
                    “teach” a model
                  </li>
                  <li>
                    Clean and inspect a dataset of Yelp reviews for balanced
                    class distribution
                  </li>
                  <li>
                    Train and evaluate baseline classifiers using machine
                    learning algorithms
                  </li>
                  <li>
                    Understand the relationship between rule-based and
                    data-driven programming approaches
                  </li>
                  <li>
                    Interpret performance metrics (accuracy, precision, recall)
                    and confusion matrices
                  </li>
                  <li>
                    Reflect on misclassifications and test models with custom
                    review samples
                  </li>
                </ul>
              </div>
            </div>

            {/* What students do */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-sjsu-navy py-2 px-4">
                <h4 className="text-white font-medium text-center">
                  Workshop Flow
                </h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Participants engage in a structured learning experience that
                  guides them through the machine learning workflow:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>
                    Set up the development environment and import necessary
                    libraries
                  </li>
                  <li>Load and explore the Yelp review dataset</li>
                  <li>Preprocess and clean the data for model training</li>
                  <li>Split the data into training and testing sets</li>
                  <li>Train machine learning models to classify reviews</li>
                  <li>Evaluate model performance using various metrics</li>
                  <li>
                    Analyze results and reflect on model behavior and
                    limitations
                  </li>
                  <li>
                    Test the model with custom examples and explore extensions
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  The workshop follows an interactive{" "}
                  <strong>predict → run → reflect</strong> cycle, encouraging
                  students to make predictions about outcomes before running
                  code, observe results, and reflect on their understanding of
                  the underlying concepts.
                </p>
              </div>
            </div>

            {/* Workshop Links Section */}
            <div
              id="workshop-materials"
              className="bg-sjsu-lightgray rounded-lg p-6 mb-8 mt-8"
            >
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Workshop Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <a
                    href="https://colab.research.google.com/drive/1mDShSP3qvVm8Zm1KbFy4GbJrx_xCI1Fx?usp=sharing"
                    className="text-sjsu-blue hover:text-sjsu-navy hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colab Notebook
                  </a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <a
                    href="https://forms.gle/3Rr1rnpzLXCJsPVn9"
                    className="text-sjsu-blue hover:text-sjsu-navy hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guess Quiz
                  </a>
                </div> */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <a
                    href="/workshop-dataset.csv"
                    className="text-sjsu-blue hover:text-sjsu-navy hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Dataset
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <a
                    href={ColabReveal}
                    className="text-sjsu-blue hover:text-sjsu-navy hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colab Notebook Reveal
                  </a>
                </div>
              </div>
            </div>

            {/* Workshop Picture Collage */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-sjsu-navy py-2 px-4">
                <h3 className="text-white font-medium text-center text-xl">
                  Workshop Gallery
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Photos from our workshop preparation and sessions
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {/* Meeting preparation images */}
                  <img
                    src={prep1}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep2}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep3}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep4}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep5}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep6}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={prep7}
                    alt="Workshop preparation meeting"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  {/* Poster */}
                  <img
                    src={poster}
                    alt="AI/ML Workshop poster"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  {/* Workshop day images */}
                  <img
                    src={workshopDay1}
                    alt="AI/ML Workshop session"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={workshopDay2}
                    alt="AI/ML Workshop session"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={workshopDay3}
                    alt="AI/ML Workshop session"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={workshopDay4}
                    alt="AI/ML Workshop session"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img
                    src={workshopDay5}
                    alt="AI/ML Workshop session"
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Programming across Languages: Investigating the Impact of Bilingual Programming on Computing Attitudes and Behavior"
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              {/* <p className="text-center text-gray-700 mb-2">
                <span className="font-medium">Neel Shah, Thien Kieu, Leqaa Deeb, Harshitha Venkateswaran, Aarav Ghai, Yusuf Gadelrab, Nishanth Nagesh, Purujit Hada, Ethel Tshukudu</span>
              </p>
              <p className="text-center text-gray-600 mb-4">
                Department of Computer Science, San José State University, San Jose, CA
              </p> */}
              <p className="text-center italic text-gray-700 mb-8">
                <span className="font-medium">Research Objective:</span> To
                examine the effects of bilingual programming on university
                students' computing attitudes and programming behaviors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img
                src={workshop}
                alt="Workshop participants collaborating"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src={workshop2}
                alt="Workshop presentation session"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="bg-sjsu-lightgray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Introduction
              </h3>
              <p className="text-gray-600 mb-4">
                Computer Science education is growing globally, but
                English-dominated programming environments and instructional
                practices may be challenging for bilingual learners. A
                programming workshop was conducted at SJSU using 62 participants
                on a programming platform that supports multilingual
                programming. Participants included both CS (18) and non-CS (44)
                students.
              </p>
              <p className="text-gray-600">
                The results suggest that bilingual programming workshop
                increased:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <span className="font-medium">Confidence</span> – students
                  felt more capable and less intimidated after the workshop.
                </li>
                <li>
                  <span className="font-medium">
                    Identity and Belongingness
                  </span>{" "}
                  – students felt more included in the computing field after the
                  workshop.
                </li>
                <li>
                  Students who coded bilingually showed greater improvement in
                  confidence, belongingness and engagement.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Bilingual Programming Workshop">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Focus and Motivation
              </h3>
              <p className="text-gray-600 mb-4">
                Our workshop focused on how bilingual programming affects
                students' programming attitudes and behavior.
              </p>
              <p className="text-gray-600 font-medium mb-2">Motivation:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  English-centric programming environments may demotivate
                  bilingual learners
                </li>
                <li>
                  Limited research on the impact of bilingual programming on
                  both non-CS and CS students' attitudes
                </li>
              </ul>
              <p className="text-gray-600 font-medium">Goal:</p>
              <p className="text-gray-600">
                Explore how bilingual programming influences students'
                engagement and attitudes toward computing in the context of a
                programming workshop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={poster1}
                  alt="Group discussion during workshop"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sjsu-navy mb-2">
                    Workshop Content
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Participants built an interactive Restaurant System covering
                    key programming concepts:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    <li>Print statements</li>
                    <li>Variables</li>
                    <li>Control statements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={poster2}
                  alt="Workshop presentation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sjsu-navy mb-2">
                    Methodology
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    We organized participants into three distinct groups:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    <li>Native (non-English) programmers</li>
                    <li>Bilingual programmers</li>
                    <li>English-only programmers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-sjsu-lightgray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Languages and Measurement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 font-medium mb-2">
                    Languages represented:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Spanish</li>
                    <li>French</li>
                    <li>Mandarin</li>
                    <li>Burmese</li>
                    <li>Hindi</li>
                    <li>Vietnamese</li>
                    <li>Telugu</li>
                    <li>English</li>
                    <li>Canadian French</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-600 font-medium mb-2">
                    Statistical analysis:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Mixed ANOVA</li>
                    <li>Descriptive Statistics</li>
                  </ul>

                  <p className="text-gray-600 font-medium mb-2">
                    Pre/Post Surveys Measured:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Confidence</li>
                    <li>Enjoyment</li>
                    <li>Usefulness</li>
                    <li>Motivation</li>
                    <li>Computing Identity and Belonging</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Key Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h4 className="font-bold text-sjsu-blue mb-2">
                    Identity and Belonging
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Students&apos; sense of identity and belonging significantly
                    increased from pre- to post-workshop (p &lt; .001), with
                    differences across language groups, F(2, 59) = 5.51, p =
                    .006.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h4 className="font-bold text-sjsu-blue mb-2">
                    Programming Confidence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Programming confidence increased from pre- to post-workshop
                    (p &lt; .001), with variation across language groups, F(2,
                    59) = 3.14, p = .050.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-sjsu-blue mb-2 text-sm">
                    Coding Errors
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The English group made more coding errors compared to other
                    language groups.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-sjsu-blue mb-2 text-sm">
                    Bilingual Advantages
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Bilingual group showed a greater increase in identity and
                    belongingness and confidence compared to the others groups.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-sjsu-blue mb-2 text-sm">
                    Engagement Time
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The bilingual group showed higher coding engagement time
                    compared to other language groups.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-sjsu-navy py-2 px-4">
                    <h4 className="text-white font-medium text-center">
                      Coding in English and Mandarin
                    </h4>
                  </div>
                  <div className="p-4">
                    <img
                      src={codeinmandarin}
                      alt="Students coding in English and Mandarin"
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-sjsu-navy py-2 px-4">
                    <h4 className="text-white font-medium text-center">
                      Coding in English and Spanish
                    </h4>
                  </div>
                  <div className="p-4">
                    <img
                      src={codeinspanish}
                      alt="Students coding in English and Spanish"
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Conclusion: Key Takeaways and Future Directions
              </h3>
              <div className="mb-4">
                <p className="text-gray-600 font-medium mb-2">
                  Bilingual programmers Showed Greater Gains:
                </p>
                <p className="text-gray-600 mb-4">
                  The results suggest that bilingual programmers experienced
                  greater gains in programming confidence, sense of identity and
                  belonging in computing after the workshop, compared to both
                  native and English-only programmers. Additionally, the results
                  indicate that the bilingual group made fewer errors than the
                  English-only group.
                </p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-2">
                  Future Studies:
                </p>
                <p className="text-gray-600">
                  Further studies should explore specific bilingual pairings,
                  contextualization in programming, and long-term impacts on
                  retention and engagement in computing pathways.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Code Club Facilitator: Community Engagement Through Computing">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sjsu-lightgray rounded-lg p-6">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">
                Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Since September 2024, our lab has been actively involved in a
                community outreach initiative called{" "}
                <span className="font-medium">Code Club Facilitator</span>. In
                partnership with <b>Yerba Buena High School</b>, our team
                members volunteer in <b>AP Computer Science</b> classrooms to
                support and mentor students in coding. We are currently looking
                to expand this initiative by{" "}
                <b>partnering with other high schools</b> that are interested in
                bringing university mentors into their computer science
                classrooms.
              </p>
              <p className="text-gray-600 mb-4">
                This initiative promotes early exposure to computer science,
                fosters peer-to-peer learning, and encourages students from
                underrepresented backgrounds to pursue computing education. By
                embedding university researchers directly into high school
                environments, we bridge the gap between K-12 and higher
                education.
              </p>

              <h3 className="text-xl font-bold text-sjsu-navy mb-3">Impact</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  8+ months of weekly mentoring sessions since September 2024
                </li>
                <li>
                  Direct classroom support for high school Computer Science
                  students
                </li>
                <li>
                  Encouraged student participation in projects, labs, and exam
                  preparation
                </li>
                <li>
                  Expanded computing access to students through mentorship and
                  example
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ProjectsPage;
