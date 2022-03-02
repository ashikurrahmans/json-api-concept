function foodInputField(){
    const inputField = document.getElementById('inputField')
    const inputValue = inputField.value
    inputField.value = ''
    console.log(inputValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
        .then(response => response.json())
        .then(data => cards(data))

}


const cards = data =>{
    const cards = document.getElementById("cards")
    console.log(data);
}
