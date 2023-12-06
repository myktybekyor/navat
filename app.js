const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("disp");
});


document.querySelector("#submit").onclick = function() {
    alert("Your table ACCEPTED! Thank you for your order!");
}


document.querySelector("#submit2").onclick = function() {
    alert("Your booking ACCEPTED! Thank you for your booking!");
}