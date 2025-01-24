
/* Aqui passarei tags do html para usar no js */
let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")
let container = document.querySelector(".container")

let items = container.querySelectorAll(".list .item")
let indicator = document.querySelector(".indicators")
let dots = indicator.querySelectorAll("ul li")
let list = container.querySelector(".list")

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemold = container.querySelector(".list .item.active") /* passei a tag active que está dentro de list e item para uma variável itemold, que será como se fosse a tag antiga que terá o active que ativará as características do css que declarei em */
    itemold.classList.remove("active") /* aqui será removido o active da class item, para passar para o próximo */

    let dotsOld = indicator.querySelector("ul li.active")
    dotsOld.classList.remove("active")
    dots[active].classList.add("active")

    indicator.querySelector(".number").innerHTML = "0" + (active + 1)

}

nextButton.onclick = () => { /* aqui será a criação do botão next para avançar nos carros */
    list.style.setProperty('--calculation', 1 )
    active = active + 1 > lastPosition ? 0 :active + 1 /* aqui é uma espécie de if else resumida, para a transição. se active atual + 1 for maior que lastposition[2], volte para 0 se não active +1 */
    setSlider()
    items[active].classList.add("active") /* e aqui adicionará o active na próxima class, ativando as características dadas ao css com tag active */

  
    dots[active].classList.add("active")
    indicator.querySelector(".number").innerHTML = "0" + (active + 1)
}

prevButton.onclick = () => {/* aqui será a criação do botão prev para retroceder nos carros */
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition :active - 1 /* aqui é uma espécie de if else resumida, para a transição. se active atual - 1 for menor que firstPosition[0], volte para o último item se não active - 1 para retroceder*/
    setSlider()
    items[active].classList.add("active") /* e aqui adicionará o active na próxima class, ativando as características dadas ao css com tag active */
}

