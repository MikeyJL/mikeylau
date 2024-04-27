import classNames from "classnames";
import { FC } from "react";

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => (
  <div className={classNames("z-10", className)}>
    <h1 className="mb-2 text-xl">[廖国亮] Mikey Lau</h1>
  </div>
);

export default Logo;
