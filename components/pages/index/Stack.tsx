import { FC } from "react";

const dataStack: string[] = [
  "Python",
  "SQL",
  "Terraform",
  "AWS",
  "Docker",
  "Apache Spark",
  "Apache Iceberg",
  "Delta Lake",
  "Snowflake",
  "Fivetran",
  "Streamlit",
  "Plotly",
  "PyTorch",
  "numpy",
  "pandas",
  "seaborn",
  "etc",
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
  "Shopify",
];

const Stack: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
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
