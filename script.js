let totalPrice = 0;
let total = 0;
let discount = 0;

function addToCart(target) {
  const cardTitle = document.getElementsByClassName("card-title")[target].innerText;

  const priceString = document.getElementsByClassName("price")[target].innerText;

  const price = parseFloat(priceString);

  const listItem = document.getElementById("list-item");
  const count = listItem.childElementCount;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${cardTitle}`;

  listItem.appendChild(p);

  totalPrice += price;
  const totalPriceAmount = document.getElementById("total-price");
  totalPriceAmount.innerText = totalPrice.toFixed(2);
  document.getElementById("total").innerText = totalPrice.toFixed(2);

  document.getElementById("coupon-apply").addEventListener("click", function () {
    const couponCode = document.getElementById("coupon-code").value;


    if (totalPrice >= 200) {
      if (couponCode === "SELL200") {
        discount = totalPrice * 0.2;

        const discountOnCoupon = document.getElementById("discount");
        discountOnCoupon.innerText = discount.toFixed(2);

        total = totalPrice - discount;
        document.getElementById("total").innerText = total.toFixed(2);
      }
    }

    document.getElementById("coupon-code").value = "";
  });
}



document.getElementById("btn-home").addEventListener("click", function () {
  totalPrice = 0;
  total = 0;
  discount = 0;

  document.getElementById('total-price').innerText = '00';
  document.getElementById('discount').innerText = '00';
  document.getElementById('total').innerText = '00';

  document.getElementById('list-item').innerHTML = '';

});