import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from '../../';
import { IoMdMenu, IoIosClose } from "react-icons/io";
import headerLogo from '../../../assets/logo-header.svg';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="z-50 w-full fixed bg-white/80 backdrop-blur-md h-[67.5px] text-slate-700">
            <div className="navBarFlexBox">
                <Link to="/">
                    <div className="w-[6.5rem]">
                        <img src={headerLogo} alt="Geekommerce logo" className="w-full block" />
                    </div>
                </Link>
                <div className='flex md:hidden justify-center items-center h-full'>
                    {!showMenu ? <IoMdMenu color='#ff7c1a' size={38} onClick={() => setShowMenu(true)} />
                    : <IoIosClose color='#ff7c1a' size={45} onClick={() => setShowMenu(false)} />}
                </div>
                <ul className={!showMenu ? "navBarUl -left-full" : "navBarUl left-0"}>
                    <DropdownMenu />
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
