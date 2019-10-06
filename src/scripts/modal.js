const openModal = (modal) => () => {
	modal.classList.add('modal--open');
	document.body.classList.add('no-scroll');
}

const closeModal = (e) => {
	const isOuterModal = e.target.classList.contains('modal');
	if (isOuterModal) {
		e.target.classList.remove('modal--open');
	}
	document.body.classList.remove('no-scroll');
}

const init = () => {
	const projects = document.querySelectorAll('.projects-hidden-div');
	projects.forEach(project => {
		const projectId = project.getAttribute('data-modal');
		const modal = document.getElementById(projectId);
		project.addEventListener('click', openModal(modal));
	})
	const modals = document.querySelectorAll('.modal');
	// setting event listeners for our close modals.
	modals.forEach(modal => {
		modal.addEventListener('click', closeModal);
	})
	console.log(modals);
}

export default init;