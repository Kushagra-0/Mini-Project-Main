import React from 'react'
import { Icon } from '@iconify/react'
import NavOptions from './NavOptions'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = ({ openSettings, hideIcons, isMeditation, triggerReset, intervalCount, sessionCount, openMeditation }) => {
  return (
    <div id="navbar" className=" p-5  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

      <div>
        <Link to='/' className=" font-semibold text-2xl p-1 cursor-pointer">
          WELLNESS.IO
        </Link>
      </div>


      {isMeditation &&
        <Icon id="close-meditation" className="icon" icon="mdi:keyboard-backspace" height={35} onClick={() => openMeditation()} />
      }
      <NavOptions
        triggerReset={triggerReset}
        intervalCount={intervalCount}
        sessionCount={sessionCount}
        hideIcons={hideIcons || isMeditation}
        openMeditation={openMeditation}
      />
      <Icon
        id="settings"
        className="icon"
        icon="fa-solid:user-clock"
        height={25}
        onClick={() => openSettings()}
        style={{ visibility: isMeditation ? 'hidden' : 'visible' }}
      />
    </div>
  )
}

export default Navbar