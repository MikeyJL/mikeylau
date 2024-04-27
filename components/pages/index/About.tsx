import { Certificate } from "@/components/svgs";
import LinkedIn from "@/components/svgs/LinkedIn";
import { FC, ReactNode } from "react";

const information: string[] = [
  "Malaysia — United Kingdom",
  "MSc in Applied AI and Data Science",
  "Practicing Kendoka [剣道家]",
  "NeoVim is my go-to",
];

const links: { label: string; icon: ReactNode; url: string }[] = [
  {
    label: "LinkedIn",
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/mikey-lau/",
  },
  {
    label: "Credly",
    icon: <Certificate />,
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
            <div className="mr-2 h-6 w-6">{item.icon}</div>
            <p>{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
