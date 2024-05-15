import { Certificate, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FC, ReactNode } from "react";

const information: string[] = [
  "Malaysia — United Kingdom",
  "MSc in Applied AI and Data Science",
  "Practicing Kendoka [剣道家]",
  "NeoVim is my go-to",
];

const links: { label: string; icon: ReactNode; url: string }[] = [
  {
    label: "GitHub",
    icon: <GithubLogo size={24} />,
    url: "https://github.com/MikeyJL",
  },
  {
    label: "LinkedIn",
    icon: <LinkedinLogo size={24} />,
    url: "https://www.linkedin.com/in/mikey-lau/",
  },
  {
    label: "Credly",
    icon: <Certificate size={24} />,
    url: "https://www.credly.com/users/mikey-lau",
  },
];

const About: FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {information.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="space-y-4">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            className="flex w-fit items-center font-semibold transition-opacity hover:opacity-60"
          >
            <div className="mr-2">{item.icon}</div>
            <p>{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
