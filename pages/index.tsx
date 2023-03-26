import { PageWrapper } from "@/components";
import {
  About,
  Achievements,
  NavButton,
  Stack,
} from "@/components/pages/index";
import Head from "next/head";
import { useState } from "react";

const views = ["About", "Achievements", "Stack"] as const;
type View = (typeof views)[any];

const Home = () => {
  const [view, setView] = useState<View>("About");

  const handleSwitchView = (view: View) => {
    setView(view);
  };

  const viewMarkup = (() => {
    switch (view) {
      case "About":
        return <About />;
      case "Achievements":
        return <Achievements />;
      case "Stack":
        return <Stack />;
    }
  })();

  return (
    <PageWrapper>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main className="z-10 flex flex-1 flex-col">
        <div className="my-8 flex animate-fade-in flex-col items-start space-y-4">
          {views.map((item) => (
            <NavButton
              key={item}
              active={view === item}
              onClick={() => handleSwitchView(item)}
            >
              {item}
            </NavButton>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:ml-auto sm:w-80">
          {viewMarkup}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Home;
