function searchButton(){
    const inputField = document.getElementById('inputField')
    const inputFieldValue = inputField.value
    const error = document.getElementById('error');
    console.log(inputFieldValue);
    // Error Handeling 
    if(inputFieldValue % 1 === 0){
        error.innerText = "Please write a valid country name";
    }
    else{
         document.getElementById('spinners').style.display = 'block';

        fetch(`https://restcountries.com/v3.1/name/${inputFieldValue}`)
            .then(response => response.json())
            .then(countries => displayCards(countries))
            document.getElementById('inputField').value = '';

    const displayCards = countries =>{
        document.getElementById('spinners').style.display = 'none';
        error.innerHTML = ''
        const main = document.getElementById('countries')
        main.innerHTML = ''
        for(const country of countries){
            let countryLanguage;
            for(let language in country.languages){
                if(country.languages.hasOwnProperty(language)){
                    countryLanguage = country.languages[language]
                }  
            }

              const div = document.createElement('div');
              console.log(country);
             div.className = 'col-lg-4'
              div.innerHTML = `
                    <div class="card" style="width: 25rem;">
                    <img src="${country.flags.png}" class="card-img-top" style="width:400px;height:230px;">
                    <div class="card-body">
                        <h2 class="card-title">${country.name.common}</h2>
                        <p class="card-text">Capital: ${country.capital}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">language: ${countryLanguage}</p>
                        <p class="card-text">Continents: ${country.continents}</p>
                        <a href="${country.maps.googleMaps}" class="btn btn-primary">Know more</a>
                    </div>
                    </div>
              
              `;
              main.appendChild(div)

        }
    }

}
}




