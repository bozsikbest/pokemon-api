//console.log("hello")
var count =1

function asd(text, src){
    const img = document.createElement("img")
    img.src=src
    const asd=document.createElement("div")
    
    asd.textContent = text
    asd.append(document.createElement("br"))
    asd.append(img)
    document.body.appendChild(asd)
    document.body.appendChild(document.createElement("br"))
    
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
    
    
}

get("https://pokeapi.co/api/v2/pokemon/")