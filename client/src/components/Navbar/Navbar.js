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
            <nav>
                <Link to='/meditation'>Meditation</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    </div>
  )
}