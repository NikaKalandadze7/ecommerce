/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const ArrowPointingUp = ({ color, height, width }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8L7 2M7 2L13 8M7 2L7 17"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ArrowPointingUp;
