export const BanUser = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#D30404"
        d="M12 20c.85 0 1.667-.13 2.45-.387a8.286 8.286 0 0 0 2.2-1.113 8.286 8.286 0 0 0-2.2-1.113A7.773 7.773 0 0 0 12 17c-.85 0-1.666.13-2.45.387a8.284 8.284 0 0 0-2.2 1.113 8.284 8.284 0 0 0 2.2 1.113c.784.258 1.6.387 2.45.387Zm2.65-8.2-1.424-1.425c.083-.133.15-.275.2-.425.05-.15.075-.3.075-.45 0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 12.001 8c-.15 0-.3.025-.45.075a1.98 1.98 0 0 0-.425.2L9.7 6.85c.316-.283.67-.496 1.062-.637A3.61 3.61 0 0 1 12.001 6c.966 0 1.791.342 2.475 1.025A3.372 3.372 0 0 1 15.5 9.5c0 .433-.071.846-.213 1.238a3.228 3.228 0 0 1-.637 1.062Zm5.7 5.7-1.45-1.45a7.713 7.713 0 0 0 .826-1.95A8.07 8.07 0 0 0 20 12c0-2.233-.775-4.125-2.325-5.675C16.126 4.775 14.234 4 12 4c-.717 0-1.417.092-2.1.275a7.707 7.707 0 0 0-1.95.825L6.5 3.65a10.19 10.19 0 0 1 2.625-1.225A9.843 9.843 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.1 10.1 0 0 1 3.175 2.137c.9.9 1.612 1.958 2.137 3.175a9.738 9.738 0 0 1 .788 3.9c0 .983-.142 1.942-.425 2.875A10.195 10.195 0 0 1 20.35 17.5ZM12 22a9.737 9.737 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.174-2.137c-.9-.9-1.613-1.958-2.138-3.175a9.738 9.738 0 0 1-.787-3.9c0-.983.137-1.942.412-2.875a10.29 10.29 0 0 1 1.213-2.65L.676 3.5 2.1 2.075l19.8 19.8-1.425 1.425L5.1 7.95a7.707 7.707 0 0 0-.825 1.95A8.069 8.069 0 0 0 4 12a7.878 7.878 0 0 0 1.85 5.1 10.37 10.37 0 0 1 2.912-1.563A9.884 9.884 0 0 1 12.001 15c.633 0 1.266.067 1.9.2.633.133 1.25.317 1.85.55l3.325 3.325a9.859 9.859 0 0 1-3.25 2.175c-1.217.5-2.492.75-3.825.75Z"
      />
    </g>
  </svg>
);

export const NotificationBell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#0D0D0D"
      fillOpacity={0.75}
      d="M9.922 21.51a3.178 3.178 0 0 0 2.996-2.149l-6.012.03a3.179 3.179 0 0 0 3.016 2.118Zm7.428-7.946-.024-4.891c-.018-3.432-2.363-6.31-5.524-7.164A2.123 2.123 0 0 0 9.817.176a2.123 2.123 0 0 0-1.972 1.352c-3.153.886-5.47 3.787-5.453 7.219l.025 4.891-1.812 1.83a1.062 1.062 0 0 0-.309.756l.005 1.067a1.067 1.067 0 0 0 1.072 1.06l17.067-.084a1.066 1.066 0 0 0 1.061-1.072l-.005-1.066a1.064 1.064 0 0 0-.316-.753l-1.83-1.812Z"
    />
  </svg>
);

export const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#0B1C33"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
      opacity={0.7}
    >
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7ZM16 3v4M8 3v4M4 11h16M7 14h.013M10.01 14h.005M13.01 14h.005M16.016 14h.005M13.016 17h.005M7.01 17h.005M10.01 17h.005" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ClientMessage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={35}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={34}
      height={35}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.033.81H33.96v33.927H.033z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1678F2"
        d="M9.93 26.256c-.401 0-.737-.136-1.008-.407a1.368 1.368 0 0 1-.406-1.007v-2.827h18.377V9.292h2.827c.4 0 .736.136 1.008.407.27.27.406.606.406 1.007V31.91l-5.655-5.654H9.93ZM2.86 24.842V5.052c0-.401.136-.737.407-1.008.27-.27.606-.406 1.007-.406h18.377c.4 0 .736.135 1.007.406.271.271.407.607.407 1.007v12.723c0 .4-.136.736-.407 1.007-.27.271-.606.407-1.007.407H8.516L2.86 24.842Z"
      />
    </g>
  </svg>
);

