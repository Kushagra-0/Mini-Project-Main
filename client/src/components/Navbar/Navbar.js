import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
                <Link to='/' className=" font-semibold text-2xl p-1 cursor-pointer">
                    WELLNESS.IO
                </Link>
            </div>
            <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
                <Link 
                    to='/meditation'
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    Meditation
                </Link>
                <Link 
                    to='/login'
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    Login
                </Link>
                <Link 
                    to='/register'
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    Register
                </Link>
            </nav>
        </div>
    </div>
  )
}