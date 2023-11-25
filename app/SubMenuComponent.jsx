"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SubMenuComponent = ({ menu }) => {
  const myref = useRef();
  const [menustatus, setMenuStatus] = useState([]);

  useEffect(() => {
    function removeMenu(event) {
      if (myref.current && !myref.current.contains(event.target)) {
        setMenuStatus([]);
      }
    }

    window.addEventListener("mousedown", removeMenu);

    //Cleanup
    return function cleanupListener() {
      window.removeEventListener("mousedown", removeMenu);
    };
  });

  return (
    <div>
      <ul className="flex justify-center items-center">
        {menu.map((item) => {
          return (
            <CreateMenu
              item={item}
              depth={0}
              menustatus={menustatus}
              setMenuStatus={setMenuStatus}
              myref={myref}
            />
          );
        })}
      </ul>
    </div>
  );
};

const CreateMenu = ({ item, depth, menustatus, setMenuStatus, myref }) => {
  const handleMouseEnter = (item, depth) => {
    if (depth == 0) {
      setMenuStatus([]);
    }

    if (item.submenu) {
      setMenuStatus((oldArray) => [...oldArray, item.id]); // pushing id in array
    }
  };

  if (item.submenu) {
    return (
      <li
        ref={myref}
        onMouseEnter={(e) => handleMouseEnter(item, depth)}
        className="relative border-2 border-gray-300 px-3 py-2 bg-black text-white"
      >
        <Link href={item.link}>{item.title}</Link>

        <ul
          className={` ${
            menustatus.find((v) => v === item.id) ? "block" : "hidden"
          }  ${
            depth == 0 ? "top-10 left-0" : "left-0 top-0 ml-[calc(100%)] "
          } absolute  `}
        >
          {item.submenu.map((subitem) => {
            return (
              <CreateMenu
                item={subitem}
                depth={depth + 1}
                menustatus={menustatus}
                setMenuStatus={setMenuStatus}
                myref={myref}
              />
            );
          })}
        </ul>
      </li>
    );
  } else {
    return (
      <li
        onMouseEnter={(e) => handleMouseEnter(item, depth)}
        className="border-2 border-gray-300 px-3 py-2 bg-black text-white"
      >
        <Link href={item.link}>{item.title}</Link>
      </li>
    );
  }
};

export default SubMenuComponent;
