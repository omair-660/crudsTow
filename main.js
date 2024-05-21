var namea = document.getElementById("name");
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var category = document.getElementById("category");
var btnAdd = document.getElementById("btnAdd");
var btnUpdate = document.getElementById("btnUpdate");

if (localStorage.product != null){
    productContent = JSON.parse(localStorage.product);
    
}else{
    productContent = [];
    
}

btnAdd.onclick = function () {
    var product = {
        name: namea.value,
        price: price.value,
        category: category.value,
        desc: desc.value
    }
    productContent.push(product);
    localStorage.setItem("product", JSON.stringify(productContent));
    display(); 
    
    clearProducts();
    Swal.fire({
        title: "Product Added!",
        text: "Product added successfully!",
        icon: "success"
      });
}

function clearProducts() {
    namea.value = null;
    price.value = null;
    category.value = null;
    desc.value = null;
}

var rowData = document.getElementById("rowData");

function display(){
    cartona = "";

    for(var i = 0;i<productContent.length;i++){
        cartona += `
        <div class="col-md-4 mb-4">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title bolder">Name: <sapn>${productContent[i].name}</sapn></h5>
        <p class="card-text bolder">Price: <span>${productContent[i].price}</span></p>
        <p class="card-text bolder">Description: <span>${productContent[i].desc}</span></p>
        <p class="card-text bolder">Category: <span>${productContent[i].category}</span></p>
        <div class="">
        <button class="btn btn-danger p-2 m-1 ms-0 w-100" onclick="deleteProduct(${i})">Delete</button>
        <button class="btn btn-outline-success p-2 m-1 ms-0 w-100" onclick="updateeProduct(${i})">update</button>
        </div>
        </div>
        </div>
        </div>
        `
        rowData.innerHTML = cartona;
        
    }
}
display();

function deleteProduct(i) {
    productContent.splice(i, 1); 
   localStorage.setItem("product", JSON.stringify(productContent));
    display(); 
}
var updateIndex;

function updateeProduct(i){
    updateIndex = i;
    btnUpdate.classList.remove("d-none");
    btnAdd.classList.add("d-none");
    namea.value = productContent[i].name;
    price.value = productContent[i].price;
    category.value = productContent[i].category;
    desc.value = productContent[i].desc;
    
}

btnUpdate.onclick = function(){
    btnUpdate.classList.add("d-none");
    btnAdd.classList.remove("d-none");
productContent[updateIndex].name = namea.value;
productContent[updateIndex].price = price.value;
productContent[updateIndex].desc = desc.value;
productContent[updateIndex].category = category.value;
localStorage.setItem("product", JSON.stringify(productContent));
namea.value = null;
price.value = null;
category.value = null;
desc.value = null;
display();
}