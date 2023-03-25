import { FC } from "react";

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => (
  <div className={className}>
    <h1 className="mb-2 text-5xl">Mikey Lau</h1>
    <p>Data Scientist | Data Engineer</p>
  </div>
);

export default Logo;
