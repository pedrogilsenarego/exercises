import React from "react";
import ReactDOM from "react-dom";
import ButtonS from "../../ButtonS";

import { render } from "@testing-library/react";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ButtonS></ButtonS>, div);
});

it("renders button correctly", () => {});
