import React from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
// TODO add animations
function NavLinks() {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/Link3">Link3</NavLink>
    </>
  )
}

export default function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <nav className="flex w-1/3 justify-end">
        <div className="hidden gap-8 md:flex justify-between">
            <NavLinks />
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
    </nav>
    {isOpen && (
        <div className="flex flex-col items-center basis-full">
            <NavLinks />
        </div>
    )}
    </>
  )
}
