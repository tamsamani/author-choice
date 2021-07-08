import { useEffect, useState } from "react";

export default function Index() {
	const [name, setName] = useState("MyApp");

	useEffect(() => {
		setName("Authors App");
	}, []);

	return (
		<div>
			<h3>{name}</h3>
			<p>The App where everything will show perfect. Comming Soon! exculsive for Authors.</p>
		</div>
	);
}
