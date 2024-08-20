export default function FeedIcon({ selected }: { selected: boolean }) {
  const color = selected ? "#FFB904" : "#6F6F6F";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V18.2308V18.9231V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V13C18 13.5523 17.5523 14 17 14H7C6.44772 14 6 13.5523 6 13V7Z"
        fill={color}
      />
      <path
        d="M6 17C6 16.4477 6.44772 16 7 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H7C6.44772 18 6 17.5523 6 17Z"
        fill={color}
      />
    </svg>
  );
}
