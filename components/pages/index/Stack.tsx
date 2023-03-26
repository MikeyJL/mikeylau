import { FC } from "react";

const dataStack: string[] = [
  "Apache Spark",
  "Snowflake",
  "Fivetran",
  "Deepnote",
  "AWS",
  "Delta Lake",
  "SQL",
  "R",
  "Tensorflow (Keras)",
  "PyTorch",
  "NumPy",
  "SciPy",
  "Plotly",
  "Streamlit",
  "scikit-learn",
  "pandas",
  "seaborn",
];
const softwareStack: string[] = [
  "React",
  "React Native",
  "Next",
  "Node",
  "Typescript",
  "GraphQL",
  "Tailwindcss",
  "TypeOrm",
  "Express",
  "Django",
  "FastAPI",
  "SQLAcademy",
  "Docker",
  "Shopify",
];

const Stack: FC = () => {
  return (
    <div className="flex max-w-lg flex-col space-y-4">
      <p>
        <b>Data Stack</b> | {dataStack.join(", ")}
      </p>
      <p>
        <b>Software Stack</b> | {softwareStack.join(", ")}
      </p>
    </div>
  );
};

export default Stack;
