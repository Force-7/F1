function HeroPage({ children, title }) {
  return (
    <div className="h-full text-center bg-gradient-to-r from-base-300 to-gray-500">
      <div className="xl:max-w-[60vw] text-xs md:text-base  xl:text-lg justify-center px-10 m-auto">
        <div className="py-5 ">
          <h2 className="mt-5 text-3xl font-bold h-fit w-full justify-center pb-5 text-warning whitespace-pre-line">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
