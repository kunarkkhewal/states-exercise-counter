import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../src/components/Counter';

class App extends Component {
	constructor() {
		super();
		this.state = {
			counters: [
				{ name: "Counter_1", count: 0, index: 0 },
				{ name: "Counter_2", count: 0, index: 1 },
				{ name: "Counter_3", count: 0, index: 2 },
			]
		}
	}

	increaseCount = (index) => {
		const newCounter = this.state.counters.map((element) => {
			if (element.index === index) {
				element.count = element.count + 1;
				return element
			}
			return element
		});
		this.setState({
			counters: newCounter
		})
	}

	decreaseCount = (index) => {
		const newCounter = this.state.counters.map((element) => {
			if (element.index === index) {
				element.count = element.count - 1;
				return element
			}
			return element
		});
		this.setState({
			counters: newCounter
		})
	}

	increaseAll = () => {
		const newCounter = this.state.counters.map((element)=>{
			element.count = element.count + 1
			return element
		});
		this.setState({
			counters: newCounter
		})
	}

	decreaseAll = () => {
		const newCounter = this.state.counters.map((element)=>{
			element.count = element.count - 1
			return element
		});
		this.setState({
			counters: newCounter
		})
	}



	render() {
		return (
			<div>
				<h1>Counters Exercise</h1>
				<button className="appBtn" onClick={this.increaseAll}>Increase All</button>
				<button className="appBtn" onClick={this.decreaseAll}>Decrease All</button>
				{this.state.counters.map((element, index) => {
					return <Counter
						data={element}
						key={index}
						increaseCount={this.increaseCount}
						decreaseCount={this.decreaseCount}
					/>
				})}
			</div>
		);
	}
}

export default App;
