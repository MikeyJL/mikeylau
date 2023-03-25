import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body className="h-screen p-12">
        <div className="h-full rounded border-2 border-black">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
