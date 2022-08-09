function HomePage({ children }) {
  return (
    <div className="text-center max-h-screen max-w-screen flex bg-gradient-to-r from-base-300 to-gray-500 ">
      <div className="px-10 ">
        <div className="py-5">{children}</div>
      </div>
    </div>
  );
}

export default HomePage;
