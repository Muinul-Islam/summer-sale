function addToCart(index){
  const cardTitle = document.getElementsByClassName('card-title')[index].innerText;

  const priceString = document.getElementsByClassName('price')[index].innerText;

  const price = parseFloat(priceString);
  console.log(cardTitle , price);
}