import Image from "next/image";
import TextCard from "../TextCard";

const About = () => {
  const myjourney = [
    "Pro npm package installer certificate",
    "Hydration Error my biggest weakness",
    "Tests?",
    "Summoner of bugs",
    "Why does this work 🤔",
    "Pixel art enjoyer",
  ];

  return (
    <>
      <div
        className="section flex flex-col items-center  dark:border-white border-black"
        id="about"
      >
        <h1 className="text-2xl m-8">About Me</h1>
        <div
          className="w-80 min-h-[384px] rounded-tl-full flex flex-col items-center justify-center gap-2.5 px-5 py-5 bg-yellow-500
        "
        >
          <div className="w-96 h-96 flex-col justify-center items-center gap-10 inline-flex">
            <div className="flex-col justify-start items-center gap-2.5 flex relative ">
              <Image
                width={160}
                height={160}
                className="w-[160px] h-[160px] relative rounded-lg"
                src="/assets/tree.png"
                alt="profile-pic"
              />
              <div className="w-32 h-6 text-center text-mytext   leading-none ">
                Luiggi
              </div>
            </div>
            <div className="text-mytext  font-bold leading-none tracking-wide ">
              Junior Web Developer
            </div>
            <div className="w-72 text-mytext font-bold leading-8 ">
              In the process of learning everything everywhere all at once.
            </div>
          </div>
        </div>
        {/* every time we click on this div we should see a pop with my thoughts in there */}
        <div className="border border-blue-600 m-8">
          <p>
            Hi I'm Luiggi, Front End Developer that fantasizes with becoming a
            Full Stack Developer. I like creating things. It feels truly great.
          </p>
          Hire me.
          <p></p>
        </div>

        {myjourney.map((item, i) => (
          <TextCard key={i} text={item} />
        ))}
      </div>
    </>
  );
};

export default About;
