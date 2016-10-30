myShoes = {
  brand: "Teva",
  color: ["black", "yellow"],
  size: 9,
  price: 1000,
  forFemale: false,
  //    prevShoes: {…},
  discount: function (num) {
    return Math.floor(this.price * num / 10)
  }
}