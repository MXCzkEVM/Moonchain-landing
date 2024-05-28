const BackgroundAnimation = () => (
  <>
    <div className="stars"></div>
    <div className="twinkling"></div>

    <div className="relative container">
      <div className="absolute animated-moon w-[700px] h-[700px] -right-80 -top-14 sm:w-[750px] sm:h-[750px] sm:-right-52 sm:-top-20 lg:w-[800px] lg:h-[800px] lg:-right-52 lg:-top-20 xl:w-[1000px] xl:h-[1000px] xl:-right-60 xl:-top-40">
        <div className="absolute inset-0 bg-gradient-to-bl from-black from-0% via-black via-30% to-transparent to-75% rounded-full"></div>
      </div>
    </div>
  </>
);

export default BackgroundAnimation;
