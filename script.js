console.log("hello")

function asd(text){
    const asd=document.createElement("div")
    asd.textContent = text
    document.body.appendChild(asd)
}
async function get(url) {
    const response = await fetch(url)
    console.log(response)
    const dataasd = await response.json()
    console.log(dataasd.results)
    for (let index = 0; index < dataasd.results.length; index++) {
       asd(dataasd.results[index].name)
       
        
    }
    if(dataasd.next != null) get(dataasd.next)
    
    
}

get("https://pokeapi.co/api/v2/pokemon/")