import classNames from "classnames";

type DetailedButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonColorProp = "primary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link" | "custom";

interface ButtonProps extends DetailedButtonProps {
	color?: ButtonColorProp;
	outline?: boolean;
	bordered?: boolean;
	pill?: boolean;
	edge?: boolean;
	size?: "sm" | "md" | "lg";
}

const getButtonColor = (color: ButtonColorProp) => {
	switch (color) {
		case "primary":
			return "bg-primary-300 hover:bg-primary-400 text-primary-800 hover:text-primary-900";
		case "success":
			return "bg-success-300 hover:bg-success-400 text-success-800 hover:text-success-900";
		case "warning":
			return "bg-warning-300 hover:bg-warning-400 text-warning-800 hover:text-warning-900";
		case "danger":
			return "bg-danger-300 hover:bg-danger-400 text-danger-800 hover:text-danger-900";
		case "info":
			return "bg-info-300 hover:bg-info-400 text-info-800 hover:text-info-900";
		case "light":
			return "bg-gray-50 hover:bg-gray-100 text-gray-800 hover:text-gray-700";
		case "dark":
			return "bg-stone-800 hover:bg-stone-900 text-stone-50 hover:text-stone-200";
		case "link":
			return "bg-transparent hover:bg-transparent text-primary-500 hover:text-primary-600";
		case "custom":
		default:
			return "bg-transparent hover:bg-transparent text-primary-500 hover:text-primary-600";
	}
};

const getButtonBorderColor = (color: ButtonColorProp) => {
	switch (color) {
		case "primary":
			return "border-primary-500 hover:border-primary-600";
		case "success":
			return "border-success-500 hover:border-success-600";
		case "warning":
			return "border-warning-500 hover:border-warning-600";
		case "danger":
			return "border-danger-500 hover:border-danger-600";
		case "info":
			return "border-info-500 hover:border-info-600";
		case "light":
			return "border-gray-500 hover:border-gray-600";
		case "dark":
			return "border-stone-500 hover:border-stone-600";
		case "link":
			return "border-transparent hover:border-primary-600/50";
		case "custom":
		default:
			return "border-primary-500 hover:border-primary-600";
	}
};

const getButtonOutlineColor = (color: ButtonColorProp) => {
	switch (color) {
		case "primary":
			return "text-primary-500 hover:text-primary-600";
		case "success":
			return "text-success-500 hover:text-success-600";
		case "warning":
			return "text-warning-500 hover:text-warning-600";
		case "danger":
			return "text-danger-500 hover:text-danger-600";
		case "info":
			return "text-info-500 hover:text-info-600";
		case "light":
			return "text-gray-500 hover:text-gray-600";
		case "dark":
			return "text-stone-500 hover:text-stone-600";
		case "link":
			return "text-primary-500 hover:text-primary-600";
		case "custom":
		default:
			return "text-primary-500 hover:text-primary-600";
	}
};

const getButtonRingColor = (color: ButtonColorProp) => {
	switch (color) {
		case "primary":
			return "focus-visible:ring-primary-500";
		case "success":
			return "focus-visible:ring-success-500";
		case "warning":
			return "focus-visible:ring-warning-500";
		case "danger":
			return "focus-visible:ring-danger-500";
		case "info":
			return "focus-visible:ring-info-500";
		case "light":
			return "focus-visible:ring-gray-500";
		case "dark":
			return "focus-visible:ring-stone-500";
		case "link":
			return "focus-visible:ring-primary-500";
		case "custom":
		default:
			return "focus-visible:ring-primary-500";
	}
};

const Button: React.FC<ButtonProps> = ({
	className,
	color = "primary",
	outline,
	bordered,
	edge,
	pill,
	size,
	...props
}) => {
	const extendedClass = classNames(
		pill ? "rounded-full" : edge ? "rounded-none" : "rounded-md",
		bordered
			? `border ${getButtonBorderColor(color)}`
			: outline
			? `border-2 ${getButtonBorderColor(color)}`
			: "border border-transparent",
		outline ? `bg-transparent ${getButtonOutlineColor(color)}` : getButtonColor(color),
		getButtonRingColor(color),
		size == "sm" ? "px-2 py-1 text-xs" : size == "lg" ? "px-4 py-2 text-md" : "px-3 py-1 text-sm"
	);

	return (
		<button
			className={classNames(
				"inline-flex justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
				extendedClass,
				className
			)}
			{...props}
			type={props.type || "button"}
			title={props.title}
		/>
	);
};

export default Button;
