import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineDesktop } from 'react-icons/ai';
import { homeUrl } from "@/config/constants";
import classNames from 'classnames';
import CategoriesDropdown from "./CategoriesDropdown";
import { FiChevronRight } from 'react-icons/fi'

type Props = {
    setShowSideNav: (showSideNav: boolean) => void;
    showSideNav: boolean;
};

const linkCls = 'text-primary-800 text-[18px] font-medium'

const MobileMenu = ({ setShowSideNav }: Props) => {

    const router = useRouter();

    // states
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    //   handler
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <>
            <div className="navbar-backdrop block lg:!hidden fixed inset-0 bg-gray-800 opacity-25"></div>

            <div className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(0,0,0,0.3)] flex justify-end md:justify-start ">
                <nav className="flex flex-col md:w-full w-[285px] h-full py-[40px] bg-white overflow-y-auto relative ">
                    <div className="md:mt-[60px] mt-[30px]">


                        <Link href={homeUrl} className="text-primary px-[40px] font-semibold text-lg flex items-center gap-2 mb-5">
                            <AiOutlineDesktop className='relative top-[1px]' />
                            PC Crafts
                        </Link>


                        <div className="flex flex-col px-[40px] space-y-4">
                            <Link href={homeUrl} className={classNames(linkCls)}>Home</Link>

                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className={classNames(linkCls, 'flex items-center gap-1')}
                                >
                                    Categories <FiChevronRight />
                                </button>
                                {isDropdownOpen && <CategoriesDropdown />}
                            </div>

                            <Link href="#" className={classNames(linkCls)}>Contact</Link>
                        </div>
                    </div>
                </nav>

                {/* Mobile Close Button */}
                <div
                    className="md:hidden block absolute right-4 top-[15px] cursor-pointer"
                    onClick={() => setShowSideNav(false)}
                >
                    <AiOutlineClose />
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
