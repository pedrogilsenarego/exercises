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
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Arrow from "../../assets/arrow-to.svg";

import {
	addConversionStart,
	clearConversionsStart
} from "../../redux/Conversions/conversions.actions";
import Button from "@mui/material/Button";

const mapState = (state) => ({
	conversion: state.conversionData.conversion
});

const MainPage = () => {
	const { conversion } = useSelector(mapState);
	const [supportedCurrencies, setSupportedCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const [targetCurrency, setTargetCurrency] = useState("");
	const [market, setMarket] = useState("");
	const [selectedMarket, setSelectedMarket] = useState("");
	const [warning, setWarning] = useState("");
	const [coins, setCoins] = useState("");
	const [selectedCoin, setSelectedCoin] = useState("");
	const [tickers, setTickers] = useState("0");
	const [rate, setRate] = useState(0);
	const [initialInput, setInitialInput] = useState("");

	const dispatch = useDispatch();

	const getData = async () => {
		try {
			const response = await axios.get(
				"https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
			);
			const data = response.data;
			setSupportedCurrencies(data);
		} catch (error) {
			console.error();
		}
	};

	const getRate = async (selectedCurrency, targetCurrency) => {
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

	const getTickers = async (selectedCoin) => {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/${selectedCoin.toLowerCase()}/tickers`
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
		getTickers(selectedCoin);
	}, [selectedCoin]);

	useEffect(() => {
		getRate(selectedCurrency, targetCurrency);
	}, [selectedCurrency, targetCurrency]);

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
		setSelectedMarket(event.target.value);
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

		setWarning("");
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
			<Container style={{ backgroundColor: "lightGrey", marginTop: "10vh" }}>
				<Grid
					container
					spacing={2}
					direction="row"
					alignItems="center"
					justifyContent="center"
				>
					<Grid
						item
						style={{
							display: "flex",
							color: currentPage === 0 ? "darkBlue" : "grey"
						}}
					>
						<Typography
							onClick={() => {
								setCurrentPage(0);
							}}
							style={{ cursor: "pointer", fontWeight: "600", fontSize: "20px" }}
						>
							{" "}
							CRYPTO CALCULATOR
						</Typography>
					</Grid>
					<Grid
						item
						style={{
							display: "flex",
							color: currentPage === 1 ? "darkBlue" : "grey"
						}}
					>
						<Typography
							onClick={() => {
								setCurrentPage(1);
							}}
							style={{ cursor: "pointer", fontWeight: "600", fontSize: "20px" }}
						>
							{" "}
							Tickers
						</Typography>
					</Grid>
					<Divider
						style={{
							width: "100%",
							marginTop: "15px",
							background: "lightGrey"
						}}
					/>
				</Grid>
				{currentPage === 0 && (
					<Box
						style={{
							backgroundColor: "lightGrey",
							marginTop: "5vh",
							minHeight: "70vh",
							paddingBottom: "200px"
						}}
					>
						<Typography style={{ color: "darkBlue" }} variant="h3">
							CRYPTO CALCULATOR
						</Typography>

						<Grid container spacing={2} style={{ marginTop: "5vh" }}>
							<Grid item container xs={12}>
								<Grid item xs={6}>
									<Typography
										style={{
											color: "darkBlue",
											fontSize: "15px",
											fontWeight: "600"
										}}
										variant="h3"
									>
										FROM:
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<Typography
										style={{
											color: "darkBlue",
											fontSize: "15px",
											fontWeight: "600"
										}}
										variant="h3"
									>
										TO:
									</Typography>
								</Grid>
								<Container>
									<Grid container>
										<Grid item xs={3} style={{ marginTop: "20px" }}>
											<TextField
												size="small"
												placeholder="Initial value"
												value={initialInput}
												onChange={(e) => setInitialInput(e.target.value)}
											></TextField>
										</Grid>
										<Grid item xs={3} style={{ marginTop: "20px" }}>
											<FormControl>
												<InputLabel id="initial currency">Currency</InputLabel>
												<Select
													size="small"
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

										<Grid item xs={3} style={{ marginTop: "20px" }}>
											<FormControl>
												<InputLabel id="target currency">Currency</InputLabel>
												<Select
													size="small"
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
										<Grid
											item
											xs={3}
											style={{ marginTop: "20px", marginBottom: "20px" }}
										>
											<ButtonGroup>
												<Button
													size="small"
													style={{
														color: "white",
														backgroundColor: "darkBlue"
													}}
													onClick={() => handleDoConversion()}
												>
													Convert
												</Button>

												<Button
													size="small"
													style={{
														color: "white",
														backgroundColor: "darkBlue"
													}}
													onClick={() => handleClearConversions()}
												>
													Clear conversions
												</Button>
											</ButtonGroup>
										</Grid>
									</Grid>
								</Container>
							</Grid>
							<Grid item xs={12}>
								<Typography style={{ color: "red" }}>{warning}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography
									style={{
										color: "darkBlue",
										fontSize: "25px",
										fontWeight: "600"
									}}
								>
									RESULT
								</Typography>

								<Grid
									container
									spacing={2}
									direction="column"
									alignItems="center"
									justifyContent="center"
									style={{
										marginTop: "20px"
									}}
								>
									{conversion.map((item, pos) => {
										return [
											<Grid
												item
												container
												alignItems="center"
												style={{
													display: "flex"
												}}
											>
												<Grid item xs={3.5}></Grid>
												<Grid item xs={2}>
													<Typography
														style={{
															color: pos === 0 ? "black" : "grey",
															fontSize: pos !== 0 ? "15px" : "30px"
														}}
													>
														{parseInt(item.initialValue).toFixed(1)}{" "}
														{item.initialCurrency.toUpperCase()}
													</Typography>
												</Grid>
												<Grid item xs={1}>
													<Typography
														style={{
															color: pos === 0 ? "black" : "grey",
															fontSize: pos === 0 ? "15px" : "10px"
														}}
													>
														is worth{" "}
													</Typography>
												</Grid>
												<Grid item xs={2}>
													<Typography
														style={{
															fontSize: pos !== 0 ? "15px" : "30px",
															color: pos === 0 ? "black" : "grey"
														}}
													>
														{parseInt(item.finalValue).toFixed(1)}{" "}
														{item.secondaryCurrency.toUpperCase()}
													</Typography>
												</Grid>
												<Grid item xs={3.5}></Grid>
											</Grid>
										];
									})}
								</Grid>
							</Grid>
						</Grid>
					</Box>
				)}
				{currentPage === 1 && (
					<Box
						style={{
							backgroundColor: "lightGrey",

							minHeight: "50vh",
							paddingBottom: "200px"
						}}
					>
						<Typography
							style={{ color: "darkBlue", marginTop: "5vh" }}
							variant="h3"
						>
							TICKERS
						</Typography>
						<Grid container spacing={2} style={{ marginTop: "10vh" }}>
							{" "}
							<Grid item xs={6}>
								<Typography
									style={{
										color: "darkBlue",
										fontSize: "15px",
										fontWeight: "600"
									}}
									variant="h3"
								>
									COIN:
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography
									style={{
										color: "darkBlue",
										fontSize: "15px",
										fontWeight: "600"
									}}
									variant="h3"
								>
									MARKET:
								</Typography>
							</Grid>
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
										value={selectedMarket}
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
						<Container maxWidth={"md"} style={{ marginTop: "10vh" }}>
							<Grid item xs={12} style={{ marginTop: "20px" }}>
								{tickers.tickers &&
									selectedMarket !== "" &&
									tickers.tickers.map((item, pos) => {
										if (item.market.name === selectedMarket) {
											return (
												<Box
													style={{
														backgroundColor: "white",
														borderRadius: "4px",
														boxShadow: "4px 5px 5px grey",
														padding: "10px",
														marginTop: "10px"
													}}
												>
													<Grid
														key={pos}
														container
														style={{ marginTop: "10px" }}
													>
														<Grid item xs={6}>
															<Typography style={{ fontWeight: "600" }}>
																{item.base}/{item.target}{" "}
																<Typography style={{ fontSize: "12px" }}>
																	Last value:{item.last} Last Traded at:{" "}
																	{item.last_traded_at}
																</Typography>{" "}
															</Typography>
														</Grid>
														<Grid item xs={6}>
															<Typography>View More</Typography>
															<Typography>
																Market: {item.market.name} Market volume:
																{item.volume}
															</Typography>
														</Grid>
													</Grid>
												</Box>
											);
										} else return null;
									})}
							</Grid>
						</Container>
					</Box>
				)}
			</Container>
		</div>
	);
};

export default MainPage;
