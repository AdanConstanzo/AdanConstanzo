window.onload = (function () {

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
	TerminalText.prototype.typeAnimation = function () {
		this.textDOM.style.width = '0%';
		var _TerminalText = this.textDOM.innerText.trim();
		var _TerminalTextLength = _TerminalText.length;
		var _typeSpeed = this.options.typingSpeed / _TerminalTextLength;
		var animation = setInterval(function (self) {
			self.textDOM.style.width = 100 / _TerminalTextLength * self.counter + '%';
			self.counter += 1;
			if (self.counter > _TerminalTextLength) {
				clearInterval(animation);
				setTimeout(function (_self) {
					_self.counter = 0;
					_self.deleteAnimation();
				}, self.options.breakBetween, self);
			}
		}, _typeSpeed, this);
	}
	TerminalText.prototype.deleteAnimation = function () {
		var _TerminalText = this.textDOM.innerText.trim();
		var _TerminalTextLength = _TerminalText.length;
		var _typeSpeed = this.options.typingSpeed / _TerminalTextLength;
		var animation = setInterval(function (self) {
			self.textDOM.style.width = 100 - (100 / _TerminalTextLength) * self.counter + '%';
			self.counter++;
			if (self.counter > _TerminalTextLength) {
				clearInterval(animation);
				setTimeout(function (_self) {
					_self.indexArray++;
					var wordsLength = _self.words.length;
					var newIndex = _self.options.random ? (Math.floor(Math.random() * _self.words.length)) % wordsLength : (_self.indexArray) % wordsLength;
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

	var elements;
	var windowHeight;

	function init() {
		elements = document.querySelectorAll('.hidden');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		// enables animations based on data-animation tag
		// data-animation='{ "animation": "animation-jump", "delayInit": false, "delayTime": 500 }'
		for (var i = 0; i < elements.length; i++) {
			(function () {
				var element = elements[i];
				var positionFromTop = elements[i].getBoundingClientRect().top;
				var animation = JSON.parse(element.getAttribute('data-animation'));
				if (positionFromTop - windowHeight <= 0 && animation.delayInit === false) {
					setTimeout(function () {
						element.classList.remove('hidden');
						element.classList.add(animation.animation);
						if (animation.terminalTextInit) {
							textText1.typeAnimation();
						}
					}, animation.delayTime);
					animation.delayInit = true;
					element.setAttribute('data-animation', JSON.stringify(animation));
				}
			})();
		}
	}

	/* checks to see if element is withing viewport */
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return rect.bottom < 910;
	}

	function isInViewport(elem) {
		var bounding = elem.getBoundingClientRect();
		// Only using bottom because blog div is too big to fit whole viewport.
		return (
			// bounding.top >= 0 &&
			// bounding.left >= 0 &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
			// bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

	/**
	 * Checks to see if div is within viewing distance
	 * and initials animations.
	 * @listens scroll:checkProjectScroll
	 * @param {DOM} parentDiv Reference to parent div to check if within viewport.
	 * @param {string} elementClassName Class name for element searching / appending.
	 * @return {function} Returning a function for closure purposes.
	 */
	/**
	 * Required HTML structure
	 * <section id="[parentDiv]">
	 * 	<h2 class="[elementClassName]" data-animation={}</h2>
	 * 	<div class="[elementClassName]">
	 * 		<div class="[elementClassName]-div">
	*/
	function checkProjectScroll(selfObj) {
		// returning function for closure.
		return function () {
			// get reference to parentDiv
			var parentDiv = document.getElementById(selfObj.sectionId);
			// checks if div is within viewport.
			var check = isInViewport(parentDiv);
			if (check) {
				// grab all instances of class
				var elements = document.querySelectorAll('.' + selfObj.blocksClass);
				// looping through all elements.
				for (var i = 0; i < elements.length; i++) {
					// binds var i.
					(function () {
						var element = elements[i];
						var animation;
						// if element has an animation play it, 
						// else probably blocks of projects/blogs
						if (element.getAttribute('data-animation')) {
							// standard animation bit.
							animation = JSON.parse(element.getAttribute('data-animation'));
							if (animation.delayInit === false) {
								setTimeout(function () {
									element.classList.remove(selfObj.blocksClass);
									element.classList.add(animation.animation);
								}, animation.delayTime);
							}
							animation.delayInit = true;
							element.setAttribute('data-animation', JSON.stringify(animation));
						} else {
							// looping through all project/blog items
							for (var j = 0; j < element.children.length; j++) {
								// binding j
								(function () {
									var animation = JSON.parse(element.children[j].getAttribute('data-animation'));
									if (animation.delayInit === false) {
										setTimeout(function (num, animationVal) {
											// removing opacity.
											element.children[num].classList.remove(selfObj.blocksClass + '-div');
											// adding animation.
											element.children[num].classList.add(animationVal.animation);
										}, 1000 + animation.delayBetween * j, j, animation); // increments time delay by 500ms
									}
									animation.delayInit = true;
									element.children[j].setAttribute('data-animation', JSON.stringify(animation));
								})();
							}
							element.classList.remove(selfObj.blocksClass);
						}
						// once loops reaches max, remove listener.
						if (i === elements.length - 1) {
							window.removeEventListener('scroll', selfObj.func);
						}
					})();
				}

			}
		}
	}

	function smoothScroll(element) {
		return function() {
			element.scrollIntoView({ 
				behavior: 'smooth',
				block: 'center'
			});
		}
	}
	

	// variable instance of listener so we can reference to remove later.
	var projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
	projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
	var blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
	blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);

	// setting our listeners
	window.addEventListener('scroll', projectScrollEvent.func);
	window.addEventListener('scroll', blogsScrollEvent.func);

	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);

	var scrollButton = document.getElementById('arrow');
	scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));

	var nav = document.getElementById('nav');
	for (var i = 0; i < nav.children[0].children.length; i++) {
		(function(){
			var li = nav.children[0].children[i];
			var attribute = li.getAttribute('data-ref');
			li.addEventListener('click', smoothScroll(document.getElementById(attribute)));
		})();
	}
	

	init();
	checkPosition();

})();