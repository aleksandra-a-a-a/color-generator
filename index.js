const generateBtn = document.getElementById('get-scheme')
const generatedScheme = document.getElementById('generated-scheme')
const seedColor = document.getElementById('seed-color')
const mode = document.getElementById('scheme')

generateBtn.addEventListener("click", renderScheme)


function renderScheme() {
    color = seedColor.value.replace('#', "")
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode.value}&count=6`)
    .then (res => res.json())
    .then (scheme => {
        let colors = []
        for (let color of scheme.colors){
            colors.push(color.hex.value)
        } 
        generatedScheme.innerHTML = colors.map(function(value) {
            return `
            <div style="background-color: ${value}"><p id='copy-text'>${value}</p></div>
            `
        }).join("");
        
        const toCopy = document.querySelectorAll('p')
        toCopy.forEach((hex) => {
            hex.addEventListener("click", function(){
               navigator.clipboard.writeText(hex.textContent); 
               alert("Copied the text: " + hex.textContent);
            })
        })
    })              
}



