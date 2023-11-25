import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiReactquery,
} from "react-icons/si";
// import { Tooltip } from "@nextui-org/tooltip";

const getIcon = (tech: string, i: number) => {
  switch (tech.toLocaleLowerCase().replaceAll(".", "")) {
    case "nextjs":
      return (
        <SiNextdotjs
          key={i}
          className="text-black dark:text-white"
          size={32}
          title="Next.JS"
        />
      );
    case "mongodb":
      return (
        <SiMongodb
          key={i}
          className="text-green-500 p-1 text-4xl"
          size={32}
          title="MongoDB"
        />
      );
    case "typescript":
      return (
        <SiTypescript
          key={i}
          className="text-blue-600 bg-white rounded-md text-4xl"
          size={32}
          title="Typescript"
        />
      );
    case "tailwind":
      return (
        <SiTailwindcss
          key={i}
          className="text-cyan-500 rounded-md text-4xl"
          size={32}
          title="Tailwind"
        />
      );
    case "react":
      return (
        <SiReact
          key={i}
          className="text-blue-500 rounded-md text-4xl"
          size={32}
          title="React"
        />
      );
    case "react query":
      return (
        <SiReactquery
          key={i}
          className="bg-gradient-to-tr from-orange-500 to-pink-600 text-white rounded-md text-4xl"
          size={32}
          title="React Query"
        />
      );
    default:
      return tech;
  }
};

export default getIcon;
