import React from 'react';

import './terminal-text.css';

class TerminalText extends React.Component {
	state ={
		indexArray: 0,
		characterIndex: 0,
	};
	componentDidMount() {
		setTimeout(() => this.typeAnimation(), this.props.initialStart);
	}

	typeAnimation = () => {
		const { descriptions, typingSpeed } = this.props;
		const { indexArray } = this.state;
		const doc = document.getElementById("terminal-text").children[0];
		doc.style.width = `0%`;
		const animation = setInterval(() => {
			const { indexArray, characterIndex } = this.state;
			doc.style.width = `${(100/descriptions[indexArray%descriptions.length].length) * characterIndex}%`;
			this.setState({ characterIndex: characterIndex + 1 });
			if (characterIndex === descriptions[indexArray%descriptions.length].length) {
				clearInterval(animation);
				setTimeout(() => {
					this.setState({ characterIndex: 0});
					this.deleteAnimation();
				}, this.props.breakBetween);
			}
		}, typingSpeed / descriptions[indexArray%descriptions.length].length);
	}

	deleteAnimation = () => {
		const { descriptions, deleteSpeed } = this.props;
		const { indexArray } = this.state;
		const animation = setInterval(() => {
			const { indexArray, characterIndex } = this.state;
			const doc = document.getElementById("terminal-text").children[0];
			doc.style.width = `${100 - (100/descriptions[indexArray%descriptions.length].length) * characterIndex}%`;
			this.setState({ characterIndex: characterIndex + 1 });
			if (characterIndex === descriptions[indexArray%descriptions.length].length) {
				clearInterval(animation);
				setTimeout(() => {
					const { indexArray  } = this.state;
					const { random } = this.props;
					const newIndex = random ? Math.floor(Math.random() * descriptions.length ) : indexArray + 1
					this.setState({ indexArray: newIndex, characterIndex: 0});
					this.typeAnimation();
				}, this.props.breakBetween);
			}
		}, deleteSpeed / descriptions[indexArray%descriptions.length].length);
	}

	render(){
		const { indexArray } = this.state;
		const { terminalPath, descriptions } = this.props;
		return(
			<div className="terminal-text">
				<p>{terminalPath}</p>
				<div id="terminal-text" className="terminal-text__typing"><span>{descriptions[indexArray%descriptions.length]}</span></div>
			</div>
		)
	}
}
export default TerminalText;
