// Слайдер адаптивен к количеству фоток и их размеру


const slider = document.querySelector('[data-slider]')
const wrapper = document.querySelector('[data-wrapper]')
const battonBack = document.querySelector('[data-back]')

let quantityImage = 1 // переменная счётчик, которая увеличивается до размера массива
wrapper.style.left = '0px' // Задаю стартовое положение обёртки фоток
wrapper.style.width = `${slider.clientWidth * wrapper.children.length}px` // Задаю адаптивный размер обёртке фоток
wrapper.style.transition = '0.4s' // Плавный переход

setInterval(() => {
	wrapper.style.left = `${-slider.clientWidth	* quantityImage}px`
	quantityImage++
	if (quantityImage > wrapper.children.length - 1) {
		quantityImage = 0
	}
	wrapper.style.width = `${slider.clientWidth * wrapper.children.length}px` // Задаю адаптивный размер обёртке фоток
}, 2000);
