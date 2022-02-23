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
       <h1> Name : ${user.name.first} ${user.name.last}</h1> 
       <h2> Email Address: ${user.email}</h2>`
       userDiv.appendChild(pdata)
       
   }
    
}