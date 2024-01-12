import "../../styles/LandingPageComponents/GreetingNavButton.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // <-- import GSAP


function GreetingNavButton() {
    let tl = useRef(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);    

    function openMenu(){
        // Set Menu Opening Animation
        if (tl.current == null){
            let menuTL = gsap.timeline({});
            menuTL.to(".greeting-nav-button", { rotation: -90, duration: 1, opacity: 100, x: "-60vw" }, 0)
            menuTL.to(".greeting-section-container", { duration: 1, opacity: 1, width: '40vw' }, 0)
            menuTL.to(".menu-container", { duration: 1, opacity: 100, width: '60vw', visibility: "visible" }, 0)
           
            tl.current = menuTL;
        }

        /* Ternary Opening/Closing Menu Animation*/
        !menuIsOpen ? tl.current.play() : tl.current.reverse()
        
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <button className="greeting-nav-button" onClick={openMenu}>{'<'}</button>
    );
}

export default GreetingNavButton;














//   import '../styles/TestComponent.css'

//   import { useRef, useState } from "react";

//   import gsap from "gsap"; // <-- import GSAP
//   import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

//   import CustomEase from 'gsap/dist/CustomEase';
//   import ButtonComponent from './ButtonComponent';

//   function TestComponent() {
// 	  const tcRef = useRef();
// 	  const [menuPopupTimeline, setMenuPopupTimeline] = useState(null);
// 	  const [menuPopupStatus, setMenuPopupStatus] = useState(false);

// 	  useGSAP(() => {
// 		  gsap.registerPlugin(CustomEase)

// 		  // let t21 = gsap.to(".testElement1", { duration: 2, opacity: 100, width: '100vw' });
// 		  // let t22 = gsap.to(".testElement2", { duration: 2, opacity: 100, width: '100vw' });
// 		  // let t23 = gsap.to(".testElement3", { duration: 2, opacity: 100, width: '100vw' });

// 	  }, { scope: tcRef }) // <-- scope for selector text (optional)

// 	  function popMenuOut(){
// 		  if (menuPopupTimeline == null){
// 			  var tl = gsap.timeline({});
// 			  tl.to(".testElement1", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '48%', y:'48%', height: '25em', width: '50em' }, 0);
// 			  tl.to(".testElement2", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '49%', y:'49%', height: '25em', width: '50em' }, 0);
// 			  tl.to(".testElement3", { rotation: 0, borderRadius: '5em', duration: 1, opacity: 100, x: '50%', y:'50%', height: '25em', width: '50em' }, 0);
// 			  setMenuPopupTimeline(tl);
// 		  }

// 		  if (!menuPopupStatus){ /*Opening Menu Animation*/
// 			  menuPopupTimeline.play();
// 		  }
// 		  if (menuPopupStatus) { /* Closing Menu Animation */
// 			  menuPopupTimeline.reverse();
// 		  }
// 		  setMenuPopupStatus(!menuPopupStatus);
// 	  }

// 	 return (
// 	  <div ref={tcRef}>
// 		  <ButtonComponent onClick={popMenuOut}/>
// 		  <div className="te circle testElement1" />
// 		  <div className="te circle testElement2" />
// 		  <div className="te circle testElement3">
// 			  <h1 className='nav-text-header'>Welcome</h1>
// 			  <p className='text-body'>Text body goes here.</p>
// 		  </div>
// 	  </div>

// 	 );
//   }

//   export default TestComponent
