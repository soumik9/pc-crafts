import { homeUrl, pcBuildUrl } from '@/config/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import CategoriesDropdown from './components/CategoriesDropdown';
import { AiOutlineDesktop, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';
import MobileMenu from './components/MobileMenu';
import { useRouter } from 'next/router';

const linkCls = 'text-white hover:text-primary-100 trans'

const Header: React.FC = () => {

    // globals
    const router = useRouter();

    // states
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // handler
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-secondary-300 py-3">
            <div className="container">
                <div className="flex items-center justify-between">

                    <Link href={homeUrl} className="text-white font-semibold text-lg flex items-center gap-2 uppercase">
                        <AiOutlineDesktop className='relative top-[1px] text-[24px]' />
                        PC Crafts
                    </Link>

                    <div className="hidden md:flex md:items-center space-x-10">

                        <Link href={homeUrl} className={classNames(linkCls)}>Home</Link>

                        <div className="relative">
                            <button onClick={toggleDropdown} className={classNames(linkCls)}>Categories</button>
                            {isDropdownOpen && <CategoriesDropdown />}
                        </div>

                        <Link href="#" className={classNames(linkCls)}>Contact</Link>

                        <div>
                            <button
                                type='button'
                                className={classNames(
                                    linkCls, 'bg-primary-700 py-1.5 px-5 rounded-md'
                                )}
                                onClick={() => router.push(pcBuildUrl)}
                            >
                                PC Builder
                            </button>
                        </div>
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