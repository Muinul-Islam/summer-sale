let totalPrice = 0;
let discount = 0;
function addToCart(target) {
  const cardTitle =
    document.getElementsByClassName("card-title")[target].innerText;

  const priceString = document.getElementsByClassName("price")[target].innerText;

  const price = parseFloat(priceString);

  const li = document.createElement("li");
  li.innerText = cardTitle;

  const listItem = document.getElementById("list-item");
  listItem.appendChild(li);

  totalPrice = parseFloat(totalPrice) + price;
  const totalPriceAmount = document.getElementById("total-price").innerText = totalPrice.toFixed(2);

  const btnSell = document.getElementById('btn-sell');
  
}
