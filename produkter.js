

fetch("produkter.json")

.then(function(response){
    return response.json();
})

.then(function(data){
    prodData=data
    createList()
});

function createList(){
    var productList=document.createElement("div")
    productList.className="productListClass"

    for(var index=0;index<prodData.length;index++) {
        var prodName=document.createElement("h4");
        var getProdName=document.createTextNode(prodData[index].prodName)
        prodName.appendChild(getProdName);
        var prodPrice=document.createElement("h5");
        var getProdPrice=document.createTextNode(prodData[index].prodPrice)
        prodPrice.appendChild(getProdPrice)
        var prodImage=document.createElement("img")
        prodImage.src="bild/"+prodData[index].prodImage
        prodImage.className="prodImageClass"



        console.log()
        console.log(prodName)
        console.log(prodPrice)

        productList.appendChild(prodImage)
        productList.appendChild(prodName)
        productList.appendChild(prodPrice)
        document.body.appendChild(productList)
    }
}



