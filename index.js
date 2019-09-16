window.onload = (function() {
	
	/*
	***************** TerminalTyping Animation ***************** 
	* This animation is done by specific css properties!
	* The css classes are terminal-text, .terminal-text__typing 
	*  and .terminal-text__typing > span
	* We then set the width as time goes with setInterval,
	* which mimics the typing effect.
	* The blinking cursor is done via CSS animation.
	*/ 
	function TerminalText(words, textDOM, options) {
		this.words = words;
		this.textDOM = textDOM;
		this.counter = 0;
		this.indexArray = 0;
		this.textDOM.innerText = this.words[this.indexArray];
		if (options) {
			var objectKeys = Object.keys(options);
			var objectKeysLength = Object.keys(options).length;	
			for (var i = 0; i < objectKeysLength; i++) {
				TerminalText.prototype.options[objectKeys[i]] = options[objectKeys[i]];
			}
		}
	}
	// Terminal Text Options
	TerminalText.prototype.options = {
		breakBetween: 1500,
		deleteSpeed: 1000,
		initialStart: 1000,
		typingSpeed: 2000,
		random: false
	}	
	TerminalText.prototype.typeAnimation = function() {
		this.textDOM.style.width = '0%';
		var _TerminalText = this.textDOM.innerText.trim();
		var _TerminalTextLength = _TerminalText.length;
		var _typeSpeed = this.options.typingSpeed / _TerminalTextLength ;
		var animation = setInterval(function(self) {
			self.textDOM.style.width = 100 / _TerminalTextLength * self.counter + '%';
			self.counter += 1;
			if (self.counter > _TerminalTextLength) {
				clearInterval(animation);
				setTimeout(function(_self) {
					_self.counter = 0;
					_self.deleteAnimation();
				}, self.options.breakBetween, self);
			}
		}, _typeSpeed, this);
	}
	TerminalText.prototype.deleteAnimation = function() {
		var _TerminalText = this.textDOM.innerText.trim();
		var _TerminalTextLength = _TerminalText.length;
		var _typeSpeed = this.options.typingSpeed / _TerminalTextLength ;
		var animation = setInterval(function(self) {
			self.textDOM.style.width = 100 - (100/_TerminalTextLength) * self.counter +'%';
			self.counter ++;
			if (self.counter > _TerminalTextLength) {
				clearInterval(animation);
				setTimeout(function(_self) {
					_self.indexArray ++;
					var wordsLength = _self.words.length;
					var newIndex = _self.options.random ? (Math.floor(Math.random() * _self.words.length )) % wordsLength : (_self.indexArray) % wordsLength;
					_self.textDOM.innerText = _self.words[newIndex];
					_self.counter = 0;
					_self.typeAnimation();
				}, self.options.breakBetween, self)
			}
		}, _typeSpeed, this);
	}
	/******* End of TerminalTypingText *******/
	
	// Not required but good to see
	
	/*
	var terminalTextOptions = {
		breakBetween: 5000,
		typingSpeed: 1000,
	}
	// */
	var texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];
	var terminalText = document.getElementById("terminal-text").children[0];
	var textText1 = new TerminalText(texts, terminalText);
	textText1.typeAnimation();

})();