import { PageWrapper } from "@/components";
import { ExternalLink } from "@/components/svgs";
import Head from "next/head";

type Achievement = {
  name: string;
  description: string;
  date: string;
  url?: string;
};

const Home = () => {
  const achievements: Achievement[] = [
    {
      name: "MSc Applied AI & Data Science",
      description: "Distinction",
      date: "October 22",
    },
    {
      name: "CFO-CF02 Snowflake",
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
      description: "Pending",
      date: "December 23",
      url: "https://iapp.org/certify/cippe",
    },
  ];

  return (
    <PageWrapper>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main className="z-10 flex flex-1 flex-col">
        <div className="mt-auto ml-auto flex w-fit flex-col">
          {/* Achievements */}
          {achievements.map((item) => (
            <div key={item.name} className="mt-4">
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
      </main>
    </PageWrapper>
  );
};

export default Home;
