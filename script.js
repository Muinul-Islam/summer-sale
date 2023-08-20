let totalPrice = 0;
let total = 0;
let discount = 0;

function addToCart(target) {
  const cardTitle =
    document.getElementsByClassName("card-title")[target].innerText;

  const priceString =
    document.getElementsByClassName("price")[target].innerText;

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

  if (totalPrice <= 0) {
    document.getElementById("make-purchase").setAttribute("disabled", "true");
  } else {
    document.getElementById("make-purchase").removeAttribute("disabled");
  }
}

document.getElementById("coupon-apply").addEventListener("click", function () {
  const couponCode = document.getElementById("coupon-code").value;

  if (couponCode === " ") {
    document.getElementById("coupon-apply").setAttribute("disabled", "true");
  }
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

document.getElementById("btn-home").addEventListener("click", function () {
  window.location.href = 'index.html';
});