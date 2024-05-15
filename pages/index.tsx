import { Logo } from "@/components";
import {
  About,
  Achievements,
  NavButton,
  Stack,
} from "@/components/pages/index";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import DOTS from "vanta/dist/vanta.dots.min";

type Vanta = {
  destroy: () => void;
};

const views = ["About", "Achievements", "Stack"] as const;
type View = (typeof views)[any];

const Home = () => {
  const [view, setView] = useState<View>("About");
  const [vantaEffect, setVantaEffect] = useState<Vanta | null>(null);
  const ref = useRef(null);

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

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: ref.current,
          showLines: false,
          backgroundColor: "#FEF2F2",
          color: "#FCA5A5",
          size: 2.5,
          spacing: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleSwitchView = (view: View) => {
    setView(view);
  };

  return (
    <>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main ref={ref} className="h-full p-4">
        <Logo className="mb-8 animate-fade-in" />

        <div className="flex">
          <div className="flex w-2/3 animate-fade-in flex-col items-start space-y-4">
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

          <div className="w-1/3">{viewMarkup}</div>
        </div>
      </main>

      {/* eslint-disable-next-line */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    </>
  );
};

export default Home;
