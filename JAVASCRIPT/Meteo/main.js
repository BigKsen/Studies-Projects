//Database
const citiesTable = [
    { name: "Brussels", image: "./images/brussels.jpg", country: "Belgium", continent: "Europe", nbResidents: "11.748.716" },
    { name: "Paris", image: "./images/paris.jpg", country: "France", continent: "Europe", nbResidents: "67.000.000" },
    { name: "London", image: "./images/london.jpg", country: "Great-Britain", continent: "Europe", nbResidents: "0" },
    { name: "Rome", image: "./images/rome.jpg", country: "Italy", continent: "Southern-Europe", nbResidents: "58.851.000" },
    { name: "Madrid", image: "./images/madrid.jpg", country: "Spain", continent: "Southern-Europe", nbResidents: "0" },
    { name: "Washington", image: "./images/washington.jpg", country: "USA", continent: "America", nbResidents: "0" },
    { name: "Tokyo", image: "./images/tokyo.jpg", country: "Japan", continent: "Asia", nbResidents: "124.299.000" },
    { name: "Lisboa", image: "./images/lisboa.jpg", country: "Portugal", continent: "Europe", nbResidents: "10.302.674" },
    { name: "Beijing", image: "./images/beijing.png", country: "China", continent: "Asia", nbResidents: "21.893.095" },
    { name: "Buenosaires", image: "./images/buenosaires.jpeg", country: "Argentina", continent: "Southern-America", nbResidents: "3.120.612" },
    { name: "Ottawa", image: "./images/ottawa.jpg", country: "Canada", continent: "Northern-America", nbResidents: "1.017.449" },
    { name: "Zagreb", image: "./images/zagreb.jpg", country: "Croatia", continent: "Southern-Europe", nbResidents: "790.017" },
]

//Créer les éléments et leur attribuer les ID et les CLASS

//TITRE
const TITLE_doc = document.createElement("H1")
TITLE_doc.textContent = "Worldwide METEO"

//DIV_cities
const DIV_cities = document.createElement("div")
DIV_cities.id = "div_cities"

// //cities
// const DIV_Brussels = document.createElement("div")
// DIV_Brussels.id = "Brussels"
// DIV_Brussels.classList = "cities"
// DIV_Brussels.textContent = "Brussels"
// const DIV_Brussels_child = document.createElement("div")
// DIV_Brussels_child.classList = "city_child"



// const DIV_Paris = document.createElement("div")
// DIV_Paris.id = "Paris"
// DIV_Paris.classList = "cities"
// DIV_Paris.textContent = "Paris"
// const DIV_Paris_child = document.createElement("div")
// DIV_Paris_child.classList = "city_child"


// const DIV_London = document.createElement("div")
// DIV_London.id = "London"
// DIV_London.classList = "cities"
// DIV_London.textContent = "London"
// const DIV_London_child = document.createElement("div")
// DIV_London_child.classList = "city_child"


// const DIV_Rome = document.createElement("div")
// DIV_Rome.id = "Rome"
// DIV_Rome.classList = "cities"
// DIV_Rome.textContent = "Rome"
// const DIV_Rome_child = document.createElement("div")
// DIV_Rome_child.classList = "city_child"


// const DIV_Madrid = document.createElement("div")
// DIV_Madrid.id = "Madrid"
// DIV_Madrid.classList = "cities"
// DIV_Madrid.textContent = "Madrid"
// const DIV_Madrid_child = document.createElement("div")
// DIV_Madrid_child.classList = "city_child"


// const DIV_Washington = document.createElement("div")
// DIV_Washington.id = "Washington"
// DIV_Washington.classList = "cities"
// DIV_Washington.textContent = "Washington"
// const DIV_Washington_child = document.createElement("div")
// DIV_Washington_child.classList = "city_child"

// const DIV_Tokyo = document.createElement("div")
// DIV_Tokyo.id = "Tokyo"
// DIV_Tokyo.classList = "cities"
// DIV_Tokyo.textContent = "Tokyo"
// const DIV_Tokyo_child = document.createElement("div")
// DIV_Tokyo_child.classList = "city_child"

// const DIV_Lisboa = document.createElement("div")
// DIV_Lisboa.id = "Lisboa"
// DIV_Lisboa.classList = "cities"
// DIV_Lisboa.textContent = "Lisboa"
// const DIV_Lisboa_child = document.createElement("div")
// DIV_Lisboa_child.classList = "city_child"

