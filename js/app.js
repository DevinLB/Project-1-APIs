console.log("sanity")


let divNumber = 0;


const pokemonList = (pkInfo) => {
    console.log("function run")
    console.log(pkInfo.name)

    //create html structure
    const div1 = document.getElementById("div1")
    const div2 = document.createElement("div")
    div2.setAttribute("id", "div2")
    div1.appendChild(div2)

    let image = document.createElement("img")
    div2.appendChild(image)

    const ul1 = document.createElement("ul") 
    ul1.setAttribute("id", "ul1")
    div2.appendChild(ul1)

    //picture
    pokemonSprite = pkInfo.sprites.front_default
    image.setAttribute("src", pokemonSprite)

    //name
    let pokemonName = pkInfo.name.charAt(0).toUpperCase() + pkInfo.name.slice(1)
    const pokeName = document.createElement("li")
    ul1.appendChild(pokeName)
    pokeName.textContent = `ID ` + `${pkInfo.id} ` + pokemonName


    //type
    let type = document.createElement("li")
    ul1.appendChild(type)
    type.textContent = `Type:`
    const ol1 = document.createElement("ol") 
    ol1.setAttribute("id", "ol1")
    ul1.appendChild(ol1)

    for (let i = 0; i < pkInfo.types.length; i++) {
        let pokemonType = pkInfo.types[i].type.name.charAt(0).toUpperCase() + pkInfo.types[i].type.name.slice(1)
        const li = document.createElement("li")
        ol1.appendChild(li)
        li.textContent = pokemonType
    }

    //height/weight
    const pokeSize = document.createElement("li")
    ul1.appendChild(pokeSize)
    pokeSize.textContent = `Height: ` + `${pkInfo.height}` + ` Weight: ` + `${pkInfo.weight}`

    //abilities
    let olAbility = document.createElement("li")
    ul1.appendChild(olAbility)
    olAbility.textContent = `Ability(s):`
    const ol2 = document.createElement("ol") 
    ol2.setAttribute("id", "ol2")
    ul1.appendChild(ol2)

    for (let i = 0; i < pkInfo.abilities.length; i++) {
        let abilityName = pkInfo.abilities[i].ability.name.charAt(0).toUpperCase() + pkInfo.abilities[i].ability.name.slice(1)
        const li = document.createElement("li")
        ol2.appendChild(li)
        li.textContent =  `Ability ` + (i+1) + ` is ` + abilityName
        }
}

const button = document.querySelector("button")
button.addEventListener("click", function(evt){
    const inp = document.querySelector("input")

    let fetchPath = ""
    fetchPath = "https://pokeapi.co/api/v2/pokemon/" + inp.value
    console.log(fetchPath)
    fetch(fetchPath.toLowerCase())
    .then(function(data){ 
        //console.log(data, "data")
        return data.json() 
    })
    .then(function(parsedData){ 
        const posts = parsedData
        //console.log(posts)
        pokemonList(posts);
         
    })
    


})