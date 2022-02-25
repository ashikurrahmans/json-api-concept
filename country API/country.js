function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => country(data))
}

loadCountry()
function country(countries){
    const divCountry = document.getElementById('countries')
    countries.forEach(country => {
       const div = document.createElement('div');
       div.setAttribute('class','country')
        div.innerHTML =    `
        <h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <button onclick="loadInfo('${country.name.common}')">Know more</button>
        `       
        divCountry.appendChild(div)
    })
}


const loadInfo = (name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySeeMore(data[0]))

}
const displaySeeMore = data =>{
    const countryDiv = document.getElementById('countryDetail')
    console.log(countryDetail.name);
    countryDiv.innerHTML = `
        <h5>${data.name}</h5>
    `

}