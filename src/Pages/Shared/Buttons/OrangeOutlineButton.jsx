const OrangeOutlineButton = ({ children, className, ...others }) => {
  return (
    <button className={`btn btn-outline text-orange-600 hover:bg-orange-600 hover:border-orange-600 font-semibold ${className}`} {...others}>
      {children}
    </button>
  );
};

export default OrangeOutlineButton;
