import "./App.css"
// import { useState } from "react"
import GreetingIconCarousel from "./components/LandingPageComponents/GreetingIconCarousel.jsx"
import GreetingText from "./components/LandingPageComponents/GreetingText.jsx"
import GreetingSkillCarousel from "./components/LandingPageComponents/GreetingSkillCarousel.jsx"
import GreetingNavButton from "./components/LandingPageComponents/GreetingNavButton.jsx"
import ProjectFontTester from "./components/TestComponents/ProjectFontTester.jsx"
import ProjectFlexBoxTester from "./components/TestComponents/ProjectFlexBoxTester.jsx"

// import NavMenu from "./components/NavMenu.jsx"

export default function App() {
	// // Component STATES
	// const [menuPopoutStatus, setMenuPopoutStatus] = useState(false);

	// // ANIMATION STATES
	// const [menuButtonPopupTimeline, setMenuPopupTimeline] = useState(null); // Menu Button Open Close Animation
	// const [menuPopupTimeline, setMenuPopupTimeline] = useState(null); // Menu Open Close Animation

	/* <ProjectFontTester />
	<ProjectFlexBoxTester /> */
	
    return (
        <div className="landing-page-container">
			<GreetingNavButton />
			<div className='greeting-section-container'>
				<GreetingIconCarousel />
				<GreetingText />
				<GreetingSkillCarousel />
			</div>
			<div className="menu-section-container">
				Menu Section
			</div>
        </div>
    );
}



// return (
// 	<span className="landing-page-container">
// 		<div className='greeting-section-container'>
// 			<GreetingIconCarousel />
// 			<GreetingText />
// 			<GreetingSkillCarousel />
// 			<GreetingNavButton />
// 		</div>
// 		<div className="menu-section-container">
// 			<NavMenu />
// 		</div>
		
// 	</span>
// );
