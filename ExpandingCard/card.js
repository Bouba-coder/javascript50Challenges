/*with the query selector we can select id, className...*/
const panels = document.querySelectorAll('.panel')
console.log(panels)
/*foreach on every elements*/
panels.forEach((panel) => {

	/*we call an evenment on a click with eventlistener*/
	panel.addEventListener('click', () => 
	{
		/*we gonna change panel to panel active id for change the widht of our pictur and remove the other active class*/
		removeOtherActiveClass()
		panel.classList.add('active')
	})

})

/*remove function*/
function removeOtherActiveClass () {

	/*we can write the forEach like that*/
	panels.forEach(panel => {

		panel.classList.remove('active')	

	})
}