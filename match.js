// const number = [10, 30, 40, 50, 60, 70, 0.8, 90];
// for (let itm of number) {
//   console.log(itm);
// }

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

const products = [
  { id: 1, name: "xiami phone one night", price: 19000 },
  { id: 2, name: " iphone", price: 2000 },
  { id: 3, name: " mac book air", price: 12000 },
  { id: 4, name: " lenovo yoga laptop 2-25", price: 190000 },
  { id: 5, name: " dell inspiron laptop", price: 190000 },
  { id: 6, name: " samsung phone note 7", price: 190000 },
  { id: 7, name: "nokia old age phone gone", price: 190000 },
];

function matchProducts(products, search) {
  const match = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}

const result = matchProducts(products, "laptop");
console.log(result);
