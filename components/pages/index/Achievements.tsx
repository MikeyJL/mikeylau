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
    name: "DAMA CDMP Associate",
    description: "Pending",
    date: "July 23",
    url: "https://www.dama.org/cpages/cdmp-information",
  },
  {
    name: "IAPP CIPP/E",
    description: "Planned",
    date: "December 23",
    url: "https://iapp.org/certify/cippe",
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
