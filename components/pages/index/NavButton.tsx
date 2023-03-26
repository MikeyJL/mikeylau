import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

type NavButtonProps = {
  className?: string;
  active?: boolean;
  onClick: () => void;
};

const NavButton: FC<PropsWithChildren<NavButtonProps>> = ({
  className,
  active,
  onClick,
  children,
}) => {
  return (
    <button
      className={classNames(
        "transition-opacity hover:opacity-60",
        {
          "font-semibold": active,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;
