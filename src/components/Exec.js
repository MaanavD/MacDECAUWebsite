import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { exec } from "./Arrays";
import axios from "axios";

function Exec() {
	const [executive, setExec] = useState([]);
	useEffect(() => {
		const fetchExecs = async () => {
			const response = await axios.get(
				"https://deca-mcmaster-admin.herokuapp.com/executives"
			);
			setExec(response.data);
		};
		fetchExecs();
	}, []);
	return (
		<div className="Exec" align="center">
			<h1 className="text-primary text-center exec-title">
				Meet our Executive
			</h1>
			<div className="container exec-container">
				<div className="card-deck">
					{executive.map((person) => {
						console.log(person);
						return (
							<Card
								link1={"Email"}
								link2={"LinkedIn"}
								link1link={"mailto:" + person.Email}
								link2link={person.LinkedIn}
								image={person.ImageLink}
								name={person.Name}
								position={person.Position}
								description={person.Description}
								key={person.ImageLink}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Exec;
