export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white h-[44vh]">
        <div className="font-bold flex gap-2 text-5xl p-4 justify-center items-center">
          Buy Me A Chai
          <span>
            <img
              className="invertImg"
              src="/tea.gif"
              width={90}
              alt="chai gif"
            />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>

        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-4xl font-bold text-center mb-14">
          Your Fans can Buy you a Chai!
        </h2>

        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/man.gif"
              width={88}
              alt="man gif"
            />
            <p className="font-bold">Your Fans want to help</p>
            <p className="text-center">Your Fans are available for you</p>{" "}
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/coin.gif"
              width={88}
              alt="coin gif"
            />
            <p className="font-bold">Your Fans want to help</p>
            <p className="text-center">Your Fans are available for you</p>{" "}
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/group.gif"
              width={88}
              alt="group gif"
            />
            <p className="font-bold">Your Fans want to help</p>
            <p className="text-center">Your Fans are available for you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-14">
          Learn More About Us
        </h2>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ARIKWJRoxsw?si=fNImeM9PEGbolo6O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
