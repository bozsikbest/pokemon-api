//console.log("hello")
var count = 1
var lista = []
var pokes = []

function asd(text, src) {
    const img = document.createElement("img")
    img.src = src;

    const asd = document.createElement("div")
    asd.textContent = text.charAt(0).toUpperCase() + text.slice(1)
    asd.append(document.createElement("br"))
    asd.append(img)
    asd.classList.add("pokemon")

    asd.style.backgroundImage = 
        "linear-gradient(rgb(201 201 201), rgb(247 247 247)), url('" + src + "')"
    
    // Csak a #container-hez adjuk hozzá
    document.getElementById("container").appendChild(asd)
    pokes.push(asd)
    asd.addEventListener('click', function(){
    if(document.getElementById("container")== this.parentElement){
        document.getElementById("container2").appendChild(this)
        lista.push(this.textContent)
    }else{
        document.getElementById("container").appendChild(this)
        lista.splice(lista.indexOf(this.textContent), 1)
    }
    console.log(lista)
    localStorage.setItem("elemek", JSON.stringify(lista))
    
    
})
}

function vissza(){
    lista = JSON.parse(localStorage.getItem("elemek"))

    for(i=0; i<pokes.length; i++){
        for(j=0; j<lista.length; j++){
        if(pokes[i].textContent == lista[j]){
            document.getElementById("container2").appendChild(pokes[i])
        }
    }}
}

async function get(url) {
    const response = await fetch(url)
    //console.log(response)
    const Data = await response.json()
    
    console.log(Data.results)
    for (let index = 0; index < Data.results.length; index++) {
        const poke_response = await fetch(Data.results[index].url)
        //console.log(response)
        const poke_Data = await poke_response.json()
        console.log(poke_Data.sprites.front_default)
        asd(Data.results[index].name, poke_Data.sprites.front_default)
        count++
        
    }
    //if(Data.next != null) get(Data.next)
    
    vissza()
}



get("https://pokeapi.co/api/v2/pokemon/")
