import React from 'react'
import '../../styles/NavMenu/NavMenu.css'
import NavMenuNavSection from './NavMenuNavSection'
import NavMenuDownloadsSection from './NavMenuDownloadsSection'
import NavMenuSocialsSection from './NavMenuSocialsSection'


function NavMenu() {
  return (
	<div className='menu-section-container'>
		<p>Hello</p>
		<NavMenuNavSection />
		<NavMenuDownloadsSection />
		<NavMenuSocialsSection />
		<p>Goodbye</p>
	</div>
  )
}

export default NavMenu