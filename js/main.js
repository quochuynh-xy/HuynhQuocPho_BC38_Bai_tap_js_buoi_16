// BÀI TẬP 1:
function ex1() {
  var input = 10000;
  var i = 1;
  var sum = 0;
  while (sum <= input) {
    sum += i;
    i++;
  }
  // console.log(i - 1);
  document.getElementById("exam1Result").innerHTML =
    "Giá trị nhỏ nhất của n: " + (i - 1);
}
// ex1();

// BÀI TẬP 2:
function ex2() {
  var input_x = document.getElementById("number_x").value * 1;
  var input_n = document.getElementById("number_n").value * 1;
  var sum = 0;
  if (input_x <= 0 || input_n <= 0) {
    alert("Nhập vào số tự nhiên > 0");
    return;
  }
  for (var i = 1; i <= input_n; i++) {
    sum += input_x ** i;
  }
  document.getElementById("exam2Result").innerHTML = sum;
}

//BÀI TẬP 3:
function ex3() {
  var n = document.getElementById("ex3number_n").value * 1;
  var i = 1;
  var result = 1;
  if (n <= 0) {
    return alert("Nhập vào n > 0");
  }
  while (i <= n) {
    result *= i;
    i++;
  }
  console.log(result);
  document.getElementById("exam3Result").innerHTML = result;
}

//BÀI TẬP 4:
function ex4() {
  var output = document.getElementById("exam4Result");
  var output_inner = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
      output_inner +=
        '<div style="background-color: green; height: 2rem;"> lẻ </div>';
    } else {
      output_inner +=
        '<div style="background-color: red; height: 2rem;"> chẵn </div>';
    }
    output.innerHTML = output_inner;
  }
}
