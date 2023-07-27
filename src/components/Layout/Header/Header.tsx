import { homeUrl } from '@/config/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import CategoriesDropdown from './components/CategoriesDropdown';
import { AiOutlineDesktop } from 'react-icons/ai'
import classNames from 'classnames';

const linkCls = 'text-white hover:text-primary-100 trans'

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-secondary-300 py-3.5">
            <div className="container">
                <div className="flex items-center justify-between">

                    <Link href={homeUrl} className="text-white font-semibold text-lg flex items-center gap-2">
                        <AiOutlineDesktop className='relative top-[1px]' />
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

                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleDropdown} className="text-white">
                            hi
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header;