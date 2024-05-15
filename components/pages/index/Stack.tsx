import { FC } from "react";

const infrastructureStack: string[] = ["AWS", "Terraform", "Docker", "GitHub"];

const dataStack: string[] = [
  "SQL",
  "Java",
  "Python",
  "Apache Spark",
  "Apache Iceberg",
  "Snowflake",
  "Fivetran",
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
];

const Stack: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <p>
        <b>Software</b> | {softwareStack.join(", ")}
      </p>
      <p>
        <b>Data</b> | {dataStack.join(", ")}
      </p>
      <p>
        <b>Infrastructure</b> | {infrastructureStack.join(", ")}
      </p>
    </div>
  );
};

export default Stack;
