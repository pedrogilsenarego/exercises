import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const mapState = (state) => ({
	episode: state.episodeData.episode
});

const Secondary = () => {
	const { episode } = useSelector(mapState);
	const { summary, image } = episode;
	return (
		<div>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: "100vh" }}
			>
				<Grid item xs={12} md={6}>
					<p>{episode.name}</p>
					<img src={image.original} alt={"no"} style={{ width: "500px" }} />
					<Typography
						dangerouslySetInnerHTML={{ __html: summary }}
						align="justify"
						style={{
							width: "500px"
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Secondary;
