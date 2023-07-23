"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dropdown } from "@nextui-org/react";

const Nav = () => {
  //standard nav code
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [padding, setPadding] = useState("p-4");

  const handleNav = () => {
    setNav(!nav);
  };

  //implementing clicking outside nav comp to close
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (nav && ref.current && !ref.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [nav]);

  const router = useRouter();
  const goToMember = (e) => {
    e.preventDefault();
    router.push("/members");
  };

  return (
    <div className="left-0 top-0 w-full z-10 ease-in duration-300 border-b-[1px] border-gray-400 bg-white absolute">
      <div
        className={`md:px-10 lg:px-20 z-50 m-auto flex md:grid md:grid-cols-5 xl:grid-cols-10 justify-between items-center ${padding} text-white`}
      >
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          className=" md:pl-10 md:col-span-1 xl:col-span-3"
        ></Link>
        <ul
          style={{ color: `${textColor}` }}
          className={`hidden sm:flex md:col-span-5 xl:col-span-7`}
        >
          <li className="p-4 px-1 md:px-6 xl:px-8">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group"
            >
              <span className="hover:text-blue-700">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="py-2 xl:p-2 pt-[10px] hover:text-blue-700">
            <Dropdown>
              <Dropdown.Button light color={textColor}>
                <div className=" cursor-point font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group ">
                  Services
                </div>
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                css={{ minWidth: "max-content" }}
              >
                <Dropdown.Item key="new">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Our Location</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="copy">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Contact Us</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="edit">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>FAQ</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="py-2 xl:p-2 pt-[10px] hover:text-blue-700">
            <Dropdown>
              <Dropdown.Button light color={textColor}>
                <div className="cursor-point font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group ">
                  Pricing
                </div>
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                css={{ minWidth: "max-content" }}
              >
                <Dropdown.Item key="new">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Our Location</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="copy">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Contact Us</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="edit">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>FAQ</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="p-4 px-1 md:px-6  xl:px-8">
            <Link
              activeClass="active"
              to="booking"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group "
            >
              <span className="hover:text-blue-700">🔍Search</span>

              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          <li className="p-4 px-1 md:px-6  xl:px-8">
            <span
              className="cursor-pointer font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group "
              onClick={goToMember}
            >
              <span className="hover:text-blue-700">Login</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
            </span>
          </li>
          <li className="p-4 px-6 xl:px-8">
            <Link
              activeClass="active"
              to="booking"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-bold text-md sm:text-sm lg:text-base xl:text-lg relative group "
            >
              <span className="hover:text-blue-700">Sign Up</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-4 px-1 md:px-6 xl:px-8">
            <Link
              activeClass="active"
              to="booking"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer text-md sm:text-xs md:text-sm lg:text-base xl:text-lg relative group bg-blue-600 font-bold items-center hover:bg-blue-900 text-white px-2 py-4 md:px-6 md:py-4 border rounded-full "
            >
              Request Demo
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={24} style={{ color: `${"black"}` }} />
          ) : (
            <AiOutlineMenu size={24} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          ref={ref}
          className={
            nav
              ? "sm:hidden absolute top-0 left-[50%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
          }
        >
          <ul className="my-14 px-5 border-t-2 border-b-2 font-sansSerif">
            <li className="p-4 text-lg font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li className="pt-2 pb-2 text-md font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                <Dropdown css={{ padding: 0 }}>
                  <Dropdown.Button
                    light
                    color={textColor}
                    css={{ paddingLeft: 16, fontWeight: "$bold" }}
                  >
                    <span className=" text-lg ">Services</span>
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Static Actions"
                    css={{ minWidth: "max-content" }}
                  >
                    <Dropdown.Item key="new">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>Our Location</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="copy">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>Contact Us</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="edit">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>FAQ</span>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </li>
            <li className="pt-2 pb-2 text-md font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                <Dropdown css={{ padding: 0 }}>
                  <Dropdown.Button
                    light
                    color={textColor}
                    css={{ paddingLeft: 16, fontWeight: "$bold" }}
                  >
                    <span className=" text-lg ">Pricing</span>
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Static Actions"
                    css={{ minWidth: "max-content" }}
                  >
                    <Dropdown.Item key="new">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>Our Location</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="copy">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>Contact Us</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="edit">
                      <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        offset={-63}
                        duration={500}
                        className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                      >
                        <span>FAQ</span>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </li>
            <li className="p-4 text-lg font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="booking"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                Search
              </Link>
            </li>
            <li className="p-4 text-lg font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="booking"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                Login
              </Link>
            </li>
            <li className="p-4 text-lg font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="booking"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                Sign Up
              </Link>
            </li>
            <li className="p-4 text-lg font-bold hover:text-gray-500 cursor-pointer">
              <Link
                activeClass="active"
                to="booking"
                smooth={true}
                offset={-63}
                duration={500}
                onClick={handleNav}
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
