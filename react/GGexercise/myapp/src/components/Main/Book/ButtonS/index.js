import React from "react";
import Button from "@mui/material/Button";

const ButtonS = ({ setMoreInfo, title }) => {
	return (
		<div>
			<Button
				data-testid="button"
				size="small"
				onClick={() => setMoreInfo(true)}
			>
				More information
			</Button>
		</div>
	);
};

export default ButtonS;
