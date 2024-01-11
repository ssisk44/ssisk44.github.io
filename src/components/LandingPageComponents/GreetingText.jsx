import "../../styles/LandingPageComponents/GreetingText.css";

function GreetingText() {
    return (
        <div className="greeting-text-container">
            <div className="greeting-text-section gt-intro-section">
                <p className="greeting-text gt-swoosh">------</p>
                <h3 className="greeting-text gt-intro">{"Hello, I'm"}</h3>
            </div>
            <div className="greeting-text-section gt-name-section">
                <h1 className="greeting-text gt-name">Samuel Sisk</h1>
            </div>
            <div className="greeting-text-section">
                <h5 className="greeting-text gt-job-role">Full Stack Software Engineer</h5>
            </div>
        </div>
    )
}

export default GreetingText;
