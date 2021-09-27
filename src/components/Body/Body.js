import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import House from "../House/House";

function Body() {
	const [house, setHouse] = useState([]);
	const [booking, setBooking] = useState([]);
	useEffect(() => {
		fetch("./data.JSON")
			.then((res) => res.json())
			.then((data) => setHouse(data));
	}, []);
	const handleBooking = (house) => {
		setBooking([...booking, house]);
	};

	return (
		<div className="row my-4">
			<div className="col-9">
				<House handleBooking={handleBooking} houses={house} />
			</div>
			<div className="col-3">
				<Booking bookings={booking} />
			</div>
		</div>
	);
}

export default Body;
