import React from "react";
import "./Booking.css";
function Booking(props) {
	const { bookings } = props;
	let bookingPrice = 0;
	for (const booking of bookings) {
		bookingPrice += booking.costPerRoom;
	}
	return (
		<div className="booking-info bg-dark p-3 rounded text-white">
			<h6>Total booking : {bookings.length}</h6>
			<h5>Total Cost : ${bookingPrice}</h5>
			<div>
				<h4>Booking Info :</h4>
				<ul>
					{bookings.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Booking;
