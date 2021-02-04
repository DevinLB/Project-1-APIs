console.log("sanity")

const pokemonList = (pkInfo) => {
    console.log("function run")
    console.log(pkInfo.name)
    //create html structure
    const div1 = document.getElementById("div1")
    const div2 = document.createElement("div")
    div2.setAttribute("id", "div2")
    div1.appendChild(div2)

    const ul1 = document.createElement("ul") 
    ul1.setAttribute("id", "ul1")
    div2.appendChild(ul1)
    //picture

    //name
    let pokemonName = pkInfo.name.charAt(0).toUpperCase() + pkInfo.name.slice(1)
    const pokeName = document.createElement("li")
    ul1.appendChild(pokeName)
    pokeName.textContent = `ID ` + `${pkInfo.id} ` + pokemonName

    //height/weight
    const pokeSize = document.createElement("li")
    ul1.appendChild(pokeSize)
    pokeSize.textContent = `Height: ` + `${pkInfo.height}` + ` Weight: ` + `${pkInfo.weight}`

    //abilities
    //const ul = document.createElement("ul")
    //document.getElementById("div1").appendChild(ul1)
    for (let i = 0; i < pkInfo.abilities.length; i++) {
        const li = document.createElement("li")
        ul1.appendChild(li)
        li.textContent =  `Ability ` + (i+1) + ` is ` + `${pkInfo.abilities[i].ability.name}`
        }

    //

    // for (let i = 0; i < pkInfo.; i++) {
    //     const li = document.createElement("li")
    //     document.querySelector("ul").appendChild(li)
    //     li.textContent =  ``
    //  }
}

const button = document.querySelector("button")
button.addEventListener("click", function(evt){
    //const li = document.createElement("li")
    const inp = document.querySelector("input")
    //li.textContent = inp.value
   // inp.value = ""
    //console.log(li.outerHTML)
    console.log(inp.outerHTML)
    //document.querySelector("ul").appendChild(li)

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
         console.log(posts)
        //  console.log(posts.abilities[0])
        //  console.log(posts.abilities[0].ability)
        //  console.log(posts.abilities[0].ability.name)
         for (let i = 0; i < posts.abilities.length; i++) {
        //const li = document.createElement("li")
        //document.querySelector("ul").appendChild(li)
        //li.textContent =  `${posts.name}` + ` ability ` + (i+1) + ` is ` + `${posts.abilities[i].ability.name}`
        //li.textContent =  `${posts.name}` + ` ` + (i+1) + ` ` + `${posts.abilities[i].ability.name}`
        
        
        }
        pokemonList(posts);
         
    })
    


})






    fetch(("https://pokeapi.co/api/v2/pokemon/typhlosion"))
    .then(function(data){ 
        return data.json() 
    })
    .then(function(parsedData){ 
         const posts = parsedData
         console.log(posts)
    })

