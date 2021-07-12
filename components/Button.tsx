// import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	color?: string;
	outline?: boolean;
	bordered?: boolean;
	pill?: boolean;
	edge?: boolean;
	light?: boolean;
}

function Button({ className, color = "primary", outline, bordered, edge, pill, light, ...props }: ButtonProps) {
	const extendedClass = classNames(
		pill ? "rounded-full" : edge ? "rounded-none" : "rounded-md",
		bordered
			? `border border-${color}-${light ? "400" : "500"}`
			: outline
			? `border-2 border-${color}-500`
			: "border border-transparent",
		outline
			? `bg-transparent text-${color}-500`
			: light
			? `bg-${color}-100 hover:bg-${color}-200 text-${color}-800`
			: `bg-${color}-300 hover:bg-${color}-400 text-${color}-900`,
		`focus-visible:ring-${color}-500`
	);

	return (
		<button
			className={classNames(
				"inline-flex justify-center px-4 py-2 text-sm  font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
				extendedClass,
				className
			)}
			{...props}
		/>
	);
}

export default Button;
