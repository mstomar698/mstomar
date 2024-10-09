export default function Home() {
  return (
    <div className="flex flex-row max-lg:flex-col justify-start items-center w-full">
      <div className="w-full lg:w-1/2 xl:min-h-screen max-xl:min-h-[600px] max-lg:min-h-[450px] flex flex-col justify-center items-start px-16">
        <span>Hii</span>
        <span>Welcome, to Mayank&apos;s Profile</span>
        <span>full stack developer</span>
        <span>
          I am available for work, lorema asdhja aklshdnr ashjdkan lhasdfi
          aklsdjlk askldjlk askldjl ndlkasmncjwhd aksldhjlkhnjk
        </span>
      </div>
      <div className="relative w-full lg:w-1/2 max-xl:min-h-[600px] max-lg:min-h-[450px] xl:min-h-screen flex justify-center items-end overflow-hidden">
        <div className="absolute lg:w-[80%] max-md:w-full max-lg:w-[50%] max-xxl:max-h-[550px] xl:h-[80%] max-xl:h-[400px] bg-gray-500 flex items-end justify-start rounded-full">
          <div className="bg-blue-400 w-[80%] h-[80%] rounded-full xl:ml-12 max-xl:ml-8"></div>
          <div className="bg-green-400 w-[20%] h-[20%] rounded-full absolute top-[15%] left-8"></div>
          <div className="bg-purple-400 w-[20%] h-[20%] rounded-full absolute top-[45%] -left-8"></div>
          <div className="bg-gray-200 w-[20%] h-[20%] rounded-full absolute top-[75%] left-0"></div>
          <div className="bg-black w-[20%] h-[20%] rounded-full absolute -top-[4%] left-[38%]"></div>
          <div className="bg-indigo-400 w-[20%] h-[20%] rounded-full absolute top-[15%] right-8"></div>
          <div className="bg-yellow-400 w-[20%] h-[20%] rounded-full absolute top-[45%] -right-8 max-lg:-right-4"></div>
          <div className="bg-cyan-400 w-[20%] h-[20%] rounded-full absolute top-[75%] right-0 max-lg:right-4"></div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/etc.png"
          title="etc"
          alt="Mayank"
          className="xl:h-[500px] h-[350px] object-contain z-[1000]"
        />
      </div>
    </div>
  );
}
