function loadUser(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => randomUsers(data))
}

const randomUsers = data =>{
    const result = data.results
   for(const user of result){
       const userDiv = document.getElementById('user')
       const pdata = document.createElement('li')
       console.log(user);
       pdata.innerHTML = `
       <h1> My first Name is : ${user.name.first} ${user.name.last}</h1> 
       <h2> Also email address is : ${user.email}</h2>`
       userDiv.appendChild(pdata)
       
   }
    
}