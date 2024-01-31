import "../../styles/LandingPageComponents/GreetingSkillCarousel.css";


function GreetingSkillCarousel() {
    const skillCarouselCardInfo = {
        0: {
            name: "React",
            imgPath: "../../assets/skill-icons/atom.png"
        },
        1: {
            name: "Python",
            imgPath: "../../assets/skill-icons/python (1).png"
        },
        2: {
            name: "CSS",
            imgPath: "../../assets/skill-icons/css-3.png"
        }
    }

    /*
        - every X seconds create the next carousel card
        - animate card across carousel
    */


    return (
        <div className="greeting-skill-carousel-container">
            Skill Carousel
        </div>
    );
}

export default GreetingSkillCarousel;
