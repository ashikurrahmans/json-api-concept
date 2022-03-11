function inputValue() {
  const inputField = document.getElementById("inputField");
  const inputFieldValue = inputField.value.toLowerCase();
  const error = document.getElementById("error");
  const main = document.getElementById("allProduct");
  const singleProduct = document.getElementById("singleProduct");

  // Error Handeling Area Start

  if (inputFieldValue === "") {
    error.innerText = "Please write a valid phone name.";
    main.innerHTML = "";
    singleProduct.innerHTML = "";
  } else if (inputFieldValue % 1 === 0) {
    error.innerText = "Please write a valid phone name.";
    main.innerHTML = "";
    singleProduct.innerHTML = "";
  } else {
    document.getElementById("spinners").style.display = "block";
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`
    )
      .then((response) => response.json())
      .then((data) => phones(data.data));
    document.getElementById("inputField").value = "";
    error.innerText = "";
  }
}

inputField.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    document.getElementById("button-addon2").click();
  }
});

// Extracting Data From API - All Product

const phones = (phones) => {
  if (!phones.length) {
    error.innerText = "Please write a valid phone name..";
    document.getElementById("spinners").style.display = "none";
  } else {
    const signlePhone = phones.slice(0, 20);
    document.getElementById("spinners").style.display = "none";
    const main = document.getElementById("allProduct");
    main.innerHTML = "";
    signlePhone.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col");
      // console.log(phone);
      div.innerHTML = `     
    <div class="card h-100 border-radius">
         <img src="${phone.image}" class="card-img-top w-60">
        <div class="card-body">
             <h5 class="card-title">${phone.phone_name}</h5>
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <a href="#" class="btn btn-primary" onclick="fullDetails('${phone.slug}')">Details</a>
        </div>
    </div>                 
      `;
      main.appendChild(div);
    });
  }
};

// Extracting Data From API - All Products included Single Product
const fullDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((response) => response.json())
    .then((data) => singleProduct(data.data));
};

const singleProduct = (data) => {
  console.log(data);
  const singleProduct = document.getElementById("singleProduct");
  const div = document.createElement("div");
  div.setAttribute("class", "row d-flex border-radius");
  singleProduct.innerHTML = "";
  div.innerHTML = `
        <div class="image-area col-sm-12 col-md-4">
            <img src="${data.image}" alt="" class="w-100">
         </div>
         <div class="productDetailsArea col-sm-12 col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Brand: ${data.brand}</li>
                    <li class="list-group-item">Model: ${data.name}</li>
                    <li class="list-group-item">Chipset: ${
                      data.mainFeatures.chipSet
                    }</li>
                    <li class="list-group-item">Memory: ${
                      data.mainFeatures.memory
                    }</li>
                    <li class="list-group-item">Sensors: ${
                      data.mainFeatures.sensors[0]
                    }</li>
                    <li class="list-group-item">Sensors: ${
                      data.mainFeatures.sensors[1]
                    }</li>
                    <li class="list-group-item">Sensors: ${
                      data.mainFeatures.sensors[2]
                    }</li>
                    <li class="list-group-item text-danger">Others</li>
                    <li class="list-group-item">Bluetooth: ${
                      data.others ? data.others.Bluetooth : "Not Found!"
                    }
                    <li class="list-group-item">GPS: ${
                      data.others ? data.others.GPS : "Not Found!"
                    }</li>
                    <li class="list-group-item">WLAN: ${
                      data.others ? data.others.WLAN : "Not Found!"
                    }</li>
                    <li class="list-group-item">USB: ${
                      data.others ? data.others.USB : "Not Found!"
                    }</li>
                  <li class="list-group-item">Release Data: ${
                    data.releaseDate
                  }</li> 
                 

                </ul>

         </div>
    
    `;
  singleProduct.appendChild(div);
};
