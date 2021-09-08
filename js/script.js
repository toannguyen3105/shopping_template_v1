let calBtn = document.querySelector("#cal-btn");
let navbar = document.querySelector(".navbar");

calBtn.onclick = () => {
  console.log("get-price");

  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  console.log(total);
  document.getElementById("price").innerHTML = "$" + total;
};
