let avokado = {
  name: "Авокадо",
  isHealth: true,
  spoons: Math.floor(Math.random() * 5 + 2)
}
let banana = {
  name: "Банан",
  isHealth: true,
  spoons: Math.floor(Math.random() * 5 + 2)
}
let doshik = {
  name: "Дошик",
  isHealth: false,
  spoons: Math.floor(Math.random() * 5 + 2)
}

let apple = {
  name: "Яблоко",
  isHealth: false,
  spoons: Math.floor(Math.random() * 5 + 2)
}

function checkMeal(food) {
    if (food.isHealth === true) {
      console.log(food.name + " можно употреблять");
    } else {
      console.log(food.name + " нельзя употреблять. Иди лучше поешь гречи.");
    }
    for (let i = 0; i < food.spoons; i++) {
      console.log("ном-ном-ном")
    }
}
checkMeal(doshik)
