import { ExternalLink } from "@/components/svgs";
import { FC } from "react";

type Achievement = {
  name: string;
  description: string;
  date: string;
  url?: string;
};

const achievements: Achievement[] = [
  {
    name: "MSc Applied AI & Data Science",
    description: "Distinction",
    date: "October 22",
  },
  {
    name: "Snowflake CFO-CF02",
    description: "Passed",
    date: "March 23",
    url: "https://www.credly.com/badges/eb55e937-7518-4a94-941f-9b51fd579514/public_url",
  },
  {
    name: "AWS Cloud Practitioner",
    description: "Passed",
    date: "October 23",
    url: "https://www.credly.com/badges/6c3ffe42-48b1-4dea-8232-cc49575e0a18/public_url",
  },
  {
    name: "AWS Solutions Architect — Associate",
    description: "Passed",
    date: "December 23",
    url: "https://www.credly.com/badges/f4afca00-fbc3-4834-ac4d-6d3d4d25bdaf/public_url",
  },
  {
    name: "AWS Machine Learning — Specialty",
    description: "Passed",
    date: "April 24",
    url: "https://www.credly.com/badges/d9e156df-4549-4da2-a47d-cee259d233a6/public_url",
  },
  {
    name: "AWS Solutions Architect — Professional",
    description: "In-progress",
    date: "June 24",
  },
  {
    name: "AWS Data Engineer — Associate",
    description: "Planned",
    date: "August 24",
  },
  {
    name: "AWS Security — Specialty",
    description: "Planned",
    date: "October 24",
  },
];

const Achievements: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {achievements.map((item) => (
        <div key={item.name}>
          {/* Heading */}
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              className="flex items-center transition-opacity hover:opacity-60"
            >
              <p className="font-semibold">{item.name}</p>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          ) : (
            <p className="font-semibold">{item.name}</p>
          )}

          {/* Description */}
          <div className="flex items-center text-sm">
            {item.description && <p>{item.description} |&nbsp;</p>}
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
