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
    name: "experience",
    label: "lbl-experience",
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

const animation = {
  initial: {
    y: "100%",
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1
  },
  transition: {
    duration: 0.6
  }
}

export const Navbar = () => {
  return (
    <ul className="navbar navbar-expand sticky-top navbar-dark bg-dark bg-gradiant row justify-content-around p-3">
      {listNabvar.map((item) => {
        return <NavbarItem key={item.name} {...item} animation={animation} />
      })}
    </ul>
  );
};
