import "../../styles/LandingPageComponents/GreetingNavButton.css";

function GreetingNavButton() {
    return <button className="greeting-nav-button">{'<'}</button>;
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
