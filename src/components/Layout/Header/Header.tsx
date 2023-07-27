import { homeUrl } from '@/config/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import CategoriesDropdown from './components/CategoriesDropdown';
import { AiOutlineDesktop, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';
import MobileMenu from './components/MobileMenu';

const linkCls = 'text-white hover:text-primary-100 trans'

const Header = () => {

    // states
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);


    return (
        <nav className="bg-secondary-300 py-3.5">
            <div className="container">
                <div className="flex items-center justify-between">

                    <Link href={homeUrl} className="text-white font-semibold text-lg flex items-center gap-2">
                        <AiOutlineDesktop className='relative top-[1px] text-[24px]' />
                        PC Crafts
                    </Link>

                    <div className="hidden md:flex space-x-10">

                        <Link href={homeUrl} className={classNames(linkCls)}>Home</Link>

                        <div className="relative">
                            <button onClick={toggleDropdown} className={classNames(linkCls)}>Categories</button>
                            {isDropdownOpen && <CategoriesDropdown />}
                        </div>

                        <Link href="#" className={classNames(linkCls)}>Contact</Link>
                    </div>

                    {/* Mobile menu (hamburger) */}
                    <div className="md:hidden relative top-[3px]">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>

                </div>
            </div>


            {/* mobile navbar menu */}
            <div
                className={`navbar-menu relative md:z-[99] z-[999] lg:hidden ${isMobileMenuOpen ? "block" : "hidden"
                    }`}
            >
                <MobileMenu
                    setShowSideNav={setMobileMenuOpen}
                    showSideNav={isMobileMenuOpen}
                />
            </div>
        </nav>
    );
};

export default Header;