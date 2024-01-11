// import "../../styles/NavMenu/

import React from 'react'
import { useRef, useState } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

import CustomEase from 'gsap/dist/CustomEase';
import ButtonComponent from './ButtonComponent';


function Menu() {
	const [menuPopupTimeline, setMenuPopupTimeline] = useState(null);
	const [menuPopupStatus, setMenuPopupStatus] = useState(false);

	// useGSAP(() => {
	// 	gsap.registerPlugin(CustomEase)
	// }, { scope: tcRef }) // <-- scope for selector text (optional)

	function popMenuOut(){		
		if (menuPopupTimeline == null){
			var tl = gsap.timeline({});
			tl.to(".testElement1", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '48%', y:'48%', height: '25em', width: '50em' }, 0);
			tl.to(".testElement2", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '49%', y:'49%', height: '25em', width: '50em' }, 0);
			tl.to(".testElement3", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '50%', y:'50%', height: '25em', width: '50em' }, 0);
			setMenuPopupTimeline(tl);
		}
		
		if (!menuPopupStatus){ /*Opening Menu Animation*/
			menuPopupTimeline.play();
		} 
		if (menuPopupStatus) { /* Closing Menu Animation */
			menuPopupTimeline.reverse();
		}
		setMenuPopupStatus(!menuPopupStatus);
	}
  
	return (
		<div className='nav-menu-container'>
			Nav Menu Nav Section
		</div>
	)
}


export default Menu