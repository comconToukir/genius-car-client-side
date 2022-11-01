const OrangeButton = ({ children, className, ...others }) => {
  return (
    <button
      className={`btn bg-orange-600 hover:bg-orange-700 border-none ${className}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default OrangeButton;
