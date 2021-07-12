import Button from "components/Button";
import useDex from "hooks/useDex";
import { useEffect, useState } from "react";

function Index() {
	const [name, setName] = useState("MyApp");

	useEffect(() => {
		setName("Authors App");
	}, []);

	const dex = useDex();

	return (
		<div className="h-full min-h-screen bg-yellow-50 text-primary-900 bg-pattern-square">
			<div className="flex flex-col h-full min-h-screen content-between">
				<div className="flex justify-between">
					<div className="text-primary-500 font-bold">{name}</div>
					<div></div>
					<div className="flex gap-2">
						<Button color="red" light>
							Log In
						</Button>
						<Button light outline>
							Sign In
						</Button>
					</div>
				</div>
				<div className="flex-grow">Content</div>
				<div>
					<div>Footer</div>
					<div>{dex.language}</div>
				</div>
			</div>
		</div>
	);
}

// add menu list

export default Index;
