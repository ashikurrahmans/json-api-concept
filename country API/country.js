function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res = res.json())
    .then(data = country(data))
}

function country(countries){

}