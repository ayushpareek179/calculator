let screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let ans = "";

function ops(e) {
  const clicked = e.target.innerText;
  if (clicked === "×") {
    ans += "*";
    screen.value += "×";
  } else if (clicked === "÷") {
    ans += "/";
    screen.value += "÷";
  } else if (clicked === "=") {
    if (ans !== "") {
      screen.value = eval(ans);
      ans = screen.value;
    }
  } else if (clicked === "C") {
    screen.value = ans = "";
  } else if (clicked === "MOD") {
    ans += "%";
    screen.value += " MOD ";
  } else {
    ans += clicked;
    screen.value += clicked;
  }
  console.log(clicked);
}

buttons.forEach(function () {
  addEventListener("click", ops);
});
