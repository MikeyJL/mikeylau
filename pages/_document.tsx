import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body className="h-screen bg-gray-100 p-12">
        <div className="h-full rounded border border-gray-300">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
