import Head from "next/head";
import { PageWrapper } from "../components";

type Achievement = {
  name: string;
  description?: string;
  date: string;
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
      date: "March 23",
    },
  ];

  return (
    <PageWrapper>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main className="flex flex-1 flex-col">
        <div className="mt-auto ml-auto flex w-fit flex-col">
          {/* Achievements */}
          {achievements.map((item) => (
            <div key={item.name} className="mt-4">
              <p className="font-semibold">{item.name}</p>

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
