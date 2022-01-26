import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { addProductStart } from "../../redux/Episode/episode.actions";

const ALL_EPISODES_URL = "https://api.tvmaze.com/shows/2/episodes";

const MainPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [episodes, setEpisodes] = useState([]);

	const getEpisodes = async () => {
		try {
			const response = await axios.get(ALL_EPISODES_URL);
			const data = response.data;
			setEpisodes(data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(() => {
		getEpisodes();
	}, []);

	const handleOnClick = (pos) => {
		dispatch(addProductStart(episodes[pos]));
		history.push(`/secondary/${pos}`);
	};

	console.log(episodes);
	return (
		<div>
			<p>x-Bombs</p>
			<p>
				A show for adults where you will emmerse yourself in a fantasy world
			</p>
			<Grid container spacing={1}>
				{episodes.map((item, pos) => {
					return (
						<Grid item xs="12" sm="6" md="3">
							<Container
								style={{ cursor: "pointer" }}
								key={pos}
								onClick={() => {
									handleOnClick(pos);
								}}
							>
								<img
									style={{ width: "200px" }}
									src={episodes[pos].image.original}
									alt={"no"}
								/>

								<Typography>{item.name}</Typography>
							</Container>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default MainPage;

//
