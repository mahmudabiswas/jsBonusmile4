const student = {
  name: "sakib khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "salman", "amir"],
  movies: [
    { name: "no.1", year: 2015 },
    { name: "salam", year: 2000 },
  ],
  act: function () {
    console.log("acting like that");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2050,
    manufacturer: {
      name: "tesla",
      ceo: "elon mask",
    },
  },
};

// console.log(student);
// console.log(student.friends);
// console.log(student.car.manufacturer["name"]);
// console.log(student.movies[1]);
// console.log(student.act());
student.act();
