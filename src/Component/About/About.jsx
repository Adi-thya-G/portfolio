import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiCode, BiBook } from "react-icons/bi";
import { MdWork, MdSchool } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import adithya from './adithya.jpg'

const About = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration (1 second)
        easing: "ease-in-out", // Easing function for the animation
        offset: 200, // Trigger animation when the element is 200px into the viewport
        once: true,
    })
  }, []);

 
AOS.refresh(); 
 

  return (
    <div className="min-h-screen py-20 mt-20 bg-gradient-to-b from-gray-50 to-gray-100 " id="About"  data-aos="fade-up">
      {/* Hero Section */}
      <section className="relative  flex items-center justify-center px-4 lg:px-0">
        <div className="text-center" data-aos="fade-up">
          <div className="mb-8 relative inline-block">
            <img
              src={adithya}
              alt="Professional headshot"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
              loading="lazy"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Adithya Karmarkar G</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Web developer</p>
          <div className="flex justify-center space-x-4">
            <SocialIcon Icon={FaGithub} link="https://github.com/Adi-thya-G" />
            <SocialIcon Icon={FaLinkedin} link="https://www.linkedin.com/in/adithya-karmarkar-g-444462268/" />
            <SocialIcon Icon={FaTwitter} link="#" />
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 px-4 lg:px-20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Hi! I’m Adithya Karmarkar G, a final-year BCA student with a strong passion for web development. I specialize in HTML, CSS, JavaScript, React, and Django, and I aim to build user-friendly web applications that solve real-world problems.

One of my key projects was a Task Management System built with Django. The system sends automatic email reminders one hour before task deadlines, helping users stay organized. This project strengthened my skills in backend development, email automation, and working with APIs.

I am also an advocate for open-source development and have explored tools like Appwrite to further enhance my technical abilities.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          I enjoy learning from the open-source community and contributing to meaningful projects.

When I’m not coding, I’m exploring new technologies, frameworks, and libraries to expand my skill set. I enjoy tackling challenges and collaborating on projects that help me grow as a developer.

Feel free to explore my work and reach out if you’d like to connect or discuss potential collaborations!
          </p>
        </div>
      </section>

     
      
    </div>
  );
};

const SocialIcon = ({ Icon, link }) => (
  <a
    href={link}
    className="w-12 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={24} />
  </a>
);

export default About;
