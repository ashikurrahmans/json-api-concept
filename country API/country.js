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
        div.innerHTML =    `
        <h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <button>Know more</button>
        `
        div.classList.add('country')
        divCountry.appendChild(div)
    })
}