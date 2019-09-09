import React from 'react';

import './terminal-text.css';

class TerminalText extends React.Component {
	state ={
		descriptions : ["Web Apps", "Game Dev", "App Dev", "Automations", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"],
		indexArray: 0,
		speed: 2000,
		deleteSpeed: 1000,
		breakBetween: 1000,
		characterIndex: 0,
		random: false
	};
	componentDidMount() {
		this.typeAnimation();
	}

	typeAnimation = () => {
		const { indexArray, descriptions, speed } = this.state;
		const doc = document.getElementById("terminal-text").children[0];
		doc.style.width = `0%`;
		const animation = setInterval(() => {
			const { indexArray, descriptions, characterIndex } = this.state;
			doc.style.width = `${(100/descriptions[indexArray%descriptions.length].length) * characterIndex}%`;
			this.setState({ characterIndex: characterIndex + 1 });
			if (characterIndex === descriptions[indexArray%descriptions.length].length) {
				clearInterval(animation);
				setTimeout(() => {
					this.setState({ characterIndex: 0});
					this.deleteAnimation();
				}, this.state.breakBetween);
			}
		}, speed / descriptions[indexArray%descriptions.length].length);
	}

	deleteAnimation = () => {
		const { indexArray, descriptions, deleteSpeed } = this.state;
		const animation = setInterval(() => {
			const { indexArray, descriptions, characterIndex } = this.state;
			const doc = document.getElementById("terminal-text").children[0];
			doc.style.width = `${100 - (100/descriptions[indexArray%descriptions.length].length) * characterIndex}%`;
			this.setState({ characterIndex: characterIndex + 1 });
			if (characterIndex === descriptions[indexArray%descriptions.length].length) {
				clearInterval(animation);
				setTimeout(() => {
					const { descriptions, random, indexArray  } = this.state;
					const newIndex = random ? Math.floor(Math.random() * descriptions.length ) : indexArray + 1
					this.setState({ indexArray: newIndex, characterIndex: 0});
					this.typeAnimation();
				}, this.state.breakBetween);
			}
		}, deleteSpeed / descriptions[indexArray%descriptions.length].length);
	}

	render(){
		const { descriptions, indexArray } = this.state;
		return(
			<div className="terminal-text">
				<p>@adan>&nbsp;</p>
				<div id="terminal-text" className="terminal-text__typing"><span>{descriptions[indexArray%descriptions.length]}</span></div>
			</div>
		)
	}
}
export default TerminalText;
