export default function MyBooksIcon({ selected }: { selected: boolean }) {
  const color = selected ? "#FFB904" : "#6F6F6F";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="#E5E5E5" />
      <g id="Icons">
        <rect
          width="952"
          height="974"
          transform="translate(-272 -294)"
          fill="white"
        />
        <g id="Icons_2">
          <g id="1">
            <g id="icon-shelf-24_2">
              <path
                id="Vector"
                d="M3 21V14.2V4C3 3.44771 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V14.2V21"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M3 13L21 13"
                stroke={color}
                strokeWidth="2"
              />
              <rect
                id="Rectangle"
                x="6"
                y="6"
                width="3"
                height="6"
                rx="0.5"
                fill={color}
              />
              <rect
                id="Rectangle_2"
                x="10.5"
                y="6"
                width="3"
                height="6"
                rx="0.5"
                fill={color}
              />
              <rect
                id="Rectangle_3"
                x="13.7009"
                y="7.15234"
                width="3"
                height="6"
                rx="0.5"
                transform="rotate(-30 13.7009 7.15234)"
                fill={color}
              />
              <rect
                id="Rectangle_4"
                x="6"
                y="16"
                width="3"
                height="6"
                rx="0.5"
                fill={color}
              />
              <rect
                id="Rectangle_5"
                x="10.5"
                y="16"
                width="3"
                height="6"
                rx="0.5"
                fill={color}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
