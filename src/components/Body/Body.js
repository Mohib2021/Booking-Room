import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import House from "../House/House";

function Body() {
	const [house, setHouse] = useState([]); // storing data after clicking
	const [booking, setBooking] = useState([]); // storing data after loading
	//loading data from public file
	useEffect(() => {
		fetch("./data.JSON")
			.then((res) => res.json())
			.then((data) => setHouse(data));
	}, []);
	// declaring function which will execute after clicking
	const handleBooking = (house) => {
		setBooking([...booking, house]);
	};

	return (
		<div className="row my-4">
			<div className="col-md-9 col-sm-6 col-6">
				<House handleBooking={handleBooking} houses={house} />
			</div>
			<div className="col-md-3 col-sm-6 col-6">
				<Booking bookings={booking} />
			</div>
		</div>
	);
}

export default Body;
