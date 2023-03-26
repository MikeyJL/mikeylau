import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />

      <body className="flex h-screen flex-col bg-red-50">
        <div className="flex-1 p-4 sm:p-12">
          <div className="h-full rounded border border-red-300">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
};

export default Document;
