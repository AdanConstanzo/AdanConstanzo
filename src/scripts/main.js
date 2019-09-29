import TerminalText from './TerminalText';
import { smoothScroll, checkProjectScroll, AddStickyNav } from './utils';

// Run this after DOM content loaded.
window.addEventListener("DOMContentLoaded", () => {
	
	// constant variables being used.
	const texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];

	// html document references.
	const scrollButton = document.getElementById('arrow');
	const navbar = document.getElementById('nav');
	const header = document.getElementById('home');
	const headerHeight = header.clientHeight;
	const terminalText = document.getElementById("terminal-text").children[0];

	// new terminal object.
	const textText1 = new TerminalText(texts, terminalText);

	// variable instance of listener so we can reference to remove later.
	const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
	aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
	aboutMeEvent.cb = textText1.typeAnimation;
	const projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
	projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
	const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
	blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);

	// Initial check.
	checkProjectScroll(aboutMeEvent)();
	checkProjectScroll(projectScrollEvent)();
	checkProjectScroll(blogsScrollEvent)();

	// setting our scroll listeners
	window.addEventListener('scroll', projectScrollEvent.func);
	window.addEventListener('scroll', blogsScrollEvent.func);
	window.addEventListener('scroll', aboutMeEvent.func);
	window.addEventListener('scroll', AddStickyNav(navbar, headerHeight));
	
	// Setting our click listeners.
	scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));
	// looping though our nav items. 
	for (let i = 0; i < navbar.children[0].children.length; i++) {
		const li = navbar.children[0].children[i];
		const attribute = li.getAttribute('data-ref');
		li.addEventListener('click', smoothScroll(document.getElementById(attribute)));
	}

});