export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Piano keys icon */}
      <rect x="2" y="8" width="8" height="24" rx="1" fill="white" />
      <rect x="12" y="8" width="8" height="24" rx="1" fill="white" />
      <rect x="22" y="8" width="8" height="24" rx="1" fill="white" />
      <rect x="32" y="8" width="8" height="24" rx="1" fill="white" />
      <rect x="7" y="8" width="6" height="15" rx="1" fill="#0a0a0a" />
      <rect x="17" y="8" width="6" height="15" rx="1" fill="#0a0a0a" />
      <rect x="29" y="8" width="6" height="15" rx="1" fill="#0a0a0a" />
      {/* PIANO text */}
      <text
        x="48"
        y="29"
        fontFamily="Georgia, serif"
        fontSize="20"
        fill="white"
        letterSpacing="3"
      >
        PIANO
      </text>
    </svg>
  );
};