import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

const SUPPORTED_CURRENCIES =
	"https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

const MainPage = () => {
	const [supportedCurrencies, setSupportedCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState("");
	const [selectedCurrency2, setSelectedCurrency2] = useState("");
	const [targetCurrency, setTargetCurrency] = useState("");
	const [market, setMarket] = useState("");
	const [rate, setRate] = useState(2);
	const [initialInput, setInitialInput] = useState("");

	const getData = async () => {
		try {
			const response = await axios.get(SUPPORTED_CURRENCIES);
			const data = response.data;
			setSupportedCurrencies(data);
		} catch (error) {
			console.error();
		}
	};

	const getRate = async () => {
		try {
			const response = await axios.get(
				`https://https://api.coingecko.com/api/v3/simple/price?ids=${selectedCurrency}&vs_currencies=eu,${targetCurrency}`
			);

			const data = response.data.selectedCurrency.targetCurrency;

			//setRate(data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const handleChangeCurrency = (event) => {
		setSelectedCurrency(event.target.value);
		if (selectedCurrency && targetCurrency !== "") {
			getRate();
		}
	};

	const handleTargetCurrency = (event) => {
		setTargetCurrency(event.target.value);
		if (selectedCurrency && targetCurrency !== "") {
			getRate();
		}
	};

	const handleSelectedCurrency2 = (event) => {
		setSelectedCurrency2(event.target.value);
	};

	const handleMarket = (event) => {
		setMarket(event.target.value);
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
							<FormControl>
								<InputLabel id="initial currency">Currency</InputLabel>
								<Select
									labelId="initial currency"
									id="initial currency"
									value={selectedCurrency}
									label="Currency pretended"
									onChange={handleChangeCurrency}
									style={{ minWidth: "200px" }}
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
							<TextField
								placeholder="Initial value"
								value={initialInput}
								onChange={(e) => setInitialInput(e.target.value)}
							></TextField>
						</Grid>
						<Grid item xs={6}>
							<FormControl>
								<InputLabel id="target currency">Currency</InputLabel>
								<Select
									labelId="target currency"
									id="target currency"
									value={targetCurrency}
									label="Currency pretended"
									onChange={handleTargetCurrency}
									style={{ minWidth: "200px" }}
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
							<TextField
								disabled={true}
								placeholder="Final value"
								value={initialInput * rate}
							></TextField>
						</Grid>
						{selectedCurrency} {targetCurrency} {rate} {initialInput}
					</Grid>
				</Box>
				<Box style={{ backgroundColor: "lightGrey", marginTop: "10vh" }}>
					<Typography>Explore here the market</Typography>
					<Grid container spacing={2} style={{ marginTop: "10vh" }}>
						{" "}
						<Grid item xs={6}>
							<FormControl>
								<InputLabel id="target currency2">Currency</InputLabel>
								<Select
									labelId="target currency2"
									id="target currency"
									value={selectedCurrency2}
									label="Currency pretended"
									onChange={handleSelectedCurrency2}
									style={{ minWidth: "200px" }}
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
							<FormControl>
								<InputLabel id="target market">Market</InputLabel>
								<Select
									labelId="target market"
									id="target market"
									value={market}
									label="Market pretended"
									onChange={handleMarket}
									style={{ minWidth: "200px" }}
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
					</Grid>
				</Box>
				{selectedCurrency2}
			</Container>
		</div>
	);
};

export default MainPage;
