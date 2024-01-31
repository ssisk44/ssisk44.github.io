import "./App.css"
import NavMenu from "./components/NavMenuComponents/NavMenu.jsx"
// import GreetingSkillCarousel from "./components/LandingPageComponents/GreetingSkillCarousel.jsx"
// import ProjectFontTester from "./components/TestComponents/ProjectFontTester.jsx"
// import ProjectFlexBoxTester from "./components/TestComponents/ProjectFlexBoxTester.jsx"
// import GreetingClock from "./components/LandingPageComponents/GreetingClock.jsx"
import ProjectCards from "./components/LandingPageComponents/ProjectCards.jsx"

export default function App() {
	/* <ProjectFontTester />
	<ProjectFlexBoxTester /> */
	//<GreetingClock />

    return (
        <div className="landing-page-container" >
			<NavMenu />
			<ProjectCards />
        </div>
    );
}
