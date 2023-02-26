// /*
// Завдання 1
// Нажатие на кнопку "SHOW ME" должно выводить значения из
// поля введения (смотрите на элементы в html-разметки)
// */
// const showMeBtnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// showMeBtnEl.addEventListener('click', () => {
//     alert(inputEl.value)

// })


// Задание 2
// После нажатия кнопки "SWAP ME" осуществляется обмен
// содержимым между двумя инпутами.
// Вы можете нажать на нее несколько раз или вручную
// изменить содержимое инпутов.
// * /


// const showMeBtnEl = document.querySelector("#swapButton");
// const leftSwapInputEl = document.querySelector("#leftSwapInput");
// const rightSwapInputEl = document.querySelector("#rightSwapInput");

// showMeBtnEl.addEventListener('click', () => {
//     // console.log((inputEl.value));
//     const leftSwapInputElValue = leftSwapInputEl.value
//     const rightSwapInputElValue = rightSwapInputEl.value
//     leftSwapInputEl.value = rightSwapInputElValue
//     rightSwapInputEl.value = leftSwapInputElValue

// })



// Задание 3
// Кнопка "Скрыть" скрывает текст и заменяет название кнопки на
// "Раскрыть", при повторном нажатии текст снова становится доступным
// и кнопка приобретает первоначальный вид.
// */

const inputEl = document.querySelector("#passwordInput");
const btnEl = document.getElementById("passwordButton");

btnEl.addEventListener('click', () => {
    if (btnEl.textContent === "Cкрыть") {

        btnEl.textContent = "Раскрыть";
        inputEl.setAttribute("type", "password");
    } else {
        btnEl.textContent = "Cкрыть";
        inputEl.setAttribute("type", "text");
    }

});
