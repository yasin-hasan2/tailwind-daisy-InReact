// import React from 'react';
import { useState } from "react";
import Link from "../link/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//
const NabBar = () => {
  const [open, setOpen] = useState([false]);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div className="md:hidden mb-3 text-2xl " onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex rounded-lg absolute md:static bg-sky-400 duration-1000
       ${open ? "top-20" : "-top-60"} shadow-md shadow-slate-600`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}>
            {" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NabBar;
