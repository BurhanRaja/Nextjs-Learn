import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  let navItems = [
    {
      item: "TV",
      dropItems: [
        {
          name: "Action",
          link: "/shows/genre/10759",
        },
        {
          name: "Drama",
          link: "/shows/genre/18",
        },
        {
          name: "Comedy",
          link: "/shows/genre/35",
        },
        {
          name: "Scifi",
          link: "/shows/genre/10765",
        },
        {
          name: "Family",
          link: "/shows/genre/10751",
        },
        {
          name: "Mystery",
          link: "/shows/genre/9648",
        },
        {
          name: "Documentary",
          link: "/shows/genre/99",
        },
      ],
    },
    {
      item: "Movies",
      dropItems: [
        {
          name: "Hindi",
          link: "/movies/lang/hi",
        },
        {
          name: "English",
          link: "/movies/lang/en",
        },
        {
          name: "Korean",
          link: "/movies/lang/ko",
        },
        {
          name: "Japanese",
          link: "/movies/lang/ja",
        },
      ],
    },
  ];

  const [isShow, setIsShow] = useState(false);
  const [isTvOpen, setIsTvOpen] = useState(false);
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  const handleTvOpen = () => {
    setIsTvOpen(!isTvOpen);
    setIsMovieOpen(false);
  };

  const handleMovieOpen = () => {
    setIsMovieOpen(!isMovieOpen);
    setIsTvOpen(false);
  };

  return (
    <>
      <GiHamburgerMenu
        className="hover:cursor-pointer text-xl text-white relative group/item-2 flex flex-col lg:hidden md:block sm:block min-[360px]:block"
        onClick={handleClick}
      />
      {isShow && (
        <div
          className="w-[200px] h-[100%] ham-nav top-0 left-0 fixed p-2"
          style={{ zIndex: "100" }}
        >
          <div className="flex justify-between mx-2 my-4">
            <span className="mr-3 pb-3">
              <Link href="/">
                <Image src="/logo.svg" width={120} height={120} alt="Logo" />
              </Link>
            </span>
            <button className="text-white" onClick={handleClick}>
              <MdClose className="font-bold text-lg" />
            </button>
          </div>

          {/* Items Having drop-items */}
          <ul className="flex flex-col">
            {navItems?.map((el) => {
              return (
                <li
                  key={el.item}
                  className="text-gray-300 px-4 hover:cursor-pointer relative group/item-1 py-4 text-center hover:bg-slate-700 rounded-md"
                  onClick={el.item === "TV" ? handleTvOpen : handleMovieOpen}
                >
                  <a>{el.item}</a>
                  {isMovieOpen && el.item === "Movies" && (
                    <ul
                      className={`absolute z-50 top-5 right-[-5rem] bg-slate-800 rounded-md opacity-100 translate-y-0 transition-all duration-500`}
                    >
                      {el.dropItems &&
                        el.dropItems?.map((item) => {
                          return (
                            <li
                              key={item.name}
                              className="w-auto hover:bg-black p-2 rounded-sm px-4 block"
                            >
                              <Link href={item.link}>{item.name}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                  {isTvOpen && el.item === "TV" && (
                    <ul
                      className={`absolute z-50 top-5 right-[-6rem] bg-slate-800 rounded-md opacity-100 translate-y-0 transition-all duration-500`}
                    >
                      {el.dropItems &&
                        el.dropItems?.map((item) => {
                          return (
                            <li
                              key={item.name}
                              className="w-auto hover:bg-black p-2 rounded-sm px-4"
                            >
                              <Link href={item.link}>{item.name}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}

            {/* Items not having dropItems */}
            <Link href="/disney">
              <li className="text-gray-300 px-4 hover:cursor-pointer relative group/item-1 py-4 text-center hover:bg-slate-700 rounded-md">
                Sports
              </li>
            </Link>
            <Link href="/disney">
              <li className="text-gray-300 px-4 hover:cursor-pointer relative group/item-1 py-4 text-center hover:bg-slate-700 rounded-md">
                Disney+
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
