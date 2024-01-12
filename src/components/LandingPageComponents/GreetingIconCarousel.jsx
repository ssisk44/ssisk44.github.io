import "../../styles/LandingPageComponents/GreetingIconCarousel.css";
import githubIcon from '../../assets/social-icons/github-sign.png';
import linkedInIcon from '../../assets/social-icons/linkedin.png';
import twitterIcon from '../../assets/social-icons/twitter.png';

function GreetingIconCarousel() {
    return (
        <div className="greeting-icon-carousel-container">
            <a className="carousel-card" href="https://github.com/ssisk44">
                <img src={githubIcon}  />
            </a>
            <a className="carousel-card" href="https://www.linkedin.com/in/samuelrobertsisk/">
                <img src={linkedInIcon} />
            </a>
            <a className="carousel-card" href="https://twitter.com/sisk_sam">
                <img src={twitterIcon} />
            </a>
        </div>
    )
}

export default GreetingIconCarousel;
