/* eslint-disable react/prop-types */
import InfoIcon from "../icons/InfoIcon";

const ErrorPopup = ({ errorMessage, closeError }) => {
  return (
    <div
      className="flex items-center p-2 mb-4 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <button onClick={closeError}>
        <InfoIcon />
      </button>
      <span className="sr-only">Info</span>
      <div>{errorMessage}</div>
    </div>
  );
};

export default ErrorPopup;
