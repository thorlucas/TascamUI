import React from "react";

interface SayHelloProps {
	name: string,
}

export const SayHello: React.FC<SayHelloProps> = ({
	name,
}) => {
	return (
		<div>
			Hey {name}!
		</div>
	);
};
