import "../../styles/LandingPageComponents/GreetingText.css";

function GreetingText() {
    return (
        <div className="greeting-text-container">
            <div className="greeting-text-upper-container">
                <p className="greeting-text greeting-text-upper">------</p>
                <h3 className="greeting-text greeting-text-upper">{"Hello, I'm"}</h3>
            </div>
            <h1 className="greeting-text">Samuel Sisk</h1>
            <h5 className="greeting-text">Full Stack Software Engineer</h5>
        </div>
    )
}

export default GreetingText;
