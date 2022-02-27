
// js for swaping

function newcar() {

    var brandNew = "brandNewCar.html";
    window.location.href = brandNew;

}
function unBox() {

    var brandNew = "hunMahiPage.html";
    window.location.href = brandNew;


}

// for showing car data 

var car = JSON.parse(localStorage.getItem("unBoxCars"));

console.log(car);
function showcar(car) {
    car.map(function (ele) {
        var mainDiv = document.createElement("div");

        var carImage = document.createElement("img");
        carImage.setAttribute("src", ele.image);
        carImage.setAttribute("id", "carImage");

        var subDiv1 = document.createElement("div");
        subDiv1.setAttribute("id", "carInfo");

        var carName = document.createElement("h1");
        carName.innerText = ele.name;
        var carType = document.createElement("p");
        carType.innerText = ele.type;
        carType.setAttribute("class", "carType");

        var typeDiv = document.createElement("div");
        typeDiv.setAttribute("id", "typeDiv");

        var logo1 = document.createElement("img");
        logo1.setAttribute("src", "https://www.revv.co.in/grapheneImages/CarsAndPricing/transmission-icon.svg");
        logo1.setAttribute("class", "logo");
        var fuel_typo = document.createElement("p");
        fuel_typo.innerText = ele.fuel_type;
        fuel_typo.setAttribute("id", "fuel");

        var logo2 = document.createElement("img");
        logo2.setAttribute("src", "https://www.revv.co.in/grapheneImages/CarsAndPricing/automatic-icon.svg");
        logo2.setAttribute("class", "logo");
        var carFuntion = document.createElement("p");
        carFuntion.innerText = ele.function;
        carFuntion.setAttribute("id", "function");

        typeDiv.append(logo1, fuel_typo, logo2, carFuntion);

        subDiv1.append(carName, carType, typeDiv);

        var priceDiv = document.createElement("div");

        var perMonPrice = document.createElement("h2");
        perMonPrice.innerHTML = "₹" + ele.perMonthPrice + "/month";

        var originalP = document.createElement("h1");
        originalP.innerText = "₹" + ele.originalPrice;
        originalP.style.textDecoration = "line-through";
        originalP.style.color = "#808080";

        priceDiv.append(perMonPrice, originalP);

        mainDiv.append(carImage, subDiv1, priceDiv);

        document.getElementById("Cars").append(mainDiv);


    });
}

showcar(car);