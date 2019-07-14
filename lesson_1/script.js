// alert("Hello!");
// confirm("Are you here?");



// var nameShop = prompt("Название вашего магазина?");
var typeGoods1 = prompt("Какой тип товаров будем продавать?");
var typeGoods2 = prompt("Какой тип товаров будем продавать?");
var typeGoods3 = prompt("Какой тип товаров будем продавать?");
var budget = prompt("Ваш бюджет?");


var mainList = {
    budget: budget,
    nameShop: "nameShop",
    shopGoods: [typeGoods1, typeGoods2, typeGoods3],
    employers: [
        {name: "Олег"},
        {name: "Сергей"},
        {name: "Ян"}
    ],
    open: "Property"
};

document.write("<h3>Какой тип товаров будем продавать:</h3>");
for(var i=0; i < mainList.shopGoods.length; i++)
    document.write(mainList.shopGoods[i] + "<br/>");
document.write("<br/>" + "Бюджет на 1 день: " + mainList.budget / 30);
// console.log(mainList.budget / 30);
// console.log(mainList.shopGoods);
// console.log(mainList.employers[1].name);