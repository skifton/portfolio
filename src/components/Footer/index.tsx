import React from "react";
import { SocialIcon } from "react-social-icons";

const socialLinks = [
  {
    content: (
      <SocialIcon
        network="linkedin"
        style={{ height: 30, width: 30 }}
        bgColor="white"
      />
    ),
    link: "https://www.linkedin.com/in/anton-simonenkov-618788255/",
  },
  {
    content: (
      <SocialIcon
        network="github"
        style={{ height: 30, width: 30 }}
        bgColor="white"
      />
    ),
    link: "https://github.com/skifton",
  },
  {
    content: (
      <SocialIcon
        network="google"
        style={{ height: 30, width: 30 }}
        bgColor="white"
      />
    ),
    link: "mailto:antoniestories@gmail.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="fixed w-full bg-gray-900 h-12 bottom-0 border-t border-gray-600">
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-14">
        <ul className="text-white list-none flex">
          {socialLinks.map((social) => (
            <li key={social.link} className="px-10 py-3 border border-gray-600">
              <a href={social.link}>{social.content}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
