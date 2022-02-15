import React from "react";
import ReactDOM from "react-dom";
import ButtonS from "../../ButtonS";

import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import { screen } from "@testing-library/any-framework";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ButtonS></ButtonS>, div);
});

it("renders button correctly", () => {
	render(<ButtonS title="More Information"></ButtonS>);
	expect(screen.getByTestId("button")).toHaveTextContent("More Information");
});
