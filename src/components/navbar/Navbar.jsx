import React from "react";
import { NavbarItem } from "./NavbarItem";

const listNabvar = [
  {
    name: "biography",
    label: "lbl-biography",
    redirect: "#",
  },
  {
    name: "academicTraining",
    label: "lbl-academicTraining",
    redirect: "#",
  },
  {
    name: "projects",
    label: "lbl-projects",
    redirect: "#",
  },
  {
    name: "contactInformation",
    label: "lbl-contactInformation",
    redirect: "#",
  },
  {
    name: "cv",
    label: "lbl-cv",
    redirect: "#",
  },
];

export const Navbar = () => {
  return (
    <ul className="navbar navbar-expand sticky-top navbar-dark bg-dark bg-gradiant row justify-content-around">
      {listNabvar.map((item) => (
        <NavbarItem key={item.name} {...item} />
      ))}
    </ul>
  );
};