// const DIV_Beijing = document.createElement("div")
// DIV_Beijing.id = "Beijing"
// DIV_Beijing.classList = "cities"
// DIV_Beijing.textContent = "Beijing"
// const DIV_Beijing_child = document.createElement("div")
// DIV_Beijing_child.classList = "city_child"

// const DIV_Buenosaires = document.createElement("div")
// DIV_Buenosaires.id = "Buenosaires"
// DIV_Buenosaires.classList = "cities"
// DIV_Buenosaires.textContent = "Buenos Aires"
// const DIV_Buenosaires_child = document.createElement("div")
// DIV_Buenosaires_child.classList = "city_child"

// const DIV_Ottawa = document.createElement("div")
// DIV_Ottawa.id = "Ottawa"
// DIV_Ottawa.classList = "cities"
// DIV_Ottawa.textContent = "Ottawa"
// const DIV_Ottawa_child = document.createElement("div")
// DIV_Ottawa_child.classList = "city_child"

// const DIV_Zagreb = document.createElement("div")
// DIV_Zagreb.id = "Zagreb"
// DIV_Zagreb.classList = "cities"
// DIV_Zagreb.textContent = "Zagreb"
// const DIV_Zagreb_child = document.createElement("div")
// DIV_Zagreb_child.classList = "city_child"



//Inserer les elements les uns dans les autres

//recup body du HTML et insértion dedans du title et de la div principale
const body = document.querySelector("body")
body.append(TITLE_doc, DIV_cities)

// //inserer les div city_child dans les div city_parent
// DIV_Brussels.append(DIV_Brussels_child)
// DIV_Paris.append(DIV_Paris_child)
// DIV_Madrid.append(DIV_Madrid_child)
// DIV_Rome.append(DIV_Rome_child)
// DIV_Lisboa.append(DIV_Lisboa_child)
// DIV_Zagreb.append(DIV_Zagreb_child)
// DIV_Washington.append(DIV_Washington_child)
// DIV_Ottawa.append(DIV_Ottawa_child)
// DIV_Buenosaires.append(DIV_Buenosaires_child)
// DIV_Beijing.append(DIV_Beijing_child)
// DIV_Tokyo.append(DIV_Tokyo_child)
// DIV_London.append(DIV_London_child)


// //inserer les div des différentes villes dans la div principale cities
// DIV_cities.append(DIV_Brussels, DIV_Paris, DIV_London, DIV_Rome, DIV_Madrid, DIV_Washington, DIV_Tokyo, DIV_Lisboa, DIV_Beijing, DIV_Buenosaires, DIV_Ottawa, DIV_Zagreb)






//Fonction d'appel en console.log()

function displayCities(cities) {
    cities.forEach((city, index) => {

        // On créé la boucle générale qui
        //-créé une div centrale
        //-donne à la div centrale un id, une classe 
        const DIV_CITY = document.createElement("div")
        DIV_CITY.id = city.name
        DIV_CITY.classList = "cities"

        // On remplit la boucle générale avec les sous-balises (name, img, pays, continent, nbResident)

        //on créé les sous-balises CHILD
        const DIV_child = document.createElement("div")
        DIV_child.classList = "city_child"


        // On créé les sous-balises DE CHILD, on leur donne une classe et on les remplit avec les données database
        const DIV_name = document.createElement("p")
        DIV_name.classList = "city_child_name"
        DIV_name.textContent = city.name

        const DIV_img = document.createElement("img")
        DIV_img.classList = "city_child_img"
        DIV_img.src = city.image
        // ne pas insérer l'image avec INNER.HTML ou TEXT.CONTENT mais bien avec SRC

        const DIV_country = document.createElement("p")
        DIV_country.classList = "city_child_country"
        DIV_country.textContent = (`Country: ${city.country}`)

        const DIV_continent = document.createElement("p")
        DIV_continent.classList = "city_child_continent"
        DIV_continent.textContent = (`Continent: ${city.continent}`)

        const DIV_nbResidents = document.createElement("p")
        DIV_nbResidents.classList = "city_child_nbResidents"
        DIV_nbResidents.textContent = (`Residents: ${city.nbResidents}`)


        //On raccroche à la balise CHILD à ses composants: name, img, country, continent et nbResidents
        DIV_child.append(DIV_name, DIV_img, DIV_country, DIV_continent, DIV_nbResidents)

        // On raccroche à la balise VILLE sa balise CHILD 
        DIV_CITY.append(DIV_child)

        // On raccroche à la balise GENERALE SES balises VILLE
        DIV_cities.append(DIV_CITY)

    });
}
//appel de la fonction ci-dessus
displayCities(citiesTable);


