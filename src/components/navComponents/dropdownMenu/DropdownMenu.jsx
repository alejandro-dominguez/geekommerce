import { Link } from 'react-router-dom';
import { CartWidget } from "../../";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenu = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center
            gap-4 md:gap-0 absolute md:static top-0">
            <li className="dropdown relative">
                <button type="button" className="btnNav relative flex justify-between items-center
                px-3 hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                    Informática
                    <IoIosArrowDown className="dropdownArrow -rotate-90 text-[#1a66ff]" />
                </button>
                <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                    <button type="button" className='btnLink'>
                        <Link to="/category/notebooks">
                            <div className="grid place-items-center cursor-pointer hover:text-slate-900
                            hover:bg-slate-200 h-14 w-36">
                                Notebooks
                            </div>
                        </Link>
                    </button>
                    <Link to="/category/tablets">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Tablets
                        </div>
                    </Link>
                </div>
            </li>
            <li className="dropdown relative">
                <button type="button" className="btnNav relative flex justify-between items-center
                px-3 hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                    Periféricos
                    <IoIosArrowDown className="dropdownArrow -rotate-90 text-[#1a66ff]" />
                </button>
                <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                    <Link to="/category/mouses">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Mouses
                        </div>
                    </Link>
                    <Link to="/category/teclados">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Teclados
                        </div>
                    </Link>
                    <Link to="/category/auriculares">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Auriculares
                        </div>
                    </Link>
                    <Link to="/category/microfonos">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36 rounded-b-md">
                            Micrófonos
                        </div>
                    </Link>
                </div>
            </li>
            <li className="dropdown relative">
                <button type="button" className="btnNav relative flex justify-between items-center
                px-3 hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                    Accesorios
                    <IoIosArrowDown className="dropdownArrow -rotate-90 text-[#1a66ff]" />
                </button>
                <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                    <Link to="/category/sillas">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Sillas
                        </div>
                    </Link>
                    <Link to="/category/mousepads">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36">
                            Mouse pads
                        </div>
                    </Link>
                    <Link to="/category/lentes">
                        <div className="grid place-items-center cursor-pointer hover:text-slate-900
                        hover:bg-slate-200 h-14 w-36 rounded-b-md">
                            Lentes
                        </div>
                    </Link>
                </div>
            </li>
            <li className="relative grid place-items-center ml-0 md:ml-8">
                <CartWidget />
            </li>
        </div>
    )
}

export default DropdownMenu;
