import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

const Button = ({ children }: any) => {
  return (
    <>
      <button
        type="button"
        className="text-mytext bg-mysecondary p-2 rounded-md"
      >
        {children}
      </button>
    </>
  );
};

const Contact = () => {
  return (
    <div className="section" id="contact">
      <h2 className="title">Want to get in contact?</h2>
      <h3 className="text-center mb-4">You can find me here</h3>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-2">
          <Button>
            <Tooltip
              content="Click to go to google mail!"
              className="bg-myprimary text-mytext"
              placement="top-end"
              closeDelay={200}
            >
              <Link href="https://mail.google.com/" target="_blank">
                luduve97@gmail.com
              </Link>
            </Tooltip>
          </Button>
          <Button>
            <Link href="https://github.com/treee97" target="_blank">
              My github
            </Link>
          </Button>
          <p className="text-center">
            You can get my <span className="text-myprimary underline">CV</span>{" "}
            and <span className="text-myprimary underline">Linkedin</span> by
            sending me an email!
          </p>
          <p className="text-mytext">
            This portfolio is not complete yet. Thanks for checking out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
