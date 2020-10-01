function deleteItem(e){
    var product = e.currentTarget.parentNode.parentNode
    container.removeChild(product)
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function getTotalPrice() {

  var products = document.getElementsByClassName("product-wrapper")
  total = 0
  for(var i = 0; i< products.length; i++){
    unitPrice = products[i].querySelector(".unit-price").innerHTML
    quantity = products[i].querySelector(".quantity").value
    products[i].querySelector(".total-product-price").innerHTML = unitPrice * quantity
    total += unitPrice * quantity
  };

  document.querySelector(".total-price").innerHTML = total
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var productName = document.getElementById("new-product-name").value
  var price = document.getElementById("new-product-price").value

  var productWrapper = document.createElement("div");
  productWrapper.setAttribute("class", "product-wrapper")
  
  var nameSpan = document.createElement("span")
  nameSpan.setAttribute("class", "field")
  nameSpan.innerHTML = productName
  productWrapper.appendChild(nameSpan)

  var priceTag = document.createElement("div")
  priceTag.setAttribute("class", "field")
  var priceSpan = document.createElement("span")
  priceSpan.setAttribute("class", "unit-price")
  priceSpan.innerHTML = price
  priceTag.innerHTML = "$"
  priceTag.appendChild(priceSpan)
  productWrapper.appendChild(priceTag)

  var qtyTag = document.createElement("div")
  qtyTag.setAttribute("class", "field")
  var qtyLabel = document.createElement("label")
  qtyLabel.innerHTML = "QTY"
  qtyLabel.setAttribute("for", "qty")
  var qtyInput = document.createElement("input")
  qtyInput.setAttribute("type", "number")
  qtyInput.setAttribute("name", "qty")
  qtyInput.setAttribute("class", "quantity")
  qtyTag.appendChild(qtyLabel)
  qtyTag.appendChild(qtyInput)
  productWrapper.appendChild(qtyTag)

  var totalTag = document.createElement("div")
  totalTag.setAttribute("class", "field")
  var totalSpan = document.createElement("span")
  totalSpan.setAttribute("class", "total-product-price")
  totalSpan.innerHTML = "0.00"
  totalTag.innerHTML = "$"
  totalTag.appendChild(totalSpan)
  productWrapper.appendChild(totalTag)

  var deleteTag = document.createElement("div")
  deleteTag.setAttribute("class", "field")
  var deleteButton = document.createElement("button")
  deleteButton.setAttribute("class", "btn btn-delete")
  deleteButton.innerHTML = "Delete"
  deleteTag.appendChild(deleteButton)
  productWrapper.appendChild(deleteTag)


  var parent = document.getElementById("container")
  parent.appendChild(productWrapper)
  toDelete();
}

function toDelete (){
  deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;

  var container = document.getElementById("container")
  toDelete();
  

  createItemButton.onclick = createNewItem;
};
