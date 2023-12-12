import ArrowPointingUp from "../icons/ArrowPointingUp";

const BackToTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={() => scrollUp()}
        className="flex justify-between gap-2 hover:text-tretiary ease-in-out duration-200"
      >
        <span>Scroll To Top</span>
        <ArrowPointingUp color={"black"} height={"16px"} width={"16px"} />
      </button>
    </div>
  );
};

export default BackToTop;
