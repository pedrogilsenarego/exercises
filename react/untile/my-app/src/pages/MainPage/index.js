import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

const SUPPORTED_CURRENCIES =
	"https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

const MainPage = () => {
	const [supportedCurrencies, setSupportedCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState("");
	const [targetCurrency, setTargetCurrency] = useState("");

	const getData = async () => {
		try {
			const response = await axios.get(SUPPORTED_CURRENCIES);
			const data = response.data;
			setSupportedCurrencies(data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const handleChangeCurrency = (event) => {
		setSelectedCurrency(event.target.value);
	};

	const handleTargetCurrency = (event) => {
		setTargetCurrency(event.target.value);
	};

	return (
		<div>
			<Container style={{ backgroundColor: "lightblue", marginTop: "10vh" }}>
				<Box style={{ backgroundColor: "black", color: "white" }}>
					Welcome to the Crypto CUrrency Converter
				</Box>
				<Box style={{ backgroundColor: "lightGrey", marginTop: "10vh" }}>
					<Typography>Insert here the value you want to convert</Typography>
					<Grid container spacing={2} style={{ marginTop: "10vh" }}>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<InputLabel id="initial currency">Currency</InputLabel>
								<Select
									labelId="initial currency"
									id="initial currency"
									value={selectedCurrency}
									label="Currency pretended"
									onChange={handleChangeCurrency}
								>
									{supportedCurrencies.map((item, pos) => {
										return (
											<MenuItem key={pos} value={item}>
												{item}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<TextField></TextField>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<InputLabel id="target currency">Currency</InputLabel>
								<Select
									labelId="target currency"
									id="target currency"
									value={targetCurrency}
									label="Currency pretended"
									onChange={handleTargetCurrency}
								>
									{supportedCurrencies.map((item, pos) => {
										return (
											<MenuItem key={pos} value={item}>
												{item}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<TextField></TextField>
						</Grid>
						{selectedCurrency} {targetCurrency}
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default MainPage;
