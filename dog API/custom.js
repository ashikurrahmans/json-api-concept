


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
        const div = document.createElement('div');
       div.setAttribute('class','col-lg-4 m-2')   
        console.log(dog);
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img src="${dog.image.url}" class="card-img-top" alt="..." width="400px" height="200px">
            <div class="card-body">
                <h5 class="card-title">${dog.name}</h5>
                <p class="card-text">${dog.temperament}</p>
                <a href="#" class="btn btn-primary">Know more</a>
            </div>
        </div>
        `
        section.appendChild(div)

    }

}