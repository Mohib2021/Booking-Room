import React from "react";
import ShowHouse from "../ShowHouse/ShowHouse";

function House(props) {
	// destructuring props
	const { houses } = props;
	const { handleBooking } = props;

	return (
		<div className="row g-4">
			{houses.map((house) => {
				return (
					<ShowHouse
						key={house.holding}
						handleBooking={handleBooking}
						house={house}
					/>
				);
			})}
		</div>
	);
}

export default House;
