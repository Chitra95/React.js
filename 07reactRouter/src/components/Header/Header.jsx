import React from 'react'
import {Link,NavLink} from 'react-router-dom'
/*INTERVIEW*/
//we can see <Link> and <NavLink> in this header code

// if we install react-router-dom we get them by default <Link> and <NavLink> so import them
//Link-used in place of <a> tag,  <a> use kiya tho pura page refresh hota h,react mai refresh concept nhi h dom jata hai and replace krta h nodes ko

//NavLink-gives additional features
//NavLink classsName callback mai likhe in backticks``    className={() =>`..` }
//to make color highlighting ki hum yehi page pe h in nav bar

//Link mai "href" ke place mai "to" hai

//if we install react we get them by default-useState ,useEffect



export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* LI for HOME */}
                            <li>
                                <NavLink

                                    to="/"   //batane ke liye ki hum jaa kaha rhe h

                                    //you have direct access to variable "isActive"
                                    className={ ({isActive})=> //isActive compare krta h url se ki hum hai kaha so that vo highlight kare text ko
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700":"text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            {/* Li for ABOUT */}
                            <li>
                                <NavLink

                                to="/about"  //batane ke liye ki hum jaa kaha rhe h   url mai /about ayega

                                    //you have direct access to variable "isActive"
                                    className={ ({isActive})=>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700":"text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                              {/* Li for CONTACT */}
                              <li>
                                <NavLink

                                to="/contact"  //batane ke liye ki hum jaa kaha rhe h   url mai /about ayega

                                    //you have direct access to variable "isActive"
                                    className={ ({isActive})=>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700":"text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            {/* Li for Github */}
                            <li>
                                <NavLink

                                to="/github"  //batane ke liye ki hum jaa kaha rhe h   url mai /about ayega

                                    //you have direct access to variable "isActive"
                                    className={ ({isActive})=>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700":"text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

