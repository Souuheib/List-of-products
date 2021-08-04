const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(event){
  event.preventDefault();
  
  const productsIN = form.elements.product;
  const quantityIN = form.elements.qty;
  addTolist(productsIN.value, quantityIN.value);
  productsIN.value ='';
  quantityIN.value ='';
    //console.log(newli);
  //newli.appendChild(products);
  //newli.appendChild("-" + quantity);
  //console.log(newli.value);
  //console.log(quantity);
})

const addTolist = (products, quantity) => {
  const newli = document.createElement('li');
  newli.append(products);
  newli.append(`- ${quantity}`);
  ul.append(newli);


}
