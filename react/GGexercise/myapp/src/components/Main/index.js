import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFetchBooksStart } from "../../redux/Books/books.actions";
import Book from "./Book";
import PagesIndex from "./PagesIndex";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const mapState = (state) => ({
	books: state.booksData.books
});

const Main = () => {
	const [filter, setFilter] = useState([]);
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();
	const { books } = useSelector(mapState);

	const getData = (filters = []) => {
		return fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				page: 1,
				itemsPerPage: 20,
				filters: filters === "delete" ? [] : filters
			})
		})
			.then((response) => response.json())
			.then((result) => {
				dispatch(addFetchBooksStart(result));
			})
			.catch((err) => dispatch(addFetchBooksStart({ books: [], count: 0 })));
	};

	useEffect(
		() => {
			getData();
		},
		//es-lint disable next line
		[]
	);

	return (
		<div>
			Teste
			<Container style={{ marginTop: "10vh" }}>
				<PagesIndex />
				<Typography style={{ marginTop: "5vh" }}>List of Books</Typography>
				<div style={{ marginTop: "20px" }}>
					{books.books.map((item, pos) => {
						const configBook = { item, pos };
						return (
							<div key={pos}>
								<Book {...configBook} />
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
};

export default Main;
