const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const pegaEstilo = (elemento, estilo) =>{
    window.getComputedStyle(elemento).getPropertyValue(estilo)
}

const corInicial = {
    bg: pegaEstilo(html,"--bg"),
    bgPanel: pegaEstilo(html,"--bg-panel"),
    colorHeadings: pegaEstilo(html,"--color-headings"),
    colorText: pegaEstilo(html,"--color-text")
}

const corDark = {
    bg: "#f3f3f3",
    bgPanel: "#212121",
    colorHeadings: "#781fab",
    colorText: "#000000"
}
let iuri = "teste"
iuri.toLowerCase()
const maskKey = key => "--" + key.replace( /([A-Z])/ , "-$1" ).tolowerCase()



const mudaCor = (color) => {
    Object.keys(color).map( 
        key => html.style.setProperty(maskKey(key), color[key]) 
        )
}

checkbox.addEventListener("change",({target})=>{
    target.checked ? mudaCor(corDark) : mudaCor(corInicial)
})