import React from "react";
import "./ShowHouse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faPhone } from "@fortawesome/free-solid-svg-icons";

function ShowHouse(props) {
	const home = <FontAwesomeIcon icon={faHouseUser} />;
	const phone = <FontAwesomeIcon icon={faPhone} />;
	const { house } = props;
	const { handleBooking } = props;
	const { name, img, AC, capacity, costPerRoom, rooms } = house;

	return (
		<div className="col-4">
			<div className="bg-dark p-2 rounded text-white house">
				<div className="text-center">
					<img className="img rounded" src={img} alt="house" />
				</div>
				<div className="my-2 desc">
					<h6 className="mb-3">Name : {name}</h6>
					<p>Air Condition : {AC}</p>
					<p>Total Room : {rooms}</p>
					<p>Total Capacity : {capacity}</p>
					<p>Cost per room : ${costPerRoom}</p>
					<button onClick={() => handleBooking(house)} className="booking-btn">
						{home} Booking House
					</button>
					<br />
					<br />
					<p>
						{phone} <i>+889384582</i>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ShowHouse;
