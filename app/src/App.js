import React, { Component } from "react";
import { gifs } from "./utils/gifs";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import { getGif } from "./utils/api";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedId: "",
			gifs: [],
			isOriginal: false,
			isHd: false,
			isDownsized: false
		};
	}
	handleCheckboxChange = event => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};
	handleSelectChange = event => {
		this.setState({
			selectedId: event.target.value
		});
	};
	handleClick = () => {
		getGif(this.state.selectedId)
			.then(data => {
				const gifs = [];
				for (const gif of data) {
					if (this.state.isOriginal && gif.images.original) {
						gifs.push(gif.images.original);
					}
					if (this.state.isDownsized && gif.images.downsized) {
						gifs.push(gif.images.downsized);
					}
					if (this.state.isHd && gif.images.hd) {
						gifs.push(gif.images.hd);
					}
				}
				this.setState({
					gifs
				});
			})
			.catch(err => {
				console.error("Something went wrong", err);
			});
	};
	render() {
		return (
			<div className="App">
				<h1 className="heading">App</h1>
				<Select
					itemsSlug="gifs"
					itemName="Gif ID"
					itemsList={gifs}
					value={this.state.selectedId}
					onChange={this.handleSelectChange}
				/>
				<div>
					<p>Quality:</p>
					<Checkbox
						name={"Original"}
						slug={"isOriginal"}
						isChecked={this.state.isOriginal}
						onChange={this.handleCheckboxChange}
					/>
					<Checkbox
						name={"HD"}
						slug={"isHd"}
						isChecked={this.state.isHd}
						onChange={this.handleCheckboxChange}
					/>
					<Checkbox
						name={"Downsized"}
						slug={"isDownsized"}
						isChecked={this.state.isDownsized}
						onChange={this.handleCheckboxChange}
					/>
				</div>
				<button onClick={this.handleClick}>Search</button>
				{this.state.gifs.map((gif, idx) => {
					return (
						<div key={idx}>
							<img src={gif.url} alt={gif.url} />
							<p>{gif.size}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
