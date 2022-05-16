const button = document.querySelector("#change");
let numberStyleSheet = 0;


button.addEventListener("click", (e) => {

  let style = document.getElementById("pagestyle");

  function changeStyle() {
    if (numberStyleSheet === 0) {
      style.href = "../css/style1.css";
      numberStyleSheet = 1;

    } else if (numberStyleSheet === 1) {
      style.href = "../css/style2.css";
      numberStyleSheet = 2;

    } else {
      style.href = "../css/style3.css";
      numberStyleSheet = 0;
 
    }
  }

  changeStyle();
});
