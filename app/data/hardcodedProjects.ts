// temporary hardcoded projects. Planning to add backend so i can automate the 3min task of adding a new project to this array.

const projects = [
  {
    title: "Fishit.app",
    link: "https://fishit.vercel.app/",
    description:
      "Companion web where items purchased in the marketplace are automatically sent to the player's inventory in game through websockets technology. Currently a work in progress. Home page is fully responsive. ",
    techStack: ["Nextjs", "Typescript", "Tailwind", "MongoDB", "React"],
    cardPicture: "/assets/projects/project-1-fishit/fishit-landing.png",
    picture: "/assets/projects/project-1-fishit/fishit-features.png",
  },
  // create array of pictures. maybe import them here.
  {
    title: "Rick & Morty",
    link: "https://rickandmorty-hkt-j2d.vercel.app/",
    description:
      "App to search different character from the series Rick & Morty. I had to create this app to be able to participate in the Jump 2 Digital Hackathon 2023 in Barcelona. I used react query and filtered through the name of each character. Also used pagination with a Load More button but planning to use intersection observer because it's cooler",
    techStack: ["react", "typescript", "react query", "tailwind"],
    cardPicture: "/assets/projects/project-2-rick_and_morty/morty-landing.png",
    picture: "/assets/projects/project-2-rick_and_morty/morty-tablet.png",
  },
  {
    title: "Fishit.app",
    link: "https://fishit.vercel.app/",
    description:
      "Companion web where items purchased in the marketplace are automatically sent to the player's inventory in game through websockets technology",
    techStack: ["Next.js", "typescript", "tailwind", "mongoDB"],
    cardPicture: "/assets/projects/project-1-fishit/fishit-landing.png",
    picture: "/assets/projects/project-1-fishit/fishit-landing.png",
  },
  {
    title: "Fishit.app",
    link: "https://fishit.vercel.app/",
    description:
      "Companion web where items purchased in the marketplace are automatically sent to the player's inventory in game through websockets technology",
    techStack: ["next.js", "typescript", "tailwind", "mongoDB"],
    cardPicture: "/assets/projects/project-1-fishit/fishit-landing.png",
    picture: "/assets/projects/fishit.png",
  },

  {
    title: "Fishit.app",
    link: "https://fishit.vercel.app/",
    description:
      "Companion web where items purchased in the marketplace are automatically sent to the player's inventory in game through websockets technology",
    techStack: ["next.js", "typescript", "tailwind", "mongoDB"],
    cardPicture: "/assets/projects/project-1-fishit/fishit-landing.png",
    picture: "/assets/projects/fishit.png",
  },
];

export default projects;
