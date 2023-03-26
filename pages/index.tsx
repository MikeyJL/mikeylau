import { PageWrapper } from "@/components";
import { Achievements, NavButton } from "@/components/pages/index";
import Head from "next/head";
import { useState } from "react";

const views = ["About", "Achievements", "Stack", "Contact"] as const;
type View = (typeof views)[any];

const Home = () => {
  const [view, setView] = useState<View>("About");

  const handleSwitchView = (view: View) => {
    setView(view)
  }

  const viewMarkup = (() => {
    switch(view){
      case 'Achievements':
        return <Achievements />
    }
  })()

  return (
    <PageWrapper>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main className="z-10 flex flex-1 flex-col">
        <div className="mt-8 flex flex-col items-start space-y-4 animate-fade-in">
          {views.map((item) => (
            <NavButton key={item} active={view === item} onClick={() => handleSwitchView(item)}>{item}</NavButton>
          ))}
        </div>

        <div className="mt-auto ml-auto flex w-fit flex-col">
          {viewMarkup}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Home;
