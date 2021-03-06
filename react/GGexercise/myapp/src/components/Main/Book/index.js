import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ButtonS from "./ButtonS";

const Book = ({ item, pos }) => {
	const [moreInfo, setMoreInfo] = useState(false);
	const configButton = { setMoreInfo, title: "More Information" };
	return (
		<div>
			<Paper style={{ backgroundColor: "lightGrey", marginTop: "5px" }}>
				<Typography variant="subtitle1">{item.book_title}</Typography>
				<Typography variant="subtitle2">
					<span style={{ fontSize: 13 }}>written by</span> {item.book_author}
				</Typography>
				{!moreInfo && (
					<div>
						<ButtonS {...configButton} />
					</div>
				)}
				{moreInfo && (
					<Typography>
						{`Published at ${
							item.book_publication_year && item.book_publication_year
						} in
          ${item.book_publication_city && item.book_publication_city + ","}
          ${item.book_publication_country && item.book_publication_country}.

          `}
						&nbsp; contains {item.book_pages} pages
					</Typography>
				)}
			</Paper>
		</div>
	);
};

export default Book;
