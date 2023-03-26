import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body className="h-screen bg-red-50 p-4 sm:p-12">
        <div className="h-full rounded border border-red-300">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
