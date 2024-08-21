export default function PictureIcon({
  color,
  width,
  height,
}: {
  color: string;
  width: string;
  height: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6_7056)">
        <rect
          x="3"
          y="4"
          width="18"
          height="15"
          rx="1"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M6.5 20L13.8081 8.40975C14.1578 7.85514 14.9377 7.78147 15.3851 8.2608L21.5 14.8125"
          stroke={color}
          strokeWidth="2"
        />
        <rect
          x="6"
          y="7"
          width="3"
          height="3"
          rx="1.5"
          stroke={color}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_7056">
          <rect
            width="20"
            height="17"
            fill="white"
            transform="translate(2 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
