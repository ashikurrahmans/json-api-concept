


const loadDog = data  => {
    fetch(`https://api.thedogapi.com/v1/breeds`)
    .then(response => response.json())
    .then(data => displayDog(data))
}

const displayDog = (doglist) => {
    const section = document.getElementById('main')
    const first20Dog = doglist.slice(0,20);
    console.log(doglist);
    for(const dog of first20Dog){
        const div = document.createElement('div')
        console.log(dog);
        div.innerHTML = `
            <h1>${dog.name}</h1>
            <h4>${dog.temperament}</h4>
        `
        section.appendChild(div)

    }

}