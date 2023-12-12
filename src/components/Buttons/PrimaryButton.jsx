/* eslint-disable react/prop-types */

const PrimaryButton = ({ label, buttonAction }) => {
  return (
    <button className="button-large" onClick={buttonAction}>
      {label}
    </button>
  );
};

export default PrimaryButton;