export const ExpandContent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={30}
      height={30}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h30v30H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1678F2"
        d="M6.25 23.75v-7.5h2.5v5h5v2.5h-7.5Zm15-10v-5h-5v-2.5h7.5v7.5h-2.5Z"
      />
    </g>
  </svg>
);

export const ClientHangoutDisabled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={35}
      height={35}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.516.81h33.927v33.927H.516z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#C9C9C9"
        d="M8.996 23.428h11.31v-4.524l5.654 4.524V12.12l-5.655 4.524v-4.524H8.996v11.31ZM6.17 29.083a2.722 2.722 0 0 1-1.997-.83 2.722 2.722 0 0 1-.83-1.998V9.292c0-.778.277-1.443.83-1.997a2.722 2.722 0 0 1 1.997-.83h22.618c.778 0 1.443.276 1.997.83.553.554.83 1.22.83 1.997v16.963c0 .778-.277 1.444-.83 1.997-.554.554-1.22.83-1.997.83H6.17Z"
      />
    </g>
  </svg>
);

export const TransferClient = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1678F2"
        d="m7 21-1.4-1.4 1.575-1.65c-1.767-.2-3.237-.962-4.412-2.287C1.588 14.338 1 12.782 1 11c0-1.95.68-3.604 2.038-4.963C4.396 4.68 6.05 4 8 4h3v2H8c-1.383 0-2.563.487-3.537 1.463C3.487 8.437 3 9.617 3 11c0 1.2.383 2.258 1.15 3.175A4.953 4.953 0 0 0 7.075 15.9L5.6 14.425 7 13l4 4-4 4Zm6-1v-7h9v7h-9Zm0-9V4h9v7h-9Zm2-2h5V6h-5v3Z"
      />
    </g>
  </svg>
);

export const TimelineDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <rect
      width={28.285}
      height={28.285}
      x={28.541}
      y={0.144}
      fill="url(#a)"
      rx={14.143}
      transform="rotate(90 28.541 .144)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={28.541}
        x2={56.826}
        y1={14.286}
        y2={14.286}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1678F2" />
        <stop offset={1} stopColor="#0D458C" />
      </linearGradient>
    </defs>
  </svg>
);

export const Invoice = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={31}
      height={31}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 .193h30.088v30.088H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#9995AF"
        d="M10.89 21.944h7.01c.503 0 .933-.162 1.288-.486.355-.324.532-.715.532-1.175 0-.46-.177-.852-.532-1.176a1.847 1.847 0 0 0-1.289-.485h-7.008c-.504 0-.933.162-1.288.485-.355.324-.533.716-.533 1.176 0 .46.178.851.533 1.174a1.84 1.84 0 0 0 1.288.487Zm0-5.077h11.2c.504 0 .934-.163 1.29-.487.354-.323.531-.715.531-1.174 0-.46-.177-.852-.531-1.176a1.848 1.848 0 0 0-1.29-.486h-11.2c-.503 0-.932.162-1.287.486-.355.324-.533.716-.533 1.176 0 .46.178.85.533 1.174a1.84 1.84 0 0 0 1.288.487Zm0-5.078h11.2c.504 0 .934-.161 1.29-.485.354-.324.531-.716.531-1.176 0-.46-.177-.851-.531-1.176a1.848 1.848 0 0 0-1.29-.485h-11.2c-.503 0-.932.162-1.287.485-.355.325-.533.717-.533 1.176 0 .46.178.852.533 1.176.355.324.784.485 1.288.485ZM6.666 27.523c-1.008 0-1.867-.324-2.577-.972-.71-.647-1.065-1.431-1.065-2.35V6.273c0-.92.355-1.703 1.065-2.35.71-.648 1.57-.972 2.577-.972h19.651c1.008 0 1.867.324 2.577.972.71.647 1.065 1.43 1.065 2.35v17.928c0 .919-.355 1.703-1.065 2.35-.71.648-1.569.972-2.577.972H6.666Z"
      />
    </g>
  </svg>
);

