import React from "react";
import { LanguageContent } from "../language/LanguageContent";

export const NavbarItem = ({label, redirect}) => {
  return (
    <>
      <li className="nav-item col-2">
        <a className="nav-link active text-center" aria-current="page" href={redirect}>
          <LanguageContent contentID={label} />
        </a>
      </li>
    </>
  );
};
