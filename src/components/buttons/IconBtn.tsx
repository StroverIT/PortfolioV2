import Link from "next/link";
import React from "react";

export default function IconBtn({
  type = "button",
  text,
  icon,
  onClick,
  link,
  linkProps,
  isLoading,
}: {
  type: string | "button";
  text: string;
  link?: string;
  linkProps?: string;
  icon: JSX.Element;
  isLoading: boolean;
  onClick?: () => void;
}) {
  return (
    <IsLink linkProps={linkProps} link={link}>
      <button
        type={type}
        onClick={onClick}
        className={`${!isLoading && "pl-4"} w-full bg-cyan-600 rounded-full pr-2  py-1  flex items-center justify-between group cursor-pointer hover:shadow-xl hover:scale-110 transition-transform duration-500`}
      >
        {!isLoading ? (
          <>
            <div className=" font-semibold text-white ">{text}</div>
            <div className="bg-white rounded-full p-1 text-lg ml-4 group-hover:rotate-[360deg] group-hover:scale-125 transition-transform duration-500">
              {icon}
            </div>
          </>
        ) : (
          <div className="loader flex items-center justify-center w-full"></div>
        )}
      </button>
    </IsLink>
  );
}

const IsLink = ({ linkProps = [], link = "#", children }) => {
  const isNormalLink = Object.keys(linkProps).some((key) => key == "download");

  if (isNormalLink) {
    return (
      <a href={link} {...linkProps}>
        {children}
      </a>
    );
  } else {
    return <Link href={link}>{children}</Link>;
  }
};
