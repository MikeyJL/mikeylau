import classNames from "classnames";
import { FC } from "react";

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => (
  <div className={classNames("z-10", className)}>
    <h1 className="mb-2 text-5xl">Mikey Lau</h1>
    <p>[廖国亮] Data Scientist | Data Engineer</p>
  </div>
);

export default Logo;
