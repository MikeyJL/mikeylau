import { Head, Html, Main, NextScript } from "next/document";
import { Logo } from "./components";

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body className="h-screen p-12">
        <div className="h-full rounded border-2 border-black p-8">
          <Logo className="mb-4" />
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
