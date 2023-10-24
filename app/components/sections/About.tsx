import Image from "next/image";
import TextCard from "../TextCard";
import MotionTest from "../MotionTest";

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
      <div className="section " id="about">
        <h1 className="title">About Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-80 min-h-[384px] rounded-tl-full flex flex-col items-center justify-center gap-2.5 px-5 py-5 bg-yellow-500">
            <div className="w-80 h-96 flex-col justify-center items-center gap-10 inline-flex">
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
              <div className="w-72 text-mytext  leading-8 ">
                In the process of learning everything everywhere all at once.
              </div>
            </div>
          </div>

          {/* MOTION BUBBLE tooltip from NEXTui??
         every time we click on this div we should see a pop with my thoughts in there */}
          <div className="w-80 m-8">
            <p className="mb-4">
              Hi I'm Luiggi! I'm a junior{" "}
              <span className="text-myprimary underline">
                Front End Developer
              </span>{" "}
              that fantasizes with becoming a Full Stack Developer.
            </p>
            <p>
              I like creating things. It feels truly great.{" "}
              <span className="text-myprimary underline">Hire me</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
