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
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
	addConversionStart,
	clearConversionsStart
} from "../../redux/Conversions/conversions.actions";
import Button from "@mui/material/Button";

const mapState = (state) => ({
	conversion: state.conversionData.conversion
});

const SUPPORTED_CURRENCIES =
	"https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

const MainPage = () => {
	const { conversion } = useSelector(mapState);
	const [supportedCurrencies, setSupportedCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState("");

	const [targetCurrency, setTargetCurrency] = useState("");

	const [market, setMarket] = useState("");
	const [warning, setWarning] = useState("");
	const [coins, setCoins] = useState("");
	const [selectedCoin, setSelectedCoin] = useState("");
	const [tickers, setTickers] = useState("0");
	const [rate, setRate] = useState(0);
	const [initialInput, setInitialInput] = useState("");

	const dispatch = useDispatch();

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
				`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${selectedCurrency},${targetCurrency}`
			);

			const data = response.data.bitcoin[selectedCurrency];
			const data2 = response.data.bitcoin[targetCurrency];

			setRate(data2 / data);
		} catch (error) {
			console.error();
		}
	};

	const getMarketInfo = async (selectedCoin) => {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/${selectedCoin.toLowerCase()}/tickers`
			);
			const data = response.data;
			setMarket(data);
		} catch (error) {
			console.error();
		}
	};

	const getCoins = async () => {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
			);
			const data = response.data;
			setCoins(data);
		} catch (error) {
			console.error();
		}
	};

	const getTickers = async () => {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/cardano/tickers`
			);
			const data = response.data;
			setTickers(data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(() => {
		getData();

		getCoins();
		getTickers();
	}, []);

	useEffect(() => {
		getMarketInfo(selectedCoin);
	}, [selectedCoin]);

	const handleChangeCurrency = (event) => {
		setSelectedCurrency(event.target.value);
	};

	const handleTargetCurrency = (event) => {
		setTargetCurrency(event.target.value);
	};

	const handleSelectCoins = (event) => {
		setSelectedCoin(event.target.value);
	};

	const handleMarket = (event) => {
		setMarket(event.target.value);
	};

	const handleDoConversion = () => {
		if (selectedCurrency === "" || targetCurrency === "") {
			setWarning("select currencies first");
			return;
		}
		if (isNaN(initialInput) && initialInput !== "") {
			setWarning("use only numbers to convert");
			return;
		}
		getRate();
		setWarning("");
	};

	const handleSaveConversion = () => {
		const configConversion = {
			initialCurrency: selectedCurrency,
			secondaryCurrency: targetCurrency,
			rate: rate,
			initialValue: initialInput,
			finalValue: initialInput * rate
		};
		const initialState = conversion;
		initialState.push(configConversion);
		dispatch(addConversionStart(initialState));
	};

	const handleClearConversions = () => {
		dispatch(clearConversionsStart());
	};

	const handleDisableMarket = () => {
		if (selectedCoin === "") return true;
		else return false;
	};

	return (
		<div>
			<Container style={{ backgroundColor: "lightblue", marginTop: "10vh" }}>
				<Box style={{ backgroundColor: "black", color: "white" }}>
					Welcome to the Crypto CUrrency Converter
				</Box>
				<Box style={{ backgroundColor: "lightGrey", marginTop: "10vh" }}>
					<Typography>Convert here any currency</Typography>
					<Grid container spacing={2} style={{ marginTop: "10vh" }}>
						<Grid item container xs={6}>
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
							<Grid item xs={6} style={{ marginTop: "20px" }}>
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
							<Grid item xs={6} style={{ marginTop: "20px" }}>
								<TextField
									disabled={true}
									placeholder="Final value"
									value={initialInput * rate}
								></TextField>
							</Grid>
							<Grid
								item
								xs={12}
								style={{ marginTop: "20px", marginBottom: "20px" }}
							>
								<ButtonGroup>
									<Button onClick={() => handleDoConversion()}>Convert</Button>
									<Button onClick={() => handleSaveConversion()}>
										Save Conversion
									</Button>
									<Button onClick={() => handleClearConversions()}>
										Clear conversions
									</Button>
								</ButtonGroup>
								{warning}
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Typography>List of Conversions done</Typography>
							<div style={{ marginTop: "20px" }}>
								{conversion.map((item, pos) => {
									return (
										<Typography key={pos}>
											{pos + 1}: {item.initialValue} of {item.initialCurrency}{" "}
											converts to {item.finalValue} of {item.secondaryCurrency}
										</Typography>
									);
								})}
							</div>
						</Grid>
					</Grid>
				</Box>

				<Box
					style={{
						backgroundColor: "lightGrey",
						marginTop: "10vh",
						minHeight: "50vh"
					}}
				>
					<Typography>Explore here the market</Typography>
					<Grid container spacing={2} style={{ marginTop: "10vh" }}>
						{" "}
						<Grid item xs={6}>
							<FormControl>
								<InputLabel id="target coins">Coins</InputLabel>
								<Select
									labelId="target coins"
									id="target coins"
									value={selectedCoin}
									label="Currency pretended"
									onChange={handleSelectCoins}
									style={{ minWidth: "200px" }}
								>
									{coins &&
										coins.map((d) => (
											<MenuItem key={d.name} value={d.name}>
												{d.name}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl>
								<InputLabel id="target market">Market</InputLabel>
								<Select
									disabled={handleDisableMarket()}
									labelId="target market"
									id="target market"
									value={market}
									label="Market pretended"
									onChange={handleMarket}
									style={{ minWidth: "200px" }}
								>
									{market.tickers &&
										market.tickers.map((item, pos) => {
											return (
												<MenuItem value={item.market.name} key={pos}>
													{item.market.name}
												</MenuItem>
											);
										})}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
					<Grid item xs={12} style={{ marginTop: "20px" }}>
						{tickers.tickers &&
							tickers.tickers.map((item, pos) => {
								if (item.market.name === "FMFW.io") {
									return (
										<Typography key={pos}>
											Ticker:{item.base} Last value:{item.last} Last Traded at:{" "}
											{item.last_traded_at} Market: {item.market.name} Market
											volume:
											{item.volume}
										</Typography>
									);
								} else return null;
							})}
						{selectedCoin}
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default MainPage;
