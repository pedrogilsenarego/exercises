import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addFetchBooksStart,
	setPageStart
} from "../../redux/Books/books.actions";
import Book from "./Book";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "center"
	}
});

const mapState = (state) => ({
	books: state.booksData.books,
	page: state.booksData.page
});

const Main = () => {
	const [filter, setFilter] = useState([]);

	const dispatch = useDispatch();
	const { books, page } = useSelector(mapState);
	const classes = useStyles();

	const getData = (filters = []) => {
		return fetch("http://nyx.vima.ekt.gr:3000/api/books/", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				page: page,
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
		[page]
	);

	const handlePaginationChange = (event, value) => {
		dispatch(setPageStart(value));
	};

	return (
		<div style={{ marginTop: "10px" }}>
			Get Ground exercise
			<Container style={{ marginTop: "10vh" }}>
				<Pagination
					className={classes.root}
					shape="rounded"
					count={parseInt(books.count / 20) + 1}
					page={Number(page) || 1}
					onChange={handlePaginationChange}
				/>
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
