import "./App.css"
import NavMenu from "./components/NavMenuComponents/NavMenu.jsx"
import GreetingText from "./components/LandingPageComponents/GreetingText.jsx"
import GreetingSkillCarousel from "./components/LandingPageComponents/GreetingSkillCarousel.jsx"
import GreetingNavButton from "./components/LandingPageComponents/GreetingNavButton.jsx"
import ProjectFontTester from "./components/TestComponents/ProjectFontTester.jsx"
import ProjectFlexBoxTester from "./components/TestComponents/ProjectFlexBoxTester.jsx"
import GreetingClock from "./components/LandingPageComponents/GreetingClock.jsx"

export default function App() {
	/* <ProjectFontTester />
	<ProjectFlexBoxTester /> */
	
    return (
        <div className="landing-page-container">
			<GreetingNavButton />
			<div className='greeting-section-container'>
				<GreetingClock />
				<GreetingText />
				<GreetingSkillCarousel />
			</div>
			<div className="menu-container">
				<NavMenu />
			</div>
        </div>
    );
}
