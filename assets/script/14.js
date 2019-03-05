function makeCar () {
  let models = ["ВАЗ-2101", "ВАЗ-2102", "ВАЗ-2103", "ВАЗ-2106"]
  let years = [1970, 1971, 1972, 1976, 1979, 1982, 1984]
  let colors = ["red", "blue", "black", "yellow", "white"]
  let seats = [4, 5]
}

let modelLength = Math.floor(Math.random() * models.length)
let yearslLength = Math.floor(Math.random() * years.length)
let colorslLength = Math.floor(Math.random() * colors.length)
let seatslLength = Math.floor(Math.random() * seats.length)

let car = {
  model: models[modelLength)],
  year:  years[yearslLength],
  color: colors[colorslLength],
  seats:  seats[seatslLength]
}

function colorSwitch() {
  if (car.color === color[0]) {
    color[0] = "Красный"
  }
}


return car
}
