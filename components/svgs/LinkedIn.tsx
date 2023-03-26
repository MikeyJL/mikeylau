import { FC } from "react";

type LinkedInProps = {
  className?: string;
};

const LinkedIn: FC<LinkedInProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      <rect
        x="32"
        y="32"
        width="192"
        height="192"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="120"
        y1="112"
        x2="120"
        y2="176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="88"
        y1="112"
        x2="88"
        y2="176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M120,140a28,28,0,0,1,56,0v36"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <circle cx="88" cy="84" r="12" fill="currentColor" />
    </svg>
  );
};

export default LinkedIn;
