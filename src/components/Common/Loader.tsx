const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="text-lg font-medium text-secondary-500">
        Loading
        <span className="animate-pulse">...</span>
      </div>
    </div>
  );
};

export default Loader;
