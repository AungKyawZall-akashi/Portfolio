import React from "react";
import WebDesign from "../assets/WebDesign.png";
import IT from "../assets/IT.png";
import Innovation from "../assets/Innovation.JPG";
import solemate1 from "../assets/Solemate2.JPG";
import Coach from "../assets/Coach.png";
import welcome from "../assets/Welcome.png";

const experiences = [
  {
    title: "Participant of Web Design Contest",
    year: "17 May 2023 - 23 May 2023",
    company: "Gusto Web Design",
    images: [WebDesign],
    details: [
      "Led development team in creating responsive Space Game Store website, managing timelines and task delegation",
      "Established clean code guidelines and mentored team members to maintain high code quality standards",
      "Organized regular code reviews and technical discussions to ensure project consistency",
      "Successfully presented final website to judges, highlighting key features and technical decisions",
    ],
  },
  {
    title: "Participant of Gusto IT Challenge",
    year: "6 Dec 2022",
    company: "Gusto IT Challenge",
    images: [IT],
    details: [
      "Participated in IT challenge competitions, solving complex coding and algorithm problems under time constraints",
      "Applied best coding practices and efficient problem-solving techniques to optimize solutions",
      "Collaborated with team members during group challenges, discussing strategies and reviewing code for accuracy",
      "Presented solutions and explained technical decisions to judges, demonstrating clarity and logical approach",
    ],
  },
  {
    title: "Participant IOT Showcase",
    year: "6 Dec 2022",
    company: "IOT Showcase",
    images: [solemate1],
    details: [
      "Developed an app to control Arduino components, enabling real-time interaction and monitoring",
      "Conducted research and designed the Smart Shoe project, integrating hardware and software components",
      "Collaborated with team members to plan features, test prototypes, and refine technical solutions",
      "Presented project progress and technical decisions, demonstrating innovation and practical implementation",
    ],
  },
  {
    title: "People Choice Awards",
    year: "2023",
    company: "Gusto Product and Innovation Challenge",
    images: [Innovation],
    details: [
      "Led and managed a team of tech members to successfully deliver Tasty Table web application",
      "Architected and implemented core features for recipe management and meal planning",
      "Mentored team members and established best coding practices and standards",
      "Coordinated with stakeholders to align technical solutions with business requirements",
    ],
  },
  {
    title: "IT Coach",
    year: "2024 - Present",
    company: "CIY CLUB Myanmar",
    images: [Coach],
    details: [
      "Coaching 7-17 years old coders about programming concepts",
      "Teaching programming concepts and languages",
      "Teaching electronics and robotics fundamentals",
      "Instructing 3D modeling and design principles",
    ],
  },
  {
    title: "Regional Supervisor Myanmar",
    year: "25 February 2025 - 17 August 2025",
    company: "MindHack 2025 National Coding Tournament",
    images: [welcome],
    details: [
      "Conducted research on educational tools and platforms, documenting findings and providing updates to the Academic Coordinator",
      "Represented Mind Hack during school visits and marketing campaigns as the academic spokesperson",
      "Planned and coordinated bootcamp sessions, collaborating with Center Leads to ensure smooth execution",
      "Supported onboarding for parents and students, conducted academic review sessions, and reported outcomes for process improvements",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d1117] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1c2333] rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition overflow-hidden flex flex-col md:flex-row"
            >
              {/* Images */}
              {exp.images && exp.images.length > 0 && (
                <div
                  className={`w-full md:w-1/3 flex ${
                    exp.images.length > 1 ? "flex-col md:flex-row" : "flex-col"
                  }`}
                >
                  {exp.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${exp.title} ${i + 1}`}
                      className={`w-full ${
                        exp.images.length > 1 ? "md:w-1/2" : "w-full"
                      } h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105`}
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-400 font-medium">{exp.year}</span>
                </div>
                <h4 className="text-blue-400 font-semibold mb-3">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
