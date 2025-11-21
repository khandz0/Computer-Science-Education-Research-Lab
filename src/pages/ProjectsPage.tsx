import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import workshop2 from "../assets/workshop/workshop2.jpeg";
import poster2 from "../assets/posters/SIGCSE Poster.png";
import workshop from "../assets/workshop/workshop.jpeg";
import poster1 from "../assets/researchday/poster.JPG";
import codeinmandarin from "../assets/workshop/codeinmandarin.png";
import codeinspanish from "../assets/workshop/codeinspanish.png";

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Projects" subtitle="" />

      <Container className="py-12">
        <Section title="Conceptual Transfer: ML Text Classification Workshop">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-sjsu-lightgray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">Project Overview</h3>
              <p className="text-gray-600 mb-4">
                This workshop consists of <strong>two separate sessions</strong>—one using <strong>Python</strong> and another using <strong>Java</strong>—each focused on building a <strong>text classification model</strong> that distinguishes between <em>positive</em> and <em>negative</em> Yelp reviews. While the programming languages differ, both sessions share the same overall objective: exploring the end-to-end process of supervised learning through data preparation, model training, evaluation, and reflection. The activity follows an interactive <strong>predict → run → reveal → reflect</strong> cycle to reinforce conceptual understanding and computational thinking. Estimated completion time per session: <span className="font-medium">2–3 hours</span>.
              </p>
              <p className="text-gray-600">
                This workshop supports our lab's ongoing research on <strong>conceptual transfer</strong> between rule-based programming and data-driven machine learning. By offering separate sessions in Python and Java, we investigate how students' prior programming language knowledge influences their understanding of machine learning concepts and their ability to transfer conceptual understanding across different programming paradigms. As AI/ML systems become increasingly prevalent, understanding how students transition from rule-based programming (where they design solutions) to data-driven approaches (where they work with data preparation, cleaning, and model training) is crucial.
              </p>
            </div>

            {/* Learning goals + audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-sjsu-navy mb-2">Who It’s For</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>Students who have completed <strong>CS 46A - Introduction to Programming</strong> at SJSU</li>
                  <li>Students new to artificial intelligence and data-driven programming</li>
                  <li>Participants interested in the methodology behind real-world AI systems</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-sjsu-navy mb-2">Learning Outcomes</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>Explain how supervised learning uses labeled examples to “teach” a model</li>
                  <li>Clean and inspect a dataset of Yelp reviews for balanced class distribution</li>
                  <li>Train and evaluate baseline classifiers using machine learning algorithms</li>
                  <li>Understand the relationship between rule-based and data-driven programming approaches</li>
                  <li>Interpret performance metrics (accuracy, precision, recall) and confusion matrices</li>
                  <li>Reflect on misclassifications and test models with custom review samples</li>
                </ul>
              </div>
            </div>

            {/* What students do */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-sjsu-navy py-2 px-4">
                <h4 className="text-white font-medium text-center">Workshop Flow</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Participants engage in a structured learning experience that guides them through the machine learning workflow:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                  <li>Set up the development environment and import necessary libraries</li>
                  <li>Load and explore the Yelp review dataset</li>
                  <li>Preprocess and clean the data for model training</li>
                  <li>Split the data into training and testing sets</li>
                  <li>Train machine learning models to classify reviews</li>
                  <li>Evaluate model performance using various metrics</li>
                  <li>Analyze results and reflect on model behavior and limitations</li>
                  <li>Test the model with custom examples and explore extensions</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  The workshop follows an interactive <strong>predict → run → reveal → reflect</strong> cycle, encouraging students to make predictions about outcomes before running code, observe results, and reflect on their understanding of the underlying concepts. A pre/post survey measures understanding before and after reveal to examine how far off the predictions are from actual results. Qualitative data is gathered from open-ended reflections throughout the workshop.
                </p>
              </div>
            </div>

            {/* Workshop Links Section */}
            <div id="workshop-materials" className="bg-sjsu-lightgray rounded-lg p-6 mb-8 mt-8">
              <h3 className="text-xl font-bold text-sjsu-navy mb-3">Workshop Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-sjsu-navy mb-2">Python</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <a
                      href="#"
                      className="text-sjsu-blue hover:text-sjsu-navy hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Colab Notebook
                    </a>
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-sjsu-navy mb-2">Java</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <a
                      href="#"
                      className="text-sjsu-blue hover:text-sjsu-navy hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lab Manual
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    <a
                      href="#"
                      className="text-sjsu-blue hover:text-sjsu-navy hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Form
                    </a>
                  </p>
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
