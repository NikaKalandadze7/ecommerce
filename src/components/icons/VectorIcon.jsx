/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const VectorIcon = ({ color, height, width }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L7.70711 6.29289C7.31658 6.68342 6.68342 6.68342 6.29289 6.29289L1 1"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default VectorIcon;
