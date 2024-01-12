import { useEffect, useState } from "react";
import "../../styles/LandingPageComponents/GreetingClock.css";

function GreetingClock() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date());
		}, 1000)
	
		return () => clearInterval(intervalId);
	}, [])

    return (
		<div className="greeting-clock">{date.toLocaleTimeString()}</div>
	)
}

export default GreetingClock;
