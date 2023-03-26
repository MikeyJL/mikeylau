const information: string[] = [
  "Born in Ipoh, Malaysia",
  "Background in Software Engineering",
  "Graduated with an MSc in Applied AI and Data Science",
  "Working for a tech-for-good company",
];

const About = () => {
  return (
    <>
      {information.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
};

export default About;
