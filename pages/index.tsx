import Head from "next/head";
import { PageWrapper } from "./components";

const Home = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Mikey Lau</title>
      </Head>

      <main>
        <p>Content</p>
      </main>
    </PageWrapper>
  );
};

export default Home;
