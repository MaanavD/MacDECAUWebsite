import React, { useEffect, useState } from "react";
import Alert from "./Alert";
// import { resources } from "./Arrays";
import axios from "axios";

function Resources() {
	const [resources, setResources] = useState([]);
	useEffect(() => {
		const fetchResources = async () => {
			const response = await axios.get(
				"https://deca-mcmaster-admin.herokuapp.com/resources"
			);
			setResources(response.data);
		};
		fetchResources();
	}, []);
	return (
		<div className="Resources">
			<h1 className="text-primary text-center res-title">Chapter Resources</h1>
			<div className="container">
				{resources.map((alert) => {
					return (
						<Alert
							heading={alert.Heading}
							content={alert.Content}
							link={alert.Link}
							linkWords={alert.Linkwords}
							key={alert.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default Resources;
