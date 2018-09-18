

fetch("produkter.json")

.then(function(response){
    return response.json();
})

.then(function(data){
    prodData=data
    console.log(prodData)
    createList()
});

function createList(){
    var productList=document.createElement("div")
    productList.className="productListClass"
    console.log(productList)

    for(var index=0;index<prodData.length;index++) {
        var prodName=document.createElement("h3")
        var prodName=document.createTextNode(prodData[index].prodName)
        var prodPrice=document.createTextNode(prodData[index].prodPrice)
        var prodImage=document.createElement("img")
        prodImage.src="bild/"+prodData[index].prodImage
        productList.appendChild(prodImage)
        productList.appendChild(prodName)
        productList.appendChild(prodPrice)
        document.body.appendChild(productList)
        console.log()
    }
}