export const Download = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={25}
      height={25}
      x={-1}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M-.002.91h23.461v23.461H-.002z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#0067FF"
        d="M11.728 15.733a.879.879 0 0 1-.341-.069 1.033 1.033 0 0 1-.326-.23l-3.089-3.089a.793.793 0 0 1-.257-.559c-.003-.205.083-.394.257-.569.174-.174.36-.26.56-.256.198.003.384.092.559.266l1.855 1.855v-7.16a.75.75 0 0 1 .235-.547.75.75 0 0 1 .547-.235.75.75 0 0 1 .547.235.75.75 0 0 1 .235.547v7.16l1.855-1.855a.809.809 0 0 1 .555-.261c.202-.007.39.077.564.251.174.175.261.363.261.564 0 .202-.087.39-.261.564l-3.089 3.089a1.033 1.033 0 0 1-.326.23.878.878 0 0 1-.341.069ZM6.26 19.972c-.526 0-.968-.18-1.327-.538a1.803 1.803 0 0 1-.538-1.327v-1.752a.75.75 0 0 1 .235-.547.75.75 0 0 1 .548-.235.75.75 0 0 1 .547.235.75.75 0 0 1 .234.547v1.752c0 .075.032.144.094.207a.288.288 0 0 0 .207.094h10.934a.288.288 0 0 0 .206-.094.288.288 0 0 0 .094-.207v-1.752a.75.75 0 0 1 .235-.547.75.75 0 0 1 .547-.235.75.75 0 0 1 .547.235.75.75 0 0 1 .235.547v1.752c0 .526-.179.969-.537 1.327-.359.359-.801.538-1.327.538H6.26Z"
      />
    </g>
  </svg>
);

export const ExpandContentBlack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={23}
      height={23}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.621.325H22.76v22.139H.621z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1C1B1F"
        d="M5.441 20.225v-5.912h1.847v3.941h3.692v1.97H5.441Zm11.078-7.882V8.402h-3.693v-1.97h5.539v5.91h-1.846Z"
      />
    </g>
  </svg>
);

export const ClientHangoutEnabled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={33}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.686 0h31.681v31.681H.686z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1678F2"
        d="M8.606 21.121h10.56v-4.224l5.28 4.224v-10.56l-5.28 4.224v-4.224H8.607v10.56Zm-2.64 5.28a2.542 2.542 0 0 1-1.864-.775 2.542 2.542 0 0 1-.776-1.865V7.921c0-.726.259-1.348.776-1.865a2.542 2.542 0 0 1 1.864-.775h21.12c.727 0 1.349.258 1.866.775.516.517.775 1.139.775 1.865v15.84c0 .726-.259 1.348-.776 1.865a2.542 2.542 0 0 1-1.864.775H5.967Z"
      />
    </g>
  </svg>
);

export const BanUserModalIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={116}
    height={116}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={116}
      height={116}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h116v116H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#D24B24"
        fillOpacity={0.5}
        d="M58.003 96.667c3.464 0 6.847-.463 10.15-1.39a38.951 38.951 0 0 0 9.425-4.048L58.85 72.5h-.846c-5.397 0-10.633.866-15.708 2.598a48.206 48.206 0 0 0-14.017 7.552c4.028 4.43 8.459 7.874 13.292 10.331s10.31 3.686 16.433 3.686Zm40.963 15.95L84.707 98.358a49.244 49.244 0 0 1-12.687 5.921c-4.511 1.37-9.183 2.054-14.017 2.054-6.686 0-12.97-1.268-18.85-3.806-5.88-2.537-10.996-5.981-15.346-10.331S16.014 82.73 13.476 76.85C10.938 70.97 9.67 64.686 9.67 58c0-4.753.664-9.385 1.994-13.896a49.732 49.732 0 0 1 5.86-12.808L3.266 16.916l6.887-6.887 95.7 95.7-6.887 6.888Zm-.604-28.034-27.55-27.55a15.597 15.597 0 0 0 3.08-5.135 17.45 17.45 0 0 0 1.028-5.981c0-4.672-1.652-8.66-4.954-11.963C66.663 30.651 62.676 29 58.003 29c-2.094 0-4.088.342-5.981 1.027a15.597 15.597 0 0 0-5.136 3.081L31.42 17.642a49.258 49.258 0 0 1 12.687-5.921 47.577 47.577 0 0 1 13.896-2.054c6.686 0 12.97 1.268 18.85 3.806 5.88 2.537 10.996 5.981 15.346 10.331s7.794 9.466 10.331 15.346c2.538 5.88 3.806 12.164 3.806 18.85 0 4.753-.684 9.385-2.054 13.896a49.247 49.247 0 0 1-5.92 12.687Z"
      />
    </g>
  </svg>
);

export const EditProfileSection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#1678F2"
        d="M2 24v-4h20v4H2Zm4-8h1.4l7.8-7.775L13.775 6.8 6 14.6V16Zm-2 2v-4.25L15.2 2.575A1.975 1.975 0 0 1 16.6 2c.267 0 .525.05.775.15.25.1.475.25.675.45L19.425 4c.2.183.346.4.438.65.091.25.137.508.137.775 0 .25-.046.496-.137.737a1.874 1.874 0 0 1-.438.663L8.25 18H4Z"
      />
    </g>
  </svg>
);
