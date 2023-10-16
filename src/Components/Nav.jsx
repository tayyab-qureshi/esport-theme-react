import React from "react";
import {BsToggleOn} from 'react-icons/bs'
import {AiOutlineDown} from 'react-icons/ai'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return(
            <div className=" w-11/12 h=[100px] mx-auto pt-5 pb-5 flex items-end justify-between">
                <div className="w-1/5">
                    <img src="/img/esports-logo-removebg-preview.png" alt="" />
                </div>
                <ul className="flex text-white gap-7 items-center text-lg font-semibold">
                    <Link to="/">
                    <li className="hover:text-red-400">Home</li>
                    </Link>
                    <Link to="/news">
                    <li className="hover:text-red-400">News</li>
                    </Link>
                    <Link to="/videos">
                    <li className="hover:text-red-400">Videos</li>
                    </Link>
                    <Link to="/specialdeals">
                    <li className="hover:text-red-400">Special Deals</li>
                    </Link>
                    <Link to="/shop">
                    <li className="hover:text-red-400">Shop</li>
                    </Link>
                    <li><hr className="h-[20px] w-[2px] bg-white"/></li>
                    <li className="text-2xl"><BsToggleOn /></li>
                    <li className="flex items-center hover:text-red-400">EN<AiOutlineDown className="ml-2  text-xl"/></li>
                </ul>
            </div>
        )
    }
}
export default Nav;